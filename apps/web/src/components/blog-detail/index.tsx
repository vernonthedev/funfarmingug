import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export function BlogDetailPage({ post }: { post: BlogPost }) {
    return (
        <div className="main-content page-blog-single">
            <div className="blog-single">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <h3 className="title-name fw-bold">
                                    {post.title}
                                </h3>
                                <div className="entry-meta">
                                    <ul className="meta-list">
                                        {post.author && (
                                            <li className="entry author">
                                                <i className="fa-solid fa-circle-user"></i>
                                                <p>By {post.author}</p>
                                            </li>
                                        )}
                                        <li className="entry date">
                                            <i className="fa-solid fa-calendar fs-14"></i>
                                            <p>
                                                {new Date(
                                                    post.date
                                                ).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-image">
                                    <img src={post.image} alt="" />
                                </div>
                                {post.content.map((paragraph, index) => (
                                    <p key={index} className="text">
                                        {paragraph}
                                    </p>
                                ))}
                                <div className="blog-bot">
                                    <Link
                                        className="tf-btn gap-35"
                                        href="/blog"
                                    >
                                        <span className="text-style">
                                            Back to Blog
                                        </span>
                                        <div className="icon">
                                            <i className="icon-arrow_left"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
