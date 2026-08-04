import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConvexHttpClient } from 'convex/browser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = join(__dirname, '..');
const IMG_DIR = join(APP_ROOT, 'public', 'images', 'funfarm');

const deploymentUrl =
    process.env.NEXT_PUBLIC_CONVEX_URL ?? 'https://fiery-goshawk-749.convex.cloud';
const client = new ConvexHttpClient(deploymentUrl);

function mimeFor(file) {
    const ext = file.split('.').pop().toLowerCase();
    const map = {
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        webp: 'image/webp',
        gif: 'image/gif',
    };
    return map[ext] ?? 'application/octet-stream';
}

async function uploadFile(file) {
    const url = await client.mutation('seed:generateUploadUrl');
    const data = readFileSync(join(IMG_DIR, file));
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': mimeFor(file) },
        body: data,
    });
    if (!res.ok) {
        throw new Error(`Upload ${file} failed: ${res.status} ${await res.text()}`);
    }
    const { storageId } = await res.json();
    return storageId;
}

const FARM_N = (n) => `funfarm_n${n}.png`;

const categories = [
    { title: 'Farming', slug: 'farming' },
    { title: 'Livestock', slug: 'livestock' },
    { title: 'Vegetables', slug: 'vegetables' },
    { title: 'Organic', slug: 'organic' },
    { title: 'Farm Tours', slug: 'farm-tours' },
];

const galleryItems = [
    { title: 'Organic Farm', image: 'plants-home.jpg', category: 'Organic' },
    { title: 'Fresh Vegetables', image: 'leaves-potatoes.jpg', category: 'Organic' },
    { title: 'Organic Produce', image: 'tray-potatoes.jpg', category: 'Organic' },
    { title: 'Harvest', image: 'potatoes-alot.jpg', category: 'Organic' },
    { title: 'Plantations', image: 'matooke.webp', category: 'Organic' },
    { title: 'Organic Farm', image: FARM_N(3), category: 'Organic' },
    { title: 'Banana Plantation', image: FARM_N(4), category: 'Organic' },
    { title: 'Organic Farm', image: FARM_N(6), category: 'Organic' },
    { title: 'Farm Fields', image: 'img1.jpg', category: 'Farms' },
    { title: 'The Farm', image: 'img2.jpg', category: 'Farms' },
    { title: 'Countryside', image: 'img3.jpg', category: 'Farms' },
    { title: 'Farm Views', image: 'img4.jpg', category: 'Farms' },
    { title: 'Farm', image: FARM_N(9), category: 'Farms' },
    { title: 'Farm', image: FARM_N(10), category: 'Farms' },
    { title: 'Farm', image: FARM_N(11), category: 'Farms' },
    { title: 'Farm', image: FARM_N(12), category: 'Farms' },
    { title: 'Harvesting', image: 'potatoes-people.jpg', category: 'Harvest' },
    { title: 'Harvest', image: 'potatoes-alot.jpg', category: 'Harvest' },
    { title: 'Harvest', image: 'tray-potatoes.jpg', category: 'Harvest' },
    { title: 'Potatoes', image: 'leaves-potatoes.jpg', category: 'Harvest' },
    { title: 'Harvest', image: FARM_N(13), category: 'Harvest' },
    { title: 'Harvest', image: FARM_N(14), category: 'Harvest' },
    { title: 'Harvest', image: FARM_N(15), category: 'Harvest' },
    { title: 'Harvest', image: FARM_N(16), category: 'Harvest' },
    { title: 'Vegetables', image: 'plants-home.jpg', category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(17), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(18), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(19), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(20), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(21), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(22), category: 'Vegetable' },
    { title: 'Vegetables', image: FARM_N(23), category: 'Vegetable' },
    { title: 'Bananas', image: 'matooke.webp', category: 'Fruit' },
    { title: 'Fruit', image: FARM_N(24), category: 'Fruit' },
    { title: 'Fruit', image: FARM_N(25), category: 'Fruit' },
    { title: 'Fruit', image: FARM_N(26), category: 'Fruit' },
    { title: 'Fruit', image: FARM_N(27), category: 'Fruit' },
    { title: 'Fruit', image: FARM_N(28), category: 'Fruit' },
    { title: 'Fruit', image: 'img1.jpg', category: 'Fruit' },
    { title: 'Fruit', image: 'img2.jpg', category: 'Fruit' },
    { title: 'Goats', image: 'Male-goat.jpeg', category: 'Cattle' },
    { title: 'Kids', image: 'Goat-kids.jpeg', category: 'Cattle' },
    { title: 'Farm Staff', image: 'Farm-staff.jpeg', category: 'Cattle' },
    { title: 'Tractors', image: 'Tractors-ploughing.jpeg', category: 'Cattle' },
    { title: 'Cattle', image: FARM_N(2), category: 'Cattle' },
    { title: 'Cattle', image: FARM_N(5), category: 'Cattle' },
    { title: 'Cattle', image: FARM_N(6), category: 'Cattle' },
    { title: 'Cattle', image: FARM_N(7), category: 'Cattle' },
];

const textWidgets = [
    {
        key: 'about-intro',
        title: 'About Us Intro',
        content:
            'Fun Farming Uganda is dedicated to making modern farming accessible, sustainable, and enjoyable.',
        image: '',
        active: true,
    },
    {
        key: 'support-banner',
        title: 'Get Support Banner',
        content:
            'Need help with your farm? Reach out to our team for practical solutions.',
        image: '',
        active: true,
    },
    {
        key: 'footer-about',
        title: 'Footer About',
        content: 'Short description shown in the site footer.',
        image: '',
        active: false,
    },
];

const contacts = [
    {
        name: 'John Mukasa',
        email: 'john@example.com',
        phoneNumber: '+256 700 123 456',
        inquireType: 'General',
        message: 'I would like to know more about your training programs.',
        createdAt: '2025-07-01',
    },
    {
        name: 'Sarah Namusoke',
        email: 'sarah@example.com',
        phoneNumber: '+256 701 654 321',
        inquireType: 'Partnership',
        message: 'We are a school interested in a farming partnership.',
        createdAt: '2025-06-20',
    },
];

const quotes = [
    {
        name: 'David Okello',
        email: 'david@example.com',
        message: 'I would like a quote for a small solar irrigation kit.',
        createdAt: '2025-06-25',
    },
];

const subscribers = [
    {
        name: 'Mary Nakato',
        email: 'mary@example.com',
        createdAt: '2025-07-05',
    },
    {
        name: 'Peter Ssemwanga',
        email: 'peter@example.com',
        createdAt: '2025-06-12',
    },
];

const categoryBySlug = {
    'organic-farming-in-uganda': 'organic',
    'goat-breeding-best-practices': 'livestock',
    'backyard-poultry-profit': 'livestock',
    'banana-plantation-care': 'vegetables',
    'youth-agro-project': 'farming',
    'farm-tours-at-fun-farming-uganda': 'farm-tours',
};

function main() {
    const files = readdirSync(IMG_DIR);
    console.log(`Found ${files.length} images in ${IMG_DIR}`);
    return files;
}

const files = main();
const storageIdByFile = new Map();

for (const file of files) {
    process.stdout.write(`Uploading ${file} ... `);
    try {
        const storageId = await uploadFile(file);
        storageIdByFile.set(file, storageId);
        console.log('OK');
    } catch (e) {
        console.log(`FAILED: ${e.message}`);
        process.exitCode = 1;
    }
}

console.log(`\nUploaded ${storageIdByFile.size}/${files.length} images`);

const postData = await import('../src/lib/blog.ts').catch(() => null);
const posts = (postData?.POSTS ?? []).map((p) => {
    const imageFile = p.image.replace(/^\/images\/funfarm\//, '');
    return {
        title: p.title,
        slug: p.slug,
        thumbnail: storageIdByFile.get(imageFile) ?? '',
        excerpt: p.excerpt,
        body: p.content.join('\n\n'),
        categorySlug: categoryBySlug[p.slug] ?? 'farming',
        author: p.author ?? 'Admin',
        status: 'active',
        publishedAt: p.date,
        metaTitle: p.title,
        metaDescription: p.excerpt,
    };
});

const galleryWithIds = galleryItems.map((g) => ({
    ...g,
    image: storageIdByFile.get(g.image) ?? '',
}));

const result = await client.mutation('seed:seedContent', {
    categories,
    posts,
    galleryItems: galleryWithIds,
    textWidgets,
    contacts,
    quotes,
    subscribers,
});

console.log('\nSeed complete:', result);
