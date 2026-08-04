import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const generateUploadUrl = mutation({
    args: {},
    handler: async (ctx) => {
        return await ctx.storage.generateUploadUrl();
    },
});

const postStatus = v.union(v.literal('active'), v.literal('draft'));

export const seedContent = mutation({
    args: {
        categories: v.array(v.object({ title: v.string(), slug: v.string() })),
        posts: v.array(
            v.object({
                title: v.string(),
                slug: v.string(),
                thumbnail: v.optional(v.string()),
                excerpt: v.string(),
                body: v.string(),
                categorySlug: v.string(),
                author: v.string(),
                status: postStatus,
                publishedAt: v.string(),
                metaTitle: v.string(),
                metaDescription: v.string(),
            })
        ),
        galleryItems: v.array(
            v.object({
                title: v.string(),
                image: v.optional(v.string()),
                category: v.string(),
            })
        ),
        textWidgets: v.array(
            v.object({
                key: v.string(),
                title: v.string(),
                content: v.string(),
                image: v.optional(v.string()),
                active: v.boolean(),
            })
        ),
        contacts: v.array(
            v.object({
                name: v.string(),
                email: v.string(),
                phoneNumber: v.string(),
                inquireType: v.string(),
                message: v.string(),
                createdAt: v.string(),
            })
        ),
        quotes: v.array(
            v.object({
                name: v.string(),
                email: v.string(),
                message: v.string(),
                createdAt: v.string(),
            })
        ),
        subscribers: v.array(
            v.object({
                name: v.optional(v.string()),
                email: v.string(),
                createdAt: v.string(),
            })
        ),
    },
    handler: async (ctx, args) => {
        for (const table of [
            'categories',
            'posts',
            'galleryItems',
            'textWidgets',
            'contacts',
            'quotes',
            'subscribers',
        ] as const) {
            const existing = await ctx.db.query(table).collect();
            for (const doc of existing) {
                await ctx.db.delete(doc._id);
            }
        }

        const categoryIdBySlug = new Map<string, string>();
        for (const c of args.categories) {
            const id = await ctx.db.insert('categories', {
                title: c.title,
                slug: c.slug,
            });
            categoryIdBySlug.set(c.slug, id);
        }

        for (const p of args.posts) {
            const categoryId = categoryIdBySlug.get(p.categorySlug);
            if (categoryId === undefined) continue;
            await ctx.db.insert('posts', {
                title: p.title,
                slug: p.slug,
                thumbnail: p.thumbnail,
                excerpt: p.excerpt,
                body: p.body,
                categoryId,
                author: p.author,
                status: p.status,
                publishedAt: p.publishedAt,
                metaTitle: p.metaTitle,
                metaDescription: p.metaDescription,
            });
        }

        for (const g of args.galleryItems) {
            await ctx.db.insert('galleryItems', {
                title: g.title,
                image: g.image,
                category: g.category,
            });
        }

        for (const w of args.textWidgets) {
            await ctx.db.insert('textWidgets', {
                key: w.key,
                title: w.title,
                content: w.content,
                image: w.image,
                active: w.active,
            });
        }

        for (const c of args.contacts) {
            await ctx.db.insert('contacts', {
                name: c.name,
                email: c.email,
                phoneNumber: c.phoneNumber,
                inquireType: c.inquireType,
                message: c.message,
                createdAt: c.createdAt,
            });
        }

        for (const q of args.quotes) {
            await ctx.db.insert('quotes', {
                name: q.name,
                email: q.email,
                message: q.message,
                createdAt: q.createdAt,
            });
        }

        for (const s of args.subscribers) {
            await ctx.db.insert('subscribers', {
                name: s.name,
                email: s.email,
                createdAt: s.createdAt,
            });
        }

        const counts = {
            categories: args.categories.length,
            posts: args.posts.length,
            galleryItems: args.galleryItems.length,
            textWidgets: args.textWidgets.length,
            contacts: args.contacts.length,
            quotes: args.quotes.length,
            subscribers: args.subscribers.length,
        };
        return counts;
    },
});
