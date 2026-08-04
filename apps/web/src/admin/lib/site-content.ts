export type PostStatus = 'active' | 'draft';

export interface Post {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly thumbnail: string;
    readonly excerpt: string;
    readonly body: string;
    readonly categoryId: string;
    readonly author: string;
    readonly status: PostStatus;
    readonly publishedAt: string;
    readonly metaTitle: string;
    readonly metaDescription: string;
}

export interface Category {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly postCount: number;
}

export interface GalleryItem {
    readonly id: string;
    readonly title: string;
    readonly image: string;
    readonly category: string;
}

export interface TextWidget {
    readonly id: string;
    readonly key: string;
    readonly title: string;
    readonly content: string;
    readonly image: string;
    readonly active: boolean;
}

export interface Contact {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly inquireType: string;
    readonly message: string;
    readonly createdAt: string;
}

export interface Quote {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly message: string;
    readonly createdAt: string;
}

export interface NewsletterSubscriber {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly createdAt: string;
}

export const categories: Category[] = [
    { id: 'cat-1', title: 'Farm News', slug: 'farm-news', postCount: 18 },
    { id: 'cat-2', title: 'Crop Guides', slug: 'crop-guides', postCount: 12 },
    { id: 'cat-3', title: 'Livestock', slug: 'livestock', postCount: 9 },
    {
        id: 'cat-4',
        title: 'Sustainable Farming',
        slug: 'sustainable-farming',
        postCount: 7,
    },
];

export const posts: Post[] = [
    {
        id: 'post-1',
        title: 'Starting an Organic Vegetable Garden in Uganda',
        slug: 'starting-organic-vegetable-garden-uganda',
        thumbnail: '',
        excerpt:
            'A practical guide to getting your first organic vegetable garden off the ground.',
        body: "Soil preparation is the most important first step. Begin by testing your soil's pH and fertility...",
        categoryId: 'cat-2',
        author: 'Admin',
        status: 'active',
        publishedAt: '2025-06-15',
        metaTitle: 'Starting an Organic Vegetable Garden in Uganda',
        metaDescription:
            'Learn how to start an organic vegetable garden in Uganda.',
    },
    {
        id: 'post-2',
        title: 'Best Practices for Raising Healthy Poultry',
        slug: 'best-practices-raising-healthy-poultry',
        thumbnail: '',
        excerpt:
            'Keep your flock thriving with these essential poultry-raising tips.',
        body: 'Housing, feeding, and disease prevention are the pillars of healthy poultry...',
        categoryId: 'cat-3',
        author: 'Admin',
        status: 'active',
        publishedAt: '2025-05-28',
        metaTitle: 'Best Practices for Raising Healthy Poultry',
        metaDescription:
            'Essential tips for raising healthy and productive poultry.',
    },
    {
        id: 'post-3',
        title: 'Understanding Soil Composting Fundamentals',
        slug: 'understanding-soil-composting-fundamentals',
        thumbnail: '',
        excerpt:
            'Turn kitchen and farm waste into rich compost for better yields.',
        body: 'Composting transforms organic waste into nutrient-rich soil amendments...',
        categoryId: 'cat-4',
        author: 'Admin',
        status: 'draft',
        publishedAt: '2026-01-10',
        metaTitle: '',
        metaDescription: '',
    },
];

export const galleryItems: GalleryItem[] = [
    { id: 'gal-1', title: 'Harvest Day', image: '', category: 'Crops' },
    {
        id: 'gal-2',
        title: 'Our Poultry Shed',
        image: '',
        category: 'Livestock',
    },
    {
        id: 'gal-3',
        title: 'Irrigation Setup',
        image: '',
        category: 'Facilities',
    },
];

export const textWidgets: TextWidget[] = [
    {
        id: 'tw-1',
        key: 'about-intro',
        title: 'About Us Intro',
        content:
            'Fun Farming Uganda is dedicated to making modern farming accessible, sustainable, and enjoyable.',
        image: '',
        active: true,
    },
    {
        id: 'tw-2',
        key: 'support-banner',
        title: 'Get Support Banner',
        content:
            'Need help with your farm? Reach out to our team for practical solutions.',
        image: '',
        active: true,
    },
    {
        id: 'tw-3',
        key: 'footer-about',
        title: 'Footer About',
        content: 'Short description shown in the site footer.',
        image: '',
        active: false,
    },
];

export const contacts: Contact[] = [
    {
        id: 'ct-1',
        name: 'John Mukasa',
        email: 'john@example.com',
        phoneNumber: '+256 700 123 456',
        inquireType: 'General',
        message: 'I would like to know more about your training programs.',
        createdAt: '2025-07-01',
    },
    {
        id: 'ct-2',
        name: 'Sarah Namusoke',
        email: 'sarah@example.com',
        phoneNumber: '+256 701 654 321',
        inquireType: 'Partnership',
        message: 'We are a school interested in a farming partnership.',
        createdAt: '2025-06-20',
    },
];

export const quotes: Quote[] = [
    {
        id: 'q-1',
        name: 'David Okello',
        email: 'david@example.com',
        message: 'I would like a quote for a small solar irrigation kit.',
        createdAt: '2025-06-25',
    },
];

export const subscribers: NewsletterSubscriber[] = [
    {
        id: 'sub-1',
        name: 'Mary Nakato',
        email: 'mary@example.com',
        createdAt: '2025-07-05',
    },
    {
        id: 'sub-2',
        name: 'Peter Ssemwanga',
        email: 'peter@example.com',
        createdAt: '2025-06-12',
    },
];

export function getCategory(id: string): Category | undefined {
    return categories.find((c) => c.id === id);
}

export function getPost(id: string): Post | undefined {
    return posts.find((p) => p.id === id);
}

export function getGalleryItem(id: string): GalleryItem | undefined {
    return galleryItems.find((g) => g.id === id);
}

export function getTextWidget(id: string): TextWidget | undefined {
    return textWidgets.find((w) => w.id === id);
}

export function getContact(id: string): Contact | undefined {
    return contacts.find((c) => c.id === id);
}

export function getQuote(id: string): Quote | undefined {
    return quotes.find((q) => q.id === id);
}

export function getSubscriber(id: string): NewsletterSubscriber | undefined {
    return subscribers.find((s) => s.id === id);
}
