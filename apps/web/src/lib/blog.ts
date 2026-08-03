export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    author?: string;
    content: string[];
}

export const POSTS: BlogPost[] = [
    {
        slug: 'organic-farming-in-uganda',
        title: 'Why Organic Farming is Taking Root in Uganda',
        date: '2024-02-10',
        image: '/images/funfarm/funfarm_n2.png',
        author: 'Sarah Nalwoga',
        excerpt:
            'Organic farming is transforming smallholder livelihoods across Uganda, delivering healthier produce and healthier soils.',
        content: [
            'Organic farming has grown from a niche movement into a central pillar of sustainable agriculture across Uganda. At Fun Farming Uganda, we have watched the demand for organically grown food rise sharply as families become more conscious of what they eat and how it reaches their plates.',
            'The core principle is simple: work with nature rather than against it. We avoid synthetic pesticides and chemical fertilisers, relying instead on compost, crop rotation and natural pest control to keep the land healthy and productive year after year.',
            'The results speak for themselves. Soils that were once depleted are regaining their fertility through consistent application of organic matter, and produce grown without harsh chemicals carries richer flavour and a longer shelf life.',
            'For Ugandan farmers, the move to organic methods also opens new markets. Buyers are prepared to pay a premium for certified organic goods, giving families a more dependable income while protecting the environment for generations to come.',
            'Our team is committed to training the next generation of growers in these techniques, ensuring that organic farming is not simply a trend but a lasting approach to feeding our nation.',
        ],
    },
    {
        slug: 'goat-breeding-best-practices',
        title: 'Raising Healthy Goats: Breeding Practices that Work',
        date: '2024-01-26',
        image: '/images/funfarm/Male-goat.jpeg',
        author: 'Daniel Okello',
        excerpt:
            'From feeding to herd management, these goat breeding practices keep our flocks healthy, productive and resilient.',
        content: [
            'Goat breeding is at the heart of what we do at Fun Farming Uganda. Goats are wonderfully resilient animals that thrive in our climate, providing both nutritious milk and quality meat for local families.',
            'Careful breeding starts with choosing healthy breeding stock. We select parents on the basis of good weight gain, disease resistance and strong mothering instincts, so each generation is stronger than the last.',
            'Nutrition does not end with selection. A proper feeding programme, based on fresh pasture and mineral supplements, ensures that pregnant does and growing kids receive all the nutrients they need.',
            'We also maintain strict hygiene in our goat houses and keep detailed records of births, vaccinations and growth patterns. These records help us to detect problems early and make informed decisions about the herd.',
            'Regular veterinary checks complete the cycle. By keeping our goats healthy and stress-free, we are able to run a breeding programme that is both ethical and profitable.',
        ],
    },
    {
        slug: 'backyard-poultry-profit',
        title: 'Backyard Poultry: A Simple Path to Steady Income',
        date: '2024-01-05',
        image: '/images/funfarm/funfarm_n5.png',
        author: 'Sarah Atim',
        excerpt:
            'A few dozen hens can transform family finances. Here is how backyard poultry is changing lives on our farm.',
        content: [
            'Poultry is the most accessible way for rural families to earn a steady income, and it rarely takes much space or money to begin. On our farm, we encourage families to keep a small flock of hens alongside their other crops.',
            'Chickens grow quickly, reproduce often and require modest feed. Within months a family can build a small flock from the chicks produced by their own hens, creating a self-sustaining cycle of growth.',
            'The eggs provide daily nutrition and a reliable product to sell at local markets. Leftover farm scraps and kitchen waste become feed, keeping overheads low and ensuring the enterprise is truly profitable.',
            'We help families with the essentials: housing that keeps birds safe and dry, a balanced feeding routine and basic flock health care. These small investments yield food security and cash at hand all year round.',
            'Backyard poultry is more than a pastime when it is well, structured and it is exactly the kind of smart farming that we love to see the community embrace.',
        ],
    },
    {
        slug: 'banana-plantation-care',
        title: 'Caring for a Banana Plantation Through the Seasons',
        date: '2024-03-02',
        image: '/images/funfarm/matooke.webp',
        author: 'Sarah Mugisha',
        excerpt:
            'The banana is the backbone of our economy. Learn how careful plantation management keeps our bunches sweet and bountiful.',
        content: [
            'Bananas are a staple of life in Uganda, gracing nearly every meal and supporting the incomes of thousands of families. Our plantation is managed with care and attention through every season of the year.',
            'The key to a healthy plantation is soil. We apply compost and mulch regularly, keeping the delicate roots cool and moist while slowly feeding the soil with light tillage and natural fertilisers.',
            'Effective weeding, pruning and deseasoning are scheduled through the year. Removing old leaves and weak plants lets sunlight and the air reach the fruit, reducing the sugar spread of disease.',
            'Water management is equally important. During dry months we irrigate carefully; during the rains we ensure excess water drains away so that the plant is never waterlogged.',
            'When our bananas reach the market, they are the result of twelve months of careful work. It is a rhythm we love and a crop that keeps our community proudly fed.',
        ],
    },
    {
        slug: 'youth-agro-project',
        title: 'Empowering Youth Through Our Agro Entrepreneurship Project',
        date: '2024-03-18',
        image: '/images/funfarm/funfarm_n16.png',
        author: 'Peter Senkubuge',
        excerpt:
            'Our youth agro project turns the farm into a classroom, giving young members practical skills and confident futures.',
        content: [
            'Agriculture is often seen as the old way, but at Fun Farming Uganda, we see it as the future. Our youth agro project invites the next generation to discover the opportunities that lie in the field.',
            'Every young member receives hands-on training in everything from soil care and animal husbandry to marketing the produce that we grow together.',
            'Just as important, the project gives young people responsibility. Each one manages a small plot, learns to plan and measure, and sees the direct result of their own effort on the land.',
            'Here on the farm, we have watched quiet teenagers become confident young farmers and entrepreneurs, planning their own food businesses and earning their own income while still at school.',
            'By connecting young people to the land, we keep the farms thriving and our communities hopeful. The future of farming is bright, and it is young.',
        ],
    },
    {
        slug: 'farm-tours-at-fun-farming-uganda',
        title: 'A Day on the Farm: Educational Tours at Fun Farming Uganda',
        date: '2024-02-24',
        image: '/images/funfarm/funfarm_n6.png',
        author: 'Grace Nakato',
        excerpt:
            'Step onto our farm to see organic crops, goats and poultry up close. Farm tours are the easiest way to learn what we do.',
        content: [
            'The best way to understand organic farming is to see it in person. That is why we open our farm gates to visitors across Uganda through our educational farm tours.',
            'A tour takes you through each part of our farm, from the shady banana plantation to the clean goat yard and the lively poultry houses. Our guides explain the thinking behind every practice, and they stop to answer every question.',
            'Visitors, especially children, are invited to take part. Handling the animals and touching the crops turns a simple walk around the farm into a lasting memory of where food comes from.',
            'The tours are open to farmers, schools, families and travel groups. They are also an honest look into the work of a place that is proud to feed its community.',
            'We believe that when people step onto a farm, they are more likely to care for it, and we welcome every visitor to feel that thoughtful connection for themselves.',
        ],
    },
];
