'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    body: string[];
}

const posts: Record<string, BlogPost> = {
    'discovering-agro-tourism-in-uganda': {
        slug: 'discovering-agro-tourism-in-uganda',
        title: 'Discovering Agro-Tourism in Uganda',
        date: 'June 15, 2024',
        category: 'Agro Tourism',
        readTime: '6 min read',
        image: '/webimgs/fun-farm-image.jpg',
        body: [
            '<p class="lead">Uganda is often called the Pearl of Africa, and at Fun Farming Uganda, we invite you to experience why. Our agro-tourism programme blends authentic farm life with the warmth of Ugandan hospitality, offering visitors a chance to step away from city noise and reconnect with nature.</p>',
            '<h2>What is Agro-Tourism?</h2><p>Agro-tourism is a growing movement that invites travellers to experience agricultural life first-hand. Unlike a typical vacation, an agro-tourism stay immerses you in the daily rhythms of a working farm. You wake to the crowing of roosters, spend mornings learning traditional farming techniques, and share meals made from ingredients grown just metres away.</p><p>At Fun Farming Uganda, we have embraced agro-tourism as a way to educate visitors about sustainable agriculture while supporting our local community. Our farm in Nakaseke District spans acres of banana plantations, goat pastures, poultry runs, and organic vegetable gardens.</p>',
            '<h2>Your Day on the Farm</h2><p>A typical agro-tourism visit begins with a guided farm tour led by our Chief Executive Farmer, David. You will meet our goats (each with their own personality), learn about our rotational grazing system, and see how we compost organic waste into rich fertiliser.</p><p>Mid-morning, you can try your hand at milking a goat or collecting freshly laid eggs. Our farm staff are patient teachers who take pride in sharing their knowledge. By lunchtime, you will have earned a farm-to-table feast prepared by our chefs using ingredients harvested that morning.</p>',
            '<h2>Why It Matters</h2><p>Agro-tourism creates a bridge between urban consumers and rural producers. When you visit our farm, you are not just a tourist — you are supporting sustainable agriculture, creating jobs for local youth, and helping preserve traditional farming knowledge for the next generation.</p><p>Every guest who walks through our gates leaves with a deeper appreciation for where food comes from and the hard work that goes into growing it.</p>',
            '<h2>Plan Your Visit</h2><p>We welcome individuals, families, and groups throughout the year. Whether you want a single-day experience or a weekend farm stay, we can tailor your visit to match your interests. Contact us to book your agro-tourism adventure and discover the real Uganda.</p>',
        ],
    },
    'team-building-at-the-farm': {
        slug: 'team-building-at-the-farm',
        title: 'Team Building at the Farm',
        date: 'May 28, 2024',
        category: 'Team Building',
        readTime: '5 min read',
        image: '/img/home/team-building2.jpg',
        body: [
            '<p class="lead">Corporate team-building has found an unlikely hero: the farm. At Fun Farming Uganda, we have discovered that the combination of open spaces, real tasks, and a relaxed rural setting creates the perfect conditions for teams to bond, communicate, and grow together.</p>',
            '<h2>Why a Farm?</h2><p>Traditional team-building venues — conference rooms, hotel function halls, adventure parks — all have their place. But none offer what a farm provides: genuine, collaborative work that has real stakes and immediate results. When a team needs to herd goats through an obstacle course or build a shelter from natural materials, they must communicate clearly, delegate effectively, and support each other.</p><p>The farm environment also levels hierarchies. A CEO and an intern become two people trying to convince a stubborn goat to move. Titles disappear, and authentic human connection takes over.</p>',
            '<h2>Our Farm Expert Games</h2><p>Our signature Farm Expert Games are designed by team development specialists and adapted to the farm environment. Activities include:</p><ul><li><strong>Obstacle Course</strong> — Navigate through the banana plantation as a team, solving challenges along the way.</li><li><strong>Goat Herding Relay</strong> — Guide our goats through a course using only positive reinforcement and teamwork.</li><li><strong>Farm Kitchen Challenge</strong> — Prepare a meal together using ingredients foraged from the farm.</li><li><strong>Scavenger Hunt</strong> — Follow clues across the property, learning about farming while competing.</li></ul>',
            '<h2>What Teams Say</h2><p>Companies that have held their team-building events at Fun Farming Uganda consistently report stronger connections among team members, improved communication, and a renewed sense of shared purpose. Many return annually, making our farm a tradition for their teams.</p><p>One HR manager told us: "I have been organising team events for 15 years, and our day at Fun Farm was the most memorable yet. People are still talking about it months later."</p>',
            '<h2>Book Your Team Day</h2><p>We host groups from 10 to 100 participants. Our standard programme runs from 9 AM to 5 PM and includes all activities, a farm-to-table lunch, and refreshments. We can also customise the day to focus on specific team goals such as leadership development, cross-departmental collaboration, or creative problem-solving.</p>',
        ],
    },
    'the-taste-of-uganda-farm-to-table': {
        slug: 'the-taste-of-uganda-farm-to-table',
        title: 'The Taste of Uganda: Farm to Table',
        date: 'May 10, 2024',
        category: 'FarmFood',
        readTime: '4 min read',
        image: '/webimgs/fun-farm-image.jpg',
        body: [
            '<p class="lead">At Fun Farming Uganda, we believe the best meals start not in the kitchen, but in the field. Our FarmFood philosophy is simple: grow it with care, harvest it at its peak, and serve it with pride. The result is a dining experience that connects you to the land and the people who cultivate it.</p>',
            '<h2>From Soil to Plate</h2><p>Our kitchen garden supplies much of what appears on our guests\' plates. We grow a variety of vegetables including sukuma wiki (collard greens), tomatoes, onions, carrots, and traditional Ugandan staples. Our banana plantation provides matooke (green bananas), a cornerstone of Ugandan cuisine, while our free-range poultry and goat herd supply meat and eggs.</p><p>When you dine with us, our chefs prepare each meal from ingredients harvested that morning. The flavours are fresher and more vibrant than anything you will find in a supermarket, and every bite tells the story of the soil it came from.</p>',
            '<h2>Signature Dishes</h2><p>Our farm-to-table menu changes with the seasons, but some guest favourites include:</p><ul><li><strong>Grilled Goat Skewers</strong> — Marinated in banana leaf juices and grilled over open flame.</li><li><strong>Steamed Matooke</strong> — Served with groundnut sauce and fresh vegetable relish.</li><li><strong>Farm Fresh Salad</strong> — Greens, tomatoes, and herbs picked minutes before serving.</li><li><strong>Tropical Fruit Platter</strong> — Passion fruit, mangoes, pineapples, and jackfruit.</li></ul>',
            '<h2>Cook with Us</h2><p>For guests who want a deeper experience, we offer cooking workshops where you can learn to prepare traditional Ugandan dishes using farm-fresh ingredients. Our chefs share family recipes passed down through generations and teach techniques that bring out the best in each ingredient.</p><p>You will leave not only with a full stomach but with new skills to recreate the taste of Uganda at home.</p>',
            '<h2>Book a FarmFood Experience</h2><p>Whether you are visiting for a day or staying for a weekend, a farm-to-table meal is included in every visit. Special dietary requirements can be accommodated with advance notice. Come taste the difference that fresh, locally grown food makes.</p>',
        ],
    },
};

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = posts[slug];

    if (!post) {
        return (
            <>
                <div className="page-header">
                    <div
                        className="page-header__bg"
                        style={{
                            backgroundImage:
                                'url(/assets/images/backgrounds/page-header.jpg)',
                        }}
                    ></div>
                    <div className="container">
                        <h2 className="page-header__title">Post Not Found</h2>
                        <ul className="garlon-breadcrumb list-unstyled">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <span>Not Found</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="section-space">
                    <div className="container">
                        <p>
                            The blog post you are looking for does not exist.
                        </p>
                        <Link href="/blog" className="garlon-btn">
                            Back to Blog
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <div className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            'url(/assets/images/backgrounds/page-header.jpg)',
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">{post.title}</h2>
                    <ul className="garlon-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <span>{post.title}</span>
                        </li>
                    </ul>
                </div>
                <div className="page-header__shape-one">
                    <img
                        src="/assets/images/shapes/page-header-1-1.png"
                        alt="shape"
                    />
                </div>
                <div className="page-header__shape-two">
                    <img
                        src="/assets/images/shapes/page-header-1-2.png"
                        alt="shape"
                    />
                </div>
            </div>

            <section className="blog-details section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__image">
                                <img src={post.image} alt={post.title} />
                            </div>

                            <div className="blog-list-card__meta">
                                <div className="blog-list-card__user">
                                    <div className="user">
                                        <img
                                            src="/img/logo.png"
                                            alt="Fun Farming Uganda"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        />
                                    </div>
                                    <p className="blog-list-card__user__name">
                                        Fun Farming Uganda
                                    </p>
                                </div>
                            </div>

                            <h3 className="blog-details__title">
                                {post.title}
                            </h3>

                            {post.body.map((html, i) => (
                                <div
                                    key={i}
                                    className="blog-details__text"
                                    dangerouslySetInnerHTML={{
                                        __html: html,
                                    }}
                                />
                            ))}

                            <div className="blog-details__post">
                                <div className="blog-details__tags">
                                    <h4 className="blog-details__tags__title">
                                        Category:
                                    </h4>
                                    <div className="sidebar__tags">
                                        <a href="#">{post.category}</a>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/blog"
                                className="garlon-btn"
                                style={{ marginTop: '30px', display: 'inline-block' }}
                            >
                                <i
                                    className="fa fa-arrow-left"
                                    style={{ marginRight: '8px' }}
                                ></i>
                                Back to Blog
                            </Link>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form action="/blog" className="search-form">
                                        <input
                                            type="search"
                                            name="s"
                                            placeholder="Search..."
                                        />
                                        <button type="submit">
                                            <i className="icon-magnifying-glass"></i>
                                        </button>
                                    </form>
                                </div>

                                <div className="sidebar__single sidebar__categories">
                                    <div className="sidebar__title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="sidebar__categories-wrapper">
                                        <ul className="sidebar__categories list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar__categories__text">
                                                        Agro Tourism
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar__categories__text">
                                                        Team Building
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar__categories__text">
                                                        FarmFood
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar__categories__text">
                                                        Sustainability
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar__categories__text">
                                                        Events
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar__single sidebar__posts">
                                    <div className="sidebar__title">
                                        <h3>Recent Posts</h3>
                                    </div>
                                    {Object.values(posts)
                                        .slice(0, 3)
                                        .map((p) => (
                                            <div
                                                className="sidebar__posts__item"
                                                key={p.slug}
                                            >
                                                <div className="sidebar__posts__image">
                                                    <img
                                                        src={p.image}
                                                        alt={p.title}
                                                    />
                                                </div>
                                                <div className="sidebar__posts__content">
                                                    <p className="sidebar__posts__meta">
                                                        {p.date}
                                                    </p>
                                                    <h4 className="sidebar__posts__title">
                                                        <Link
                                                            href={`/blog/${p.slug}`}
                                                        >
                                                            {p.title}
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div className="sidebar__single sidebar__tags">
                                    <div className="sidebar__title">
                                        <h3>Tags</h3>
                                    </div>
                                    <div className="sidebar__tags">
                                        <a href="#" className="garlon-btn">
                                            Farm
                                        </a>
                                        <a href="#" className="garlon-btn">
                                            Uganda
                                        </a>
                                        <a href="#" className="garlon-btn">
                                            Agro Tourism
                                        </a>
                                        <a href="#" className="garlon-btn">
                                            Team Building
                                        </a>
                                        <a href="#" className="garlon-btn">
                                            Organic
                                        </a>
                                        <a href="#" className="garlon-btn">
                                            Nature
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
