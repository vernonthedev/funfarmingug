'use client';

import Link from 'next/link';

const blogPosts = [
  { 
    image: '/assets/images/blog/blog-1-1.jpg', 
    date: '25 Jan, 2024', 
    category: 'Gardening Tips', 
    title: 'How to Prepare Your Garden for Spring', 
    excerpt: 'Spring is the perfect time to rejuvenate your garden after the winter months. Follow these essential steps to ensure your garden thrives throughout the growing season.',
    href: '/blog/details'
  },
  { 
    image: '/assets/images/blog/blog-1-2.jpg', 
    date: '18 Jan, 2024', 
    category: 'Lawn Care', 
    title: 'Best Practices for Lawn Maintenance', 
    excerpt: 'A beautiful lawn requires consistent care and attention. Learn the professional techniques that keep lawns green, healthy, and weed-free all year round.',
    href: '/blog/details'
  },
  { 
    image: '/assets/images/blog/blog-1-3.jpg', 
    date: '10 Jan, 2024', 
    category: 'Landscaping', 
    title: 'Modern Landscape Design Trends 2024', 
    excerpt: 'Discover the latest trends in landscape design for 2024, from sustainable gardens to outdoor living spaces that extend your home into nature.',
    href: '/blog/details'
  },
];

const categories = [
  { name: 'Gardening Tips', count: 12, slug: 'gardening-tips' },
  { name: 'Lawn Care', count: 8, slug: 'lawn-care' },
  { name: 'Landscaping', count: 10, slug: 'landscaping' },
  { name: 'Tree Care', count: 6, slug: 'tree-care' },
  { name: 'Irrigation', count: 5, slug: 'irrigation' },
  { name: 'Pest Control', count: 7, slug: 'pest-control' },
];

const recentPosts = [
  { title: 'Winter Garden Protection Tips', date: '15 Dec, 2023', href: '/blog/details' },
  { title: 'Choosing the Right Mulch', date: '08 Dec, 2023', href: '/blog/details' },
  { title: 'Composting for Beginners', date: '01 Dec, 2023', href: '/blog/details' },
  { title: 'Indoor Plants for Winter', date: '24 Nov, 2023', href: '/blog/details' },
  { title: 'Tool Maintenance Guide', date: '17 Nov, 2023', href: '/blog/details' },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">Latest News</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li>News</li>
            </ul>
          </div>
        </div>
        <div className="page-header__shape-1">
          <img src="/assets/images/shapes/page-header-1-1.png" alt="shape" />
        </div>
        <div className="page-header__shape-2">
          <img src="/assets/images/shapes/page-header-1-2.png" alt="shape" />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-one__grid row gutter-y-30">
                {blogPosts.map((post, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="blog-one__item">
                      <div className="blog-one__image">
                        <img src={post.image} alt={post.title} />
                        <div className="blog-one__date">
                          <span>{post.date.split(',')[0]}</span>
                          <span>{post.date.split(',')[1]}</span>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__meta">
                          <Link href={`/blog/category/${post.category.toLowerCase().replace(' ', '-')}`}>{post.category}</Link>
                        </div>
                        <h4 className="blog-one__title"><Link href={post.href}>{post.title}</Link></h4>
                        <p className="blog-one__text">{post.excerpt}</p>
                        <Link href={post.href} className="blog-one__read-more">Read More <i className="icon-angle-small-right"></i></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blog-one__pagination">
                <nav aria-label="Blog pagination">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><span className="page-link"><i className="icon-angle-small-left"></i></span></li>
                    <li className="page-item active"><span className="page-link">1</span></li>
                    <li className="page-item"><Link className="page-link" href="/blog/page/2">2</Link></li>
                    <li className="page-item"><Link className="page-link" href="/blog/page/3">3</Link></li>
                    <li className="page-item"><Link className="page-link" href="/blog/page/2"><i className="icon-angle-small-right"></i></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-4">
              <aside className="blog-one__sidebar">
                <div className="sidebar__widget sidebar__search">
                  <form className="sidebar__search__form">
                    <input type="search" placeholder="Search..." />
                    <button type="submit"><i className="icon-search"></i></button>
                  </form>
                </div>
                <div className="sidebar__widget sidebar__categories">
                  <h4 className="sidebar__title">Categories</h4>
                  <ul className="list-unstyled">
                    {categories.map((cat, index) => (
                      <li key={index}><Link href={`/blog/category/${cat.slug}`}>{cat.name} <span>({cat.count})</span></Link></li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__widget sidebar__recent-posts">
                  <h4 className="sidebar__title">Recent Posts</h4>
                  <ul className="list-unstyled">
                    {recentPosts.map((post, index) => (
                      <li key={index}>
                        <div className="sidebar__recent-post">
                          <div className="sidebar__recent-post__content">
                            <h6 className="sidebar__recent-post__title"><Link href={post.href}>{post.title}</Link></h6>
                            <span className="sidebar__recent-post__date">{post.date}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__widget sidebar__tags">
                  <h4 className="sidebar__title">Tags</h4>
                  <div className="sidebar__tags__list">
                    {['gardening', 'lawn', 'landscaping', 'trees', 'irrigation', 'pests', 'organic', 'spring', 'summer', 'maintenance'].map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag}`} className="sidebar__tag">{tag}</Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-one">
        <div className="container">
          <div className="newsletter-one__inner" style={{ backgroundImage: 'url(/assets/images/backgrounds/newsletter-1-1.jpg)' }}>
            <div className="newsletter-one__shape">
              <img src="/assets/images/shapes/newsletter-1-1.png" alt="shape" />
            </div>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="newsletter-one__content">
                  <h2 className="newsletter-one__title">Subscribe to Our Newsletter</h2>
                  <p className="newsletter-one__text">Get gardening tips, seasonal advice, and special offers delivered straight to your inbox.</p>
                </div>
              </div>
              <div className="col-xl-6">
                <form className="newsletter-one__form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="garlon-btn"><span>Subscribe</span> <i className="icon-angle-small-right"></i></button>
                </form>
                <p className="newsletter-one__note">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}