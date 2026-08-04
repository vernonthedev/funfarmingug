import Link from 'next/link';
import { POSTS, BlogPost } from '@/lib/blog';

const POST_META: Record<
    string,
    { tags: string[]; comments: string; views: string }
> = {
    'organic-farming-in-uganda': {
        tags: ['Organic', 'Farming'],
        comments: '2 Comments',
        views: '180 View',
    },
    'goat-breeding-best-practices': {
        tags: ['Livestock', 'Goats'],
        comments: '4 Comments',
        views: '250 View',
    },
    'backyard-poultry-profit': {
        tags: ['Poultry', 'Income'],
        comments: '1 Comment',
        views: '120 View',
    },
    'banana-plantation-care': {
        tags: ['Vegetables', 'Plantation'],
        comments: '3 Comments',
        views: '210 View',
    },
    'youth-agro-project': {
        tags: ['Youth', 'Agro'],
        comments: '5 Comments',
        views: '320 View',
    },
    'farm-tours-at-fun-farming-uganda': {
        tags: ['Farm Tours', 'Education'],
        comments: '0 Comments',
        views: '95 View',
    },
};

const CATEGORIES = [
    'Farming',
    'Livestock',
    'Vegetables',
    'Organic',
    'Farm Tours',
];

function metaFor(post: BlogPost) {
    return (
        POST_META[post.slug] ?? {
            tags: ['Farming'],
            comments: '0 Comments',
            views: '100 View',
        }
    );
}

function formatMeta(date: string) {
    const d = new Date(date);
    const month = d.toLocaleString('en-US', { month: 'short' });
    return `${month} ${String(d.getFullYear()).slice(2)}`;
}

const QUOTES = [
    {
        author: 'Christine Rose',
        text: 'A sustainable farm embodies the fusion of timeless farming wisdom with a commitment to minimising environmental impact. Our fields harness the power of nature itself.',
    },
    {
        author: 'Matovu Divo',
        text: 'Investing in healthy soil and happy animals with confidence is the surest path to feeding our communities for generations to come.',
    },
];

const SHARE_ICONS = [
    <i className="icon-facebook" key="fb"></i>,
    <i className="icon-twitter" key="tw"></i>,
    <i className="fa-brands fa-skype" key="sk"></i>,
    <i className="fa-brands fa-telegram" key="tg"></i>,
];

export function BlogPage() {
    return (
        <div className="main-content">
            <div className="blog-right-sibdebar">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-right-sidebar-wrap">
                                {POSTS.map((post, i) => {
                                    const meta = metaFor(post);
                                    return (
                                        <div key={post.slug}>
                                            <article className="article-blog-item style-2 mb-80">
                                                <div className="image">
                                                    <div className="video-wrap">
                                                        <img
                                                            className="lazyload"
                                                            data-src={post.image}
                                                            src={post.image}
                                                            alt=""
                                                        />
                                                        <a
                                                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                                                            className="style-icon-play popup-youtube"
                                                        >
                                                            <i className="fa-solid fa-play"></i>
                                                            <div className="wave"></div>
                                                            <div className="wave-1"></div>
                                                        </a>
                                                    </div>
                                                    <div className="entry-date">
                                                        <p className="day">
                                                            {new Date(
                                                                post.date
                                                            ).getDate()}
                                                        </p>
                                                        <p className="month-year">
                                                            {formatMeta(
                                                                post.date
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <ul className="entry-meta">
                                                        <li
                                                            className="entry author wow fadeInUp"
                                                            data-wow-delay="0s"
                                                        >
                                                            <i className="fa-solid fa-circle-user"></i>
                                                            <p>
                                                                <a href="#">
                                                                    By{' '}
                                                                    {post.author}
                                                                </a>
                                                            </p>
                                                        </li>
                                                        <li
                                                            className="entry tags wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                        >
                                                            <i className="fa-solid fa-tag"></i>
                                                            <p>
                                                                {meta.tags.map(
                                                                    (t, j) => (
                                                                        <span
                                                                            key={t}
                                                                        >
                                                                            {j > 0
                                                                                ? ', '
                                                                                : ''}
                                                                            <a
                                                                                href="/blog"
                                                                            >
                                                                                {t}
                                                                            </a>
                                                                        </span>
                                                                    )
                                                                )}
                                                            </p>
                                                        </li>
                                                        <li
                                                            className="entry comment wow fadeInUp"
                                                            data-wow-delay="0.2s"
                                                        >
                                                            <i className="fa-solid fa-comment"></i>
                                                            <p>
                                                                <a href="#">
                                                                    {
                                                                        meta.comments
                                                                    }
                                                                </a>
                                                            </p>
                                                        </li>
                                                        <li
                                                            className="entry view wow fadeInUp"
                                                            data-wow-delay="0.3s"
                                                        >
                                                            <i className="fa-solid fa-eye"></i>
                                                            <p>
                                                                <a href="#">
                                                                    {meta.views}
                                                                </a>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                    <h3
                                                        className="title fw-7 wow fadeInUp"
                                                        data-wow-delay="0s"
                                                    >
                                                        <Link
                                                            href={`/blog/${post.slug}`}
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </h3>
                                                    <p className="text">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="bot">
                                                        <Link
                                                            className="tf-btn gap-35"
                                                            href={`/blog/${post.slug}`}
                                                        >
                                                            <span className="text-style">
                                                                Continue Reading
                                                            </span>
                                                            <div className="icon">
                                                                <i className="icon-arrow_right"></i>
                                                            </div>
                                                        </Link>
                                                        <div className="share">
                                                            <div className="icon">
                                                                <i className="fa-solid fa-share-nodes"></i>
                                                            </div>
                                                            <p className="fw-5 font-worksans mr-23">
                                                                Share:
                                                            </p>
                                                            <ul className="social-list style-2">
                                                                {SHARE_ICONS.map(
                                                                    (ic, j) => (
                                                                        <li
                                                                            className="item"
                                                                            key={j}
                                                                        >
                                                                            <a href="#">
                                                                                {ic}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                            {i === 1 && (
                                                <div
                                                    className="block-quote type-2 mb-80 wow fadeInUp"
                                                    data-wow-delay="0s"
                                                >
                                                    <div className="has-border">
                                                        <div className="quote">
                                                            <div className="icon style-circle">
                                                                <i className="icon-quote"></i>
                                                            </div>
                                                            <p className="font-snowfall cite">
                                                                {
                                                                    QUOTES[0].text
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="bot">
                                                            <div className="entry-author">
                                                                <p>
                                                                    <a
                                                                        href="#"
                                                                        className="hover-text-secondary"
                                                                    >
                                                                        {
                                                                            QUOTES[0].author
                                                                        }
                                                                    </a>{' '}
                                                                    - Quote
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {i === 3 && (
                                                <div
                                                    className="block-quote type-2 style-2 mb-80 wow fadeInUp"
                                                    data-wow-delay="0s"
                                                >
                                                    <div className="has-border">
                                                        <div className="quote">
                                                            <div className="icon style-circle">
                                                                <i className="fa-solid fa-link"></i>
                                                            </div>
                                                            <p className="font-snowfall cite font-worksans fw-7">
                                                                <a
                                                                    href="/blog"
                                                                    className="hover-text-secondary text-white"
                                                                >
                                                                    {
                                                                        QUOTES[1]
                                                                            .text
                                                                    }
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="bot">
                                                            <div className="entry-author">
                                                                <a
                                                                    href="/blog"
                                                                    className="hover-text-secondary"
                                                                >
                                                                    {
                                                                        QUOTES[1]
                                                                            .author
                                                                    }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                <div className="blog-pagination">
                                    <ul>
                                        <li>
                                            <a
                                                className="active"
                                                href="javascript:void(0)"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tf-sidebar">
                                <BlogSidebarAuthor />
                                <div className="sidebar-item sb-search">
                                    <h5 className="sb-title">Search</h5>
                                    <div className="sb-content">
                                        <form className="form-search style-1">
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    placeholder="Write content..."
                                                    required
                                                />
                                            </fieldset>
                                            <button
                                                type="submit"
                                                className="btn-search"
                                            >
                                                <i className="icon-magnifying-glass"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-item sb-category">
                                    <h5 className="sb-title">Categories</h5>
                                    <div className="sb-content">
                                        <ul className="category-list">
                                            {CATEGORIES.map((category) => (
                                                <li
                                                    key={category}
                                                    className="item"
                                                >
                                                    <Link href="/blog">
                                                        {category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-item sb-latest-new">
                                    <h5 className="sb-title">Latest News</h5>
                                    <div className="sb-content">
                                        <ul className="latest-list">
                                            {[...POSTS]
                                                .sort((a, b) =>
                                                    b.date.localeCompare(a.date)
                                                )
                                                .slice(0, 3)
                                                .map((post) => (
                                                    <li
                                                        key={post.slug}
                                                        className="item img-hover"
                                                    >
                                                        <div className="image hover-item">
                                                            <img
                                                                src={post.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <p className="date">
                                                                {new Date(
                                                                    post.date
                                                                ).toLocaleDateString(
                                                                    'en-US',
                                                                    {
                                                                        day: 'numeric',
                                                                        month: 'long',
                                                                        year: 'numeric',
                                                                    }
                                                                )}
                                                            </p>
                                                            <Link
                                                                className="name-post"
                                                                href={`/blog/${post.slug}`}
                                                            >
                                                                {post.title}
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogSidebarAuthor() {
    return (
        <div className="wg-author-farm mb-40">
            <div className="image-avt wow zoomIn">
                <img src="/images/funfarm/Farm-staff.jpeg" alt="" />
            </div>
            <a
                href="/blog"
                className="text-upper font-worksans name hover-text-secondary"
            >
                Fun Farming Uganda
            </a>
            <p className="duty font-inter">Editor Post Blog</p>
            <p className="text font-inter">
                Sharing the stories, practices and everyday joy of organic
                farming from the heart of Uganda.
            </p>
            <ul className="social-list style-3 style-2">
                {SHARE_ICONS.map((ic, j) => (
                    <li className="item" key={j}>
                        <a href="#">{ic}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}