'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import FAQSection from '@/app/components/sections/FAQSection';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Your First Vegetable Garden',
    excerpt: 'A comprehensive guide for beginners looking to grow their own food at home.',
    image: '/assets/img/blog/blog1.jpg',
    date: 'March 15, 2024',
    author: 'Alex Buckmaster',
    category: 'Gardening Tips',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Benefits of Companion Planting',
    excerpt: 'Learn how to naturally protect your plants and increase yields with companion planting.',
    image: '/assets/img/blog/blog2.jpg',
    date: 'March 10, 2024',
    author: 'Sarah Green',
    category: 'Organic Methods',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Composting 101: Turn Waste into Gold',
    excerpt: 'Everything you need to know about creating rich, organic compost for your garden.',
    image: '/assets/img/blog/blog3.jpg',
    date: 'March 5, 2024',
    author: 'Mike Soil',
    category: 'Soil Health',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Vertical Gardening for Small Spaces',
    excerpt: 'Maximize your growing space with these creative vertical gardening solutions.',
    image: '/assets/img/blog/blog4.jpg',
    date: 'February 28, 2024',
    author: 'Lisa Urban',
    category: 'Urban Farming',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Natural Pest Control Methods',
    excerpt: 'Keep your garden healthy without harmful chemicals using these organic pest control techniques.',
    image: '/assets/img/blog/blog5.jpg',
    date: 'February 20, 2024',
    author: 'Tom Natural',
    category: 'Pest Management',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Seasonal Planting Calendar',
    excerpt: 'Know exactly what to plant and when with our comprehensive seasonal guide.',
    image: '/assets/img/blog/blog6.jpg',
    date: 'February 15, 2024',
    author: 'Emma Seasons',
    category: 'Planning',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        subtitle="Our Blog"
        title="Green Thumb Insights"
        description="Expert tips, guides, and inspiration for your home farming journey."
        primaryButtonText="Read Latest"
        primaryButtonHref="/blog-single"
      />
      <section className="vl-blog-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                {blogPosts.map((post) => (
                  <div key={post.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <article className="blog-item">
                      <div className="blog-thumb">
                        <img src={post.image} alt={post.title} />
                        <div className="blog-date">
                          <span>{post.date.split(' ')[0]}</span>
                          <span>{post.date.split(' ')[1]}</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <a href="#" className="blog-category">{post.category}</a>
                          <span className="blog-author">By {post.author}</span>
                          <span className="blog-time">{post.readTime}</span>
                        </div>
                        <h3 className="blog-title"><a href={`/blog-single?id=${post.id}`}>{post.title}</a></h3>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <a href={`/blog-single?id=${post.id}`} className="blog-read-more">Read More <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              <div className="space30"></div>
              <div className="blog-pagination text-center">
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}