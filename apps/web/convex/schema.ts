import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    categories: defineTable({
        title: v.string(),
        slug: v.string(),
    }).index('by_slug', ['slug']),

    posts: defineTable({
        title: v.string(),
        slug: v.string(),
        thumbnail: v.optional(v.string()),
        excerpt: v.string(),
        body: v.string(),
        categoryId: v.string(),
        author: v.string(),
        status: v.union(v.literal('active'), v.literal('draft')),
        publishedAt: v.string(),
        metaTitle: v.string(),
        metaDescription: v.string(),
    })
        .index('by_slug', ['slug'])
        .index('by_category', ['categoryId'])
        .index('by_status', ['status']),

    galleryItems: defineTable({
        title: v.string(),
        image: v.optional(v.string()),
        category: v.string(),
    }),

    textWidgets: defineTable({
        key: v.string(),
        title: v.string(),
        content: v.string(),
        image: v.optional(v.string()),
        active: v.boolean(),
    }).index('by_key', ['key']),

    contacts: defineTable({
        name: v.string(),
        email: v.string(),
        phoneNumber: v.string(),
        inquireType: v.string(),
        message: v.string(),
        createdAt: v.string(),
    }),

    quotes: defineTable({
        name: v.string(),
        email: v.string(),
        message: v.string(),
        createdAt: v.string(),
    }),

    subscribers: defineTable({
        name: v.optional(v.string()),
        email: v.string(),
        createdAt: v.string(),
    }).index('by_email', ['email']),
});
