'use client';

import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Relive the magic of Fun Farm Weekend in Uganda!',
            excerpt:
                "Check out the highlights as we prepare to travel in this video! Don't miss out next time!",
            image: 'https://funfarminguganda.com/storage/uploads/images/bbq%20fun%20farming%20uganda.jpg',
            date: 'April 15, 2024',
            link: '/blog/details/1',
        },
        {
            id: 2,
            title: 'Herd to Twitter for a Farm-tastic Time!',
            excerpt:
                'Ready to get your hooves on some farm-fresh advice? Our cow-league experts are here to steer you towards a barn-raising success for your next team-building event!',
            image: '/img/gallery/funfarm_n3.png',
            date: 'March 20, 2024',
            link: '/blog/details/2',
        },
        {
            id: 3,
            title: 'Top 10 Team Building Activities at Fun Farm',
            excerpt:
                'Discover the most popular activities that will make your team stronger, happier, and more connected.',
            image: '/img/gallery/funfarm_n4.png',
            date: 'February 10, 2024',
            link: '/blog/details/3',
        },
        {
            id: 4,
            title: 'Sustainable Farming Practices at Fun Farm Uganda',
            excerpt:
                'Learn how we integrate sustainable agriculture into all our activities and farm operations.',
            image: '/img/gallery/funfarm_n5.png',
            date: 'January 15, 2024',
            link: '/blog/details/4',
        },
        {
            id: 5,
            title: 'Why Farm-to-Table Matters: Our FarmFood Philosophy',
            excerpt:
                'Explore our commitment to fresh, locally-sourced food and how it enhances every farm experience.',
            image: '/img/gallery/funfarm_n6.png',
            date: 'December 20, 2023',
            link: '/blog/details/5',
        },
        {
            id: 6,
            title: 'Planning the Perfect Corporate Retreat at Fun Farm',
            excerpt:
                'Everything you need to know about organizing an unforgettable team getaway in Uganda.',
            image: '/img/gallery/funfarm_n7.png',
            date: 'November 10, 2023',
            link: '/blog/details/6',
        },
    ];

    return (
        <>
            <div className="l-main">
                {/* Streamer Header */}
                <div
                    id="component-item-1"
                    data-type="streamer"
                    className="u-mb-neg-slant-height"
                >
                    <div className="o-component-area__component l-contain">
                        <div className="o-streamer">
                            <div className="o-streamer__top">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1151.1"
                                    height="40.9"
                                    viewBox="0 0 1151.1 40.9"
                                >
                                    <path
                                        d="M245.5 5.3a14.8 14.8 0 00-14.3 11 10.5 10.5 0 10-6.7 18.6h21a14.8 14.8 0 100-29.6zM927 15.8h-.6a14.8 14.8 0 00-28.7 1.5 9.5 9.5 0 10-5 17.6H927a9.6 9.6 0 100-19z"
                                        fill="none"
                                        stroke="#52777f"
                                        id="clouds"
                                    />
                                    <path
                                        d="M1055.6 21l95.5-.9M0 20.1l95.6.9"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                    <path
                                        d="M586.1 20.5a9.2 9.2 0 11-9.1-9.2 9.2 9.2 0 019.1 9.2z"
                                        fill="none"
                                        stroke="#52777f"
                                        id="sun-ball"
                                    />
                                    <path
                                        d="M577 4.5v-4M569 6.6l-2-3.4M563 12.5l-3.3-2M561 20.5h-4M563 28.5l-3.3 2M569 34.3l-2 3.5M577 36.5v4M585 34.3l2 3.5M590.8 28.5l3.5 2M593 20.5h4M590.8 12.5l3.5-2M585 6.6l2-3.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="sun-rays"
                                    />
                                    <path
                                        d="M383.6 20l144.6-.3M613 19.7l154.6.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__left">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="191.7"
                                    height="96"
                                    viewBox="0 0 191.7 96"
                                >
                                    <path
                                        d="M44 15.1v79"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M36.2 11v34.6a1.8 1.8 0 001 1.6l7.2 3.5 7.5-3.5a1.8 1.8 0 001-1.6V11M36.2 39.2l7.9 4.4M36.2 32.2l7.9 4.4M36.2 25.1l7.9 4.4M36.2 18.1l7.9 4.4M53 39.2l-8 4.4M53 32.2l-8 4.4M53 25.1l-8 4.4M53 18.1l-8 4.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M25.8 54.2v41.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M17.5 50.7v24.8a1.8 1.8 0 001 1.6l7.3 3.5 7.4-3.5a1.8 1.8 0 001-1.6V50.7M17.5 69.1l8 4.4M17.5 62l8 4.5M17.5 55l8 4.5M34.2 69.1l-8 4.4M34.2 62l-8 4.5M34.2 55l-8 4.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M63.3 54.2v41.3"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M54.9 50.7v24.8a1.8 1.8 0 001 1.6l7.2 3.5 7.5-3.5a1.8 1.8 0 001-1.6V50.7M54.9 69.1l8 4.4M54.9 62l8 4.5M54.9 55l8 4.5M71.6 69.1l-7.9 4.4M71.6 62l-7.9 4.5M71.6 55l-7.9 4.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M8.9 4.9v89.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M.5.5V35a1.8 1.8 0 001 1.6l7.2 3.6 7.5-3.6a1.8 1.8 0 001-1.6V.5M.5 28.7l8 4.4M.5 21.6l8 4.4M.5 14.6l8 4.4M.5 7.5l8 4.4M17.2 28.7l-7.9 4.4M17.2 21.6L9.3 26M17.2 14.6L9.3 19M17.2 7.5L9.3 12"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M80.2 4.9v89.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M71.8.5V35a1.8 1.8 0 001 1.6l7.3 3.6 7.5-3.6a1.8 1.8 0 001-1.6V.5M71.8 28.7l8 4.4M71.8 21.6l8 4.4M71.8 14.6l8 4.4M71.8 7.5l8 4.4M88.6 28.7l-8 4.4M88.6 21.6l-8 4.4M88.6 14.6l-8 4.4M88.6 7.5l-8 4.4"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M170 83.4a10 10 0 1010-10 10 10 0 00-10 10z"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M175.7 83.4a4 4 0 104-4 4 4 0 00-4 4zM127.7 57l61.5-.1a2 2 0 100-4l-63.9.2zM102 39.5h6.4a2.4 2.4 0 000-4.8H102a2.4 2.4 0 000 4.8z"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M127.7 57l7.3 15.3 33-.1s15.4-.8 20-15.3"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M180 83.4s-8-11.2-12.9-11.2"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M125.3 53s-9.7-16-14.5-16M157.7 72.2c-4.3 0-11 11.9-13.6 16.6a28 28 0 00-1.2 2.5 4.1 4.1 0 01-3.8 2.6 3.9 3.9 0 01-2.8-1 4.3 4.3 0 01-1.2-3.2V72.3"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__right">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="190.1"
                                    height="104"
                                    viewBox="0 0 190.1 104"
                                >
                                    <path
                                        fill="none"
                                        stroke="#52777f"
                                        d="M105.3 103.5h84.3V46.7l-42.2-20.5-42.1 20.5v56.8z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="#52777f"
                                        d="M189.6 46.7V40l-42.2-20.6L105.3 40v6.8M156.2 102.7h-17.5a1.9 1.9 0 01-1.8-1.9V74.5a1.9 1.9 0 011.8-1.8h17.5a1.9 1.9 0 011.9 1.8v26.3a1.9 1.9 0 01-2 1.9zM136.9 72.7l21.1 30M158 72.7l-21.1 30"
                                    />
                                    <path
                                        d="M147.5 44.5h0a4 4 0 00-4 4v7.8h7.9v-7.9a4 4 0 00-4-3.9zM113.2 103.5H77.9V23.2a17.6 17.6 0 0135.2 0v12.9M113.6 23.6H77.3M114 29.4H77.6"
                                        fill="none"
                                        stroke="#52777f"
                                    />
                                    <path
                                        d="M29.8 55.7a15 15 0 0030 0 14 14 0 00-.1-1.8L54 8.7a9.4 9.4 0 00-18.7 1.1L30 53.4v.8l-.1 1.5z"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree-1"
                                    />
                                    <path
                                        d="M44.8 60.8v42.5"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M.5 67.5a11.3 11.3 0 0022.7 0 10.8 10.8 0 000-1.4l-4.3-34.2a7 7 0 00-14.1.9l-4.2 33v.6a11.1 11.1 0 00-.1 1.1z"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        id="tree"
                                    />
                                    <path
                                        d="M11.8 71.3v32.2"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="o-streamer__bottom">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="121.8"
                                    height="1"
                                    viewBox="0 0 121.8 1"
                                >
                                    <path
                                        d="M0 .3h121.8"
                                        fill="none"
                                        stroke="#52777f"
                                        strokeWidth=".5"
                                    />
                                </svg>
                            </div>
                            <h2 className="o-streamer__text">
                                Dive Deeper Into Agro Tourism with Us!
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="o-block--top">
                    <div className="l-contain s-text">
                        <h1 className="u-spacing-mb4">Latest From Our Blog</h1>
                        <div style={{ maxWidth: '800px' }}>
                            <p>
                                Welcome to the Fun Farm blog, your go-to
                                destination for all things farm-tastic! Get
                                ready to embark on a journey filled with
                                laughter, adventure, and a whole lot of farmyard
                                fun. Whether you&apos;re a seasoned farmer or
                                just someone who loves the idea of getting back
                                to nature, our blog has something for everyone.
                                From tips on growing your own veggies to
                                hilarious anecdotes from our latest events,
                                we&apos;re here to entertain, inspire, and maybe
                                even teach you a thing or two along the way. So
                                grab a cup of coffee, cozy up, and let&apos;s
                                dive into the wonderful world of Fun Farm
                                together!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="o-component-area__component l-contain l-contain--wide">
                    <div className="l-double l-double--wide l-double--reversed u-spacing-pt6">
                        <div
                            className="l-double__left"
                            style={{ width: '200px' }}
                        >
                            <blockquote className="twitter-tweet">
                                <p lang="en" dir="ltr">
                                    🌾🏕️ Relive the magic of Fun Farm Weekend in
                                    Uganda! 🇺🇬 Check out the highlights as we
                                    prepare to travel in this video! Don&apos;t
                                    miss out next time!{' '}
                                    <a href="https://twitter.com/hashtag/FunFarmRecap?src=hash&ref_src=twsrc%5Etfw">
                                        #FunFarmRecap
                                    </a>{' '}
                                    <a href="https://twitter.com/hashtag/UgandaAdventure?src=hash&ref_src=twsrc%5Etfw">
                                        #UgandaAdventure
                                    </a>{' '}
                                    <a href="https://twitter.com/hashtag/funfarminguganda?src=hash&ref_src=twsrc%5Etfw">
                                        #funfarminguganda
                                    </a>{' '}
                                    🍃🔥{' '}
                                    <a href="https://t.co/3n6mCaQOtZ">
                                        pic.twitter.com/3n6mCaQOtZ
                                    </a>
                                </p>
                                &mdash; Fun Farming Uganda (@funfarmingug){' '}
                                <a href="https://twitter.com/funfarmingug/status/1779926327249748151?ref_src=twsrc%5Etfw">
                                    April 15, 2024
                                </a>
                            </blockquote>{' '}
                            <script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charset="utf-8"
                            ></script>
                        </div>
                        <div
                            className="l-double__right s-text"
                            data-kal="slide-up"
                        >
                            <h2>
                                🐄🌾 Herd to Twitter for a Farm-tastic Time!
                                🌾🐄
                            </h2>
                            <p>
                                Ready to get your hooves on some farm-fresh
                                advice? Our cow-league experts are here to steer
                                you towards a barn-raising success for your next
                                team-building event! 🎉
                            </p>
                            <p>
                                <strong>
                                    Schedule a chat with Us and soak up the
                                    Cowzy Farm Vibes that&apos;ll have your team
                                    moo-ving and grooving in no time! 🐮
                                </strong>
                            </p>
                            <div className="l-double__left">
                                <img
                                    className="u-clip-path"
                                    loading="lazy"
                                    data-id="clip-path-image-1"
                                    width="80%"
                                    data-kal="slide-left"
                                    src="https://funfarminguganda.com/storage/uploads/images/bbq%20fun%20farming%20uganda.jpg"
                                    alt="Bbq and goat grilling at fun farming uganda"
                                    style={{ borderRadius: '20px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="o-availability__food-hint">
                    <span>Learn Farm At The Comfort Of Your Stay!</span>
                </div>

                <div className="o-post-overview">
                    <div className="u-bg-neutral--0 u-color-neutral--100 u-overflow-hidden">
                        <svg
                            className="u-slant"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 96"
                        >
                            <polygon
                                points="1440 0 1440 106 0 106 0 106 0 96"
                                style={{ fill: 'currentColor' }}
                            ></polygon>
                        </svg>
                    </div>

                    <div className="u-bg-neutral--100 u-spacing-pb10">
                        <div className="l-contain">
                            <div className="o-post-overview__items">
                                <style jsx>{`
                                    @media only screen and (max-width: 600px) {
                                        .o-poster-overview__figure img {
                                            max-width: 100%;
                                            height: auto;
                                        }
                                    }
                                    .pagination {
                                        display: flex;
                                        justify-content: center;
                                        margin-top: 20px;
                                    }
                                    .pagination-link {
                                        color: green;
                                        text-decoration: none;
                                        padding: 5px 10px;
                                        margin: 0 5px;
                                        border: 1px solid green;
                                        border-radius: 5px;
                                        transition: all 0.3s ease;
                                        font-family:
                                            Archivo Black,
                                            Arial Black,
                                            sans-serif;
                                    }
                                    .pagination-link:hover {
                                        background-color: green;
                                        color: yellow;
                                    }
                                    .pagination-link.active {
                                        background-color: green;
                                        color: yellow;
                                    }
                                `}</style>

                                {posts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="post-item"
                                    >
                                        <div className="post-item__image">
                                            <Link href={post.link}>
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                        <div className="post-item__content">
                                            <div className="post-item__meta">
                                                <span className="post-item__date">
                                                    {post.date}
                                                </span>
                                            </div>
                                            <h3 className="post-item__title">
                                                <Link href={post.link}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="post-item__excerpt">
                                                {post.excerpt}
                                            </p>
                                            <Link
                                                href={post.link}
                                                className="post-item__read-more"
                                            >
                                                Read More{' '}
                                                <i className="icon-angle-small-right"></i>
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination Links */}
                            <div className="pagination">
                                <Link
                                    href="/blog?page=1"
                                    className="pagination-link"
                                >
                                    Previous
                                </Link>
                                {[1, 2, 3].map((page) => (
                                    <Link
                                        key={page}
                                        href={`/blog?page=${page}`}
                                        className={`pagination-link ${page === 1 ? 'active' : ''}`}
                                    >
                                        {page}
                                    </Link>
                                ))}
                                <Link
                                    href="/blog?page=2"
                                    className="pagination-link"
                                >
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
