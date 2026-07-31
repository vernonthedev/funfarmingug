'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import FAQSection from '@/app/components/sections/FAQSection';

const blogPost = {
  id: 3,
  title: 'Composting 101: Turn Waste into Gold',
  content: `
    <p>Composting is nature's way of recycling. By turning kitchen scraps and yard waste into rich, dark compost, you create the perfect soil amendment for your garden - all for free!</p>
    <h3>Why Compost?</h3>
    <ul>
      <li>Reduces household waste by up to 30%</li>
      <li>Creates nutrient-rich soil amendment</li>
      <li>Improves soil structure and water retention</li>
      <li>Suppresses plant diseases naturally</li>
      <li>Reduces need for chemical fertilizers</li>
    </ul>
    <h3>What to Compost</h3>
    <p><strong>Greens (Nitrogen-rich):</strong> Fruit/vegetable scraps, coffee grounds, tea bags, fresh grass clippings, plant trimmings</p>
    <p><strong>Browns (Carbon-rich):</strong> Dry leaves, straw, shredded paper, cardboard, wood chips, sawdust</p>
    <h3>What NOT to Compost</h3>
    <p>Meat, dairy, oils, diseased plants, pet waste, weeds with seeds, treated wood</p>
    <h3>Building Your Pile</h3>
    <ol>
      <li>Start with a layer of browns (4-6 inches)</li>
      <li>Add greens (2-3 inches)</li>
      <li>Water lightly</li>
      <li>Repeat layers</li>
      <li>Turn every 1-2 weeks</li>
    </ol>
    <h3>Troubleshooting</h3>
    <p><strong>Smelly?</strong> Too wet or too many greens - add browns and turn</p>
    <p><strong>Not breaking down?</strong> Too dry or too many browns - add water and greens</p>
    <p><strong>Pests?</strong> Bury food scraps deeper, avoid meat/dairy</p>
    <h3>Using Your Compost</h3>
    <p>Compost is ready when it's dark, crumbly, and smells earthy. Use as mulch, mix into soil, make compost tea, or top-dress containers.</p>
  `,
  image: '/assets/img/blog/blog-single3.jpg',
  date: 'March 5, 2024',
  author: 'Mike Soil',
  category: 'Soil Health',
  readTime: '6 min read',
  tags: ['composting', 'soil health', 'waste reduction', 'organic gardening'],
};

export default function BlogSinglePage() {
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
            <div className="col-xl-8 col-lg-8 mx-auto">
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
                  <img src="/assets/img/blog/author3.jpg" alt={blogPost.author} />
                  <div className="author-info">
                    <h4>{blogPost.author}</h4>
                    <p>Soil scientist and composting expert. Author of "The Complete Guide to Backyard Composting."</p>
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
                  <h4>Comments (4)</h4>
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