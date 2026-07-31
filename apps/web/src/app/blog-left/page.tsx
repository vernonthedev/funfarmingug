'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import FAQSection from '@/app/components/sections/FAQSection';

const blogPost = {
  id: 1,
  title: 'How to Start Your First Vegetable Garden',
  content: `
    <p>Starting your first vegetable garden is one of the most rewarding projects you can undertake. Not only will you enjoy fresh, organic produce right from your backyard, but you'll also experience the joy of nurturing life from seed to harvest.</p>
    <h3>Choosing the Right Location</h3>
    <p>Most vegetables need at least 6-8 hours of direct sunlight daily. Choose a spot that gets plenty of sun, has good drainage, and is close to a water source. If you have limited space, consider container gardening or raised beds.</p>
    <h3>Preparing the Soil</h3>
    <p>Good soil is the foundation of a successful garden. Test your soil pH and amend it with compost to improve structure and fertility. Aim for a pH between 6.0 and 7.0 for most vegetables.</p>
    <h3>Selecting Your Vegetables</h3>
    <p>Start with easy-to-grow vegetables like tomatoes, lettuce, radishes, beans, and zucchini. Consider your climate and growing season when making selections.</p>
    <h3>Planting and Care</h3>
    <p>Follow spacing guidelines on seed packets. Water consistently, mulch to retain moisture, and monitor for pests. Regular harvesting encourages more production.</p>
    <h3>Harvesting Your Bounty</h3>
    <p>The best part! Harvest vegetables when they're at peak ripeness for the best flavor and nutrition. Many vegetables will continue producing throughout the season.</p>
  `,
  image: '/assets/img/blog/blog-single1.jpg',
  date: 'March 15, 2024',
  author: 'Alex Buckmaster',
  category: 'Gardening Tips',
  readTime: '5 min read',
  tags: ['beginner', 'vegetables', 'organic', 'home garden'],
};

export default function BlogLeftPage() {
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
            <div className="col-xl-8 col-lg-8">
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
                  <img src="/assets/img/blog/author.jpg" alt={blogPost.author} />
                  <div className="author-info">
                    <h4>{blogPost.author}</h4>
                    <p>Founder & CEO of Orgaanic. Passionate about making home farming accessible to everyone.</p>
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
                  <h4>Comments (3)</h4>
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
            <div className="col-xl-4 col-lg-4">
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
                    <li><a href="#">Composting 101: Turn Waste into Gold</a><span>March 5, 2024</span></li>
                    <li><a href="#">Vertical Gardening for Small Spaces</a><span>February 28, 2024</span></li>
                    <li><a href="#">Natural Pest Control Methods</a><span>February 20, 2024</span></li>
                  </ul>
                </div>
                <div className="sidebar-widget tags-widget">
                  <h4>Tags</h4>
                  <div className="tags-cloud">
                    <a href="#">organic</a><a href="#">vegetables</a><a href="#">beginner</a><a href="#">compost</a><a href="#">urban</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}