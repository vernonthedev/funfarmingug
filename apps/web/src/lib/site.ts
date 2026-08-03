export const SITE = {
    name: 'Fun Farming Uganda',
    tagline: 'Where Agriculture Meets Adventure!',
    address: 'Butalangu Town Council, Nakaseke District, Uganda',
    email: 'support@funfarminguganda.com',
    phone: '+256 772 826 680',
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
    { label: 'About Us', href: '/about-us' },
    { label: 'Activities', href: '/activities' },
    { label: 'Farm Lounge', href: '/farm-lounge' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact-us' },
    {
        label: 'More',
        href: '#',
        children: [
            { label: 'References', href: '/references' },
            { label: 'FAQ', href: '/frequently-asked-questions' },
            { label: 'Get Support', href: '/get-support' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
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
            { label: 'Farm Lounge', href: '/farm-lounge' },
            { label: 'Blog', href: '/blog' },
            { label: 'Get Support', href: '/get-support' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
];

export const HERO_VIDEO_BG =
    '/videos/cows.mp4';
export const HERO_VIDEO_POSTER = '/images/item/yellow-field.jpg';
