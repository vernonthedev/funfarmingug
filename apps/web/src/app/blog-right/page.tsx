'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import FAQSection from '@/app/components/sections/FAQSection';

const blogPost = {
  id: 2,
  title: 'The Benefits of Companion Planting',
  content: `
    <p>Companion planting is a time-tested gardening technique that involves growing different plants together for mutual benefit. This natural approach can improve soil health, deter pests, and increase yields without chemicals.</p>
    <h3>How Companion Planting Works</h3>
    <p>Plants interact with each other in various ways - some release beneficial compounds into the soil, others attract beneficial insects, and some provide shade or support for their neighbors.</p>
    <h3>Classic Companion Combinations</h3>
    <ul>
      <li><strong>Tomatoes + Basil:</strong> Basil repels tomato hornworms and improves flavor</li>
      <li><strong>Carrots + Onions:</strong> Onions deter carrot flies</li>
      <li><strong>Corn + Beans + Squash:</strong> The "Three Sisters" - beans fix nitrogen, corn provides support, squash shades soil</li>
      <li><strong>Marigolds + Everything:</strong> Marigolds repel nematodes and many pests</li>
      <li><strong>Nasturtiums + Cucumbers:</strong> Nasturtiums act as trap crops for aphids</li>
    </ul>
    <h3>Plants to Keep Apart</h3>
    <p>Some plants inhibit each other's growth. Avoid planting tomatoes near potatoes, beans near onions, or fennel near most vegetables.</p>
    <h3>Getting Started</h3>
    <p>Start small with a few proven combinations. Observe what works in your garden and expand from there. Keep a garden journal to track results.</p>
  `,
  image: '/assets/img/blog/blog-single2.jpg',
  date: 'March 10, 2024',
  author: 'Sarah Green',
  category: 'Organic Methods',
  readTime: '7 min read',
  tags: ['companion planting', 'organic', 'pest control', 'biodiversity'],
};

export default function BlogRightPage() {
  const description = blogPost.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
  return (
    <>
      <HeroSection
        subtitle="Blog"
        title={blogPost.title}
        description={description}
        primaryButtonText="Back to Blog"
        primaryButtonHref="/blog"
      />
      <section className="vl-blog-single-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 order-xl-2">
              <aside className="blog-sidebar">
                <div className="sidebar-widget search-widget">
                  <form><input type="search" placeholder="Search..." /><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></form>
                </div>
                <div className="sidebar-widget category-widget">
                  <h4>Categories</h4>
                  <ul>
                    <li><a href="#">Gardening Tips <span>(12)</span></a></li>
                    <li><a href="#">Organic Methods <span>(8)</span></a></li>
                    <li><a href="#">Soil Health <span>(6)</span></a></li>
                    <li><a href="#">Urban Farming <span>(10)</span></a></li>
                    <li><a href="#">Pest Management <span>(5)</span></a></li>
                  </ul>
                </div>
                <div className="sidebar-widget recent-posts">
                  <h4>Recent Posts</h4>
                  <ul>
                    <li><a href="#">How to Start Your First Vegetable Garden</a><span>March 15, 2024</span></li>
                    <li><a href="#">Composting 101: Turn Waste into Gold</a><span>March 5, 2024</span></li>
                    <li><a href="#">Vertical Gardening for Small Spaces</a><span>February 28, 2024</span></li>
                  </ul>
                </div>
                <div className="sidebar-widget tags-widget">
                  <h4>Tags</h4>
                  <div className="tags-cloud">
                    <a href="#">companion planting</a><a href="#">organic</a><a href="#">pest control</a><a href="#">biodiversity</a>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-8 col-lg-8 order-xl-1">
              <article className="blog-single">
                <div className="blog-single-thumb">
                  <img src={blogPost.image} alt={blogPost.title} />
                </div>
                <div className="blog-single-content">
                  <div className="blog-single-meta">
                    <a href="#" className="blog-category">{blogPost.category}</a>
                    <span className="blog-date">{blogPost.date}</span>
                    <span className="blog-author">By {blogPost.author}</span>
                    <span className="blog-time">{blogPost.readTime}</span>
                  </div>
                  <h2 className="blog-single-title">{blogPost.title}</h2>
                  <div className="blog-single-tags">
                    {blogPost.tags.map((tag, i) => (
                      <a key={i} href="#" className="tag">{tag}</a>
                    ))}
                  </div>
                  <div className="blog-single-body" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  <div className="blog-single-share">
                    <span>Share:</span>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </div>
                </div>
                <div className="blog-single-author">
                  <img src="/assets/img/blog/author2.jpg" alt={blogPost.author} />
                  <div className="author-info">
                    <h4>{blogPost.author}</h4>
                    <p>Organic farming specialist with 15 years experience in sustainable agriculture.</p>
                    <div className="author-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div className="blog-single-nav">
                  <a href="#" className="prev-post"><i className="fa-solid fa-arrow-left"></i> Previous Post</a>
                  <a href="#" className="next-post">Next Post <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="blog-comments">
                  <h4>Comments (2)</h4>
                  <div className="comments-list"></div>
                  <form className="comment-form">
                    <h4>Leave a Comment</h4>
                    <div className="row">
                      <div className="col-md-6"><input type="text" placeholder="Name" /></div>
                      <div className="col-md-6"><input type="email" placeholder="Email" /></div>
                      <div className="col-12"><textarea placeholder="Your Comment" rows={4}></textarea></div>
                      <div className="col-12"><button type="submit" className="btn-home6">Post Comment</button></div>
                    </div>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}