export const SITE = {
    name: 'Fun Farming Uganda',
    tagline: 'Where Agriculture Meets Adventure!',
    address: 'Prinsengracht 250, 2501016 PM Amsterdam Netherlands',
    email: 'hello@funfarminguganda.com',
    phone: '+256 700 123 456',
    supportEmail: 'support@funfarminguganda.com',
    workingHours: 'Mon - Fri: 8.00am - 18.00pm<br/>Sat: 9.00am - 17.00pm',
};

export interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
}

export const NAV: NavLink[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Pages',
        href: '#',
        children: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Activities', href: '/activities' },
            { label: 'Farm Food', href: '/farmfood' },
            { label: 'Farm Lounge', href: '/farm-lounge' },
            { label: 'References', href: '/references' },
            { label: 'FAQ', href: '/frequently-asked-questions' },
            { label: 'Get Support', href: '/get-support' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
    {
        label: 'Blog',
        href: '/blog',
        children: [{ label: 'Blog', href: '/blog' }],
    },
    { label: 'Contact', href: '/contact-us' },
];

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export const SERVICES: Service[] = [
    {
        title: 'Organic Farming',
        description:
            'We grow clean, healthy vegetables and crops using sustainable methods.',
        icon: 'icon-leaf',
    },
    {
        title: 'Farm Activities',
        description:
            'Hands-on experiences for visitors to learn the joy of farming.',
        icon: 'icon-activity',
    },
    {
        title: 'Farm Tours',
        description:
            'Guided tours through our fields, hatcheries, and production areas.',
        icon: 'icon-map-pin',
    },
    {
        title: 'Fresh Farm Food',
        description: 'Produce fresh from the farm straight to your table.',
        icon: 'icon-apple',
    },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
    {
        title: 'Quick Links',
        links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Activities', href: '/activities' },
            { label: 'References', href: '/references' },
            { label: 'FAQ', href: '/frequently-asked-questions' },
        ],
    },
    {
        title: 'Explore',
        links: [
            { label: 'Farm Food', href: '/farmfood' },
            { label: 'Farm Lounge', href: '/farm-lounge' },
            { label: 'Blog', href: '/blog' },
            { label: 'Get Support', href: '/get-support' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
];

export const HERO_VIDEO_BG =
    'https://cdn.coverr.co/videos/coverr-growing-green-plants-1584/1080p.mp4';
export const HERO_VIDEO_POSTER = '/images/item/yellow-field.jpg';
