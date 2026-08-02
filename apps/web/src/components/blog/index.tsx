import Link from 'next/link';
import { POSTS } from '@/lib/blog';

export function BlogPage() {
    return (
        <div className="main-content">
            <div className="blog-right-sibdebar">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-right-sidebar-wrap">
                                {POSTS.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="article-blog-item style-2 mb-80"
                                    >
                                        <div className="image">
                                            <div className="video-wrap">
                                                <img src={post.image} alt="" />
                                            </div>
                                            <div className="entry-date">
                                                <p className="day">
                                                    {new Date(
                                                        post.date
                                                    ).getDate()}
                                                </p>
                                                <p className="month-year">
                                                    {new Date(post.date)
                                                        .toLocaleString(
                                                            'en-US',
                                                            {
                                                                month: 'short',
                                                                year: '2-digit',
                                                            }
                                                        )
                                                        .replace(',', '')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <ul className="entry-meta">
                                                <li className="entry author">
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    <p>
                                                        <a href="#">
                                                            By {post.author}
                                                        </a>
                                                    </p>
                                                </li>
                                            </ul>
                                            <h3 className="title fw-7">
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
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tf-sidebar">
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

const CATEGORIES = [
    'Farming',
    'Livestock',
    'Vegetables',
    'Organic',
    'Farm Tours',
];
