import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

const META: Record<
    string,
    { tags: string[]; comments: string; views: string }
> = {
    'organic-farming-in-uganda': {
        tags: ['Organic', 'Farming'],
        comments: '0 Comments',
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

const SHARE_ICONS = [
    <i className="icon-facebook" key="fb"></i>,
    <i className="icon-twitter" key="tw"></i>,
    <i className="fa-brands fa-skype" key="sk"></i>,
    <i className="fa-brands fa-telegram" key="tg"></i>,
];

const CATEGORIES = [
    'Farming',
    'Livestock',
    'Vegetables',
    'Organic',
    'Farm Tours',
];

export function BlogDetailPage({
    post,
    related,
}: {
    post: BlogPost;
    related: BlogPost[];
}) {
    const meta = META[post.slug] ?? {
        tags: ['Farming'],
        comments: '0 Comments',
        views: '100 View',
    };
    const paragraphs = post.content;
    const text1 = paragraphs[0] ?? '';
    const text2 = paragraphs[1] ?? '';
    const text3 = paragraphs[2] ?? '';
    const text4 = paragraphs[3] ?? '';
    const text5 = paragraphs[4] ?? '';

    return (
        <div className="main-content page-blog-single">
            <div className="blog-single">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content">
                                <h3 className="title-name fw-bold">
                                    {post.title}
                                </h3>
                                <div className="entry-meta">
                                    <ul className="meta-list">
                                        {post.author && (
                                            <li className="entry author">
                                                <i className="fa-solid fa-circle-user"></i>
                                                <p>
                                                    <a href="#">By {post.author}</a>
                                                </p>
                                            </li>
                                        )}
                                        <li className="entry date">
                                            <i className="fa-solid fs-14 fa-calendar"></i>
                                            <p>
                                                <a href="#">
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
                                                </a>
                                            </p>
                                        </li>
                                        <li className="entry tags">
                                            <i className="fa-solid fa-tag"></i>
                                            <p>
                                                {meta.tags.map((t, j) => (
                                                    <span key={t}>
                                                        {j > 0 ? ', ' : ''}
                                                        <a href="/blog">
                                                            {t}
                                                        </a>
                                                    </span>
                                                ))}
                                            </p>
                                        </li>
                                        <li className="entry comment">
                                            <i className="fa-solid fa-comment"></i>
                                            <p>
                                                <a href="#">{meta.comments}</a>
                                            </p>
                                        </li>
                                        <li className="entry view">
                                            <i className="fa-solid fa-eye"></i>
                                            <p>
                                                <a href="#">{meta.views}</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-image">
                                    <img
                                        className="lazyload"
                                        src={post.image}
                                        data-src={post.image}
                                        alt=""
                                    />
                                </div>
                                {text1 && (
                                    <p className="text text-1">{text1}</p>
                                )}
                                {text2 && (
                                    <p className="text text-2">{text2}</p>
                                )}
                                <p className="title title-1 fw-bold font-worksans">
                                    Why It Matters For Our Farm
                                </p>
                                {text3 && (
                                    <p className="text text-3">{text3}</p>
                                )}
                                <div className="entry-video">
                                    <div
                                        className="video-wrap wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        <img
                                            className="lazyload"
                                            data-src="/images/funfarm/funfarm_n2.png"
                                            src="/images/funfarm/funfarm_n2.png"
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
                                    <ul
                                        className="benefit-list wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <li>
                                            <p>
                                                Organic, chemical-free produce
                                                grown with care
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Healthy goats, poultry and
                                                cattle raised humanely
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Youth hands learning and earning
                                                on the farm
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Natural soil care through crop
                                                rotation
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Community-focused, welcoming
                                                farm tours
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                {text4 && (
                                    <p className="text text-4">{text4}</p>
                                )}
                                <div
                                    className="block-quote style-3 wow fadeInUp"
                                    data-wow-delay="0s"
                                >
                                    <div className="has-border">
                                        <div className="quote">
                                            <div className="icon style-circle">
                                                <i className="icon-quote"></i>
                                            </div>
                                            <p className="font-snowfall cite">
                                                At Fun Farming Uganda, we believe
                                                that teaching the next generation
                                                to farm well is the surest way to
                                                keep our soils, herds and
                                                communities thriving for years to
                                                come.
                                            </p>
                                        </div>
                                        <div className="bot">
                                            <div className="entry-author">
                                                <p>
                                                    <a
                                                        href="/about-us"
                                                        className="hover-text-secondary"
                                                    >
                                                        Fun Farming Uganda
                                                    </a>{' '}
                                                    - Quote
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="title title-2 fw-bold font-worksans">
                                    Getting Hands-On With It
                                </p>
                                {text5 && (
                                    <p className="text text-5">{text5}</p>
                                )}
                                <div className="entry-image-2">
                                    <div
                                        className="image img-1 wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        <img
                                            className="lazyload"
                                            data-src="/images/funfarm/funfarm_n20.png"
                                            src="/images/funfarm/funfarm_n20.png"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className="image img-2 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <img
                                            className="lazyload"
                                            data-src="/images/funfarm/funfarm_n5.png"
                                            src="/images/funfarm/funfarm_n5.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="blog-bot">
                                    <ul className="tags-list">
                                        {meta.tags.map((t) => (
                                            <li key={t}>
                                                <a href="/blog">{t}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="share">
                                        <div className="icon">
                                            <i className="fa-solid fa-share-nodes"></i>
                                        </div>
                                        <p className="fw-5 font-worksans mr-23">
                                            Share:
                                        </p>
                                        <ul className="social-list style-2">
                                            {SHARE_ICONS.map((ic, j) => (
                                                <li
                                                    className="item"
                                                    key={j}
                                                >
                                                    <a href="#">{ic}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="comment-wrap">
                                    <h2
                                        className="fw-bold font-worksans wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        Comments
                                    </h2>
                                    <div className="author-wrap">
                                        <div className="author">
                                            <div className="image-avt">
                                                <img
                                                    src="/images/funfarm/Farm-staff.jpeg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="entry">
                                                <a
                                                    href="#"
                                                    className="entry-name font-worksans fw-6 text-upper hover-text-secondary"
                                                >
                                                    Fun Farming Uganda
                                                </a>
                                                <p className="font-inter">
                                                    July 29, 2024 at 7:35 am
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href="#post-comment-wrap"
                                            className="tf-btn btn-reply style-2 type-2 font-inter"
                                        >
                                            <i className="fa-solid fa-reply"></i>
                                            Reply
                                        </a>
                                    </div>
                                    <p className="comment font-inter">
                                        Thank you for visiting our farm blog! If
                                        you have visited us or joined one of our
                                        activities, we would love to hear about
                                        your experience below.
                                    </p>
                                </div>
                                <div
                                    className="post-comment-wrap"
                                    id="post-comment-wrap"
                                >
                                    <h2
                                        className="fw-bold font-worksans wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        Leave a Comment
                                    </h2>
                                    <p className="sub-title font-inter">
                                        Your email address will not be published.
                                        Required fields are marked *
                                    </p>
                                    <form
                                        action="#"
                                        className="form-post-comment"
                                    >
                                        <div className="cols">
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    placeholder="Name*"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <input
                                                    type="email"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="cols field-text">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message..."
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-center">
                                            <button
                                                type="submit"
                                                className="tf-btn"
                                            >
                                                <span className="text-style">
                                                    Post Comment
                                                </span>
                                                <span className="icon">
                                                    <i className="icon-arrow_right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tf-sidebar">
                                <div className="wg-author-farm mb-40">
                                    <div className="image-avt wow zoomIn">
                                        <img
                                            src="/images/funfarm/Farm-staff.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <a
                                        href="/blog"
                                        className="text-upper font-worksans name hover-text-secondary"
                                    >
                                        Fun Farming Uganda
                                    </a>
                                    <p className="duty font-inter">
                                        Editor Post Blog
                                    </p>
                                    <p className="text font-inter">
                                        Sharing the stories, practices and
                                        everyday joy of organic farming from the
                                        heart of Uganda.
                                    </p>
                                    <ul className="social-list style-3 style-2">
                                        {SHARE_ICONS.map((ic, j) => (
                                            <li
                                                className="item"
                                                key={j}
                                            >
                                                <a href="#">{ic}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                                            {related.map((p) => (
                                                <li
                                                    key={p.slug}
                                                    className="item img-hover"
                                                >
                                                    <div className="image hover-item">
                                                        <img src={p.image} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <p className="date">
                                                            {new Date(
                                                                p.date
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
                                                            href={`/blog/${p.slug}`}
                                                        >
                                                            {p.title}
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