'use client';

import Link from 'next/link';

const galleryImages = [
  { image: '/assets/images/gallery/gallery-1-1.jpg', title: 'Garden Landscape', category: 'Landscaping' },
  { image: '/assets/images/gallery/gallery-1-2.jpg', title: 'Residential Lawn', category: 'Lawn Care' },
  { image: '/assets/images/gallery/gallery-1-3.jpg', title: 'Commercial Garden', category: 'Commercial' },
  { image: '/assets/images/gallery/gallery-1-4.jpg', title: 'Rooftop Garden', category: 'Landscaping' },
  { image: '/assets/images/gallery/gallery-1-5.jpg', title: 'Irrigation System', category: 'Irrigation' },
  { image: '/assets/images/gallery/gallery-1-6.jpg', title: 'Tree Planting', category: 'Tree Planting' },
  { image: '/assets/images/gallery/gallery-1-7.jpg', title: 'Pest Control', category: 'Pest Control' },
  { image: '/assets/images/gallery/gallery-1-8.jpg', title: 'Spring Cleanup', category: 'Cleanup' },
  { image: '/assets/images/gallery/gallery-1-9.jpg', title: 'Garden Design', category: 'Design' },
  { image: '/assets/images/gallery/gallery-1-10.jpg', title: 'Mulching Service', category: 'Maintenance' },
  { image: '/assets/images/gallery/gallery-1-11.jpg', title: 'Aeration', category: 'Lawn Care' },
  { image: '/assets/images/gallery/gallery-1-12.jpg', title: 'Outdoor Lighting', category: 'Lighting' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">Gallery</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li>Gallery</li>
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

      {/* Gallery Grid */}
      <section className="gallery-one">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Our Gallery</span>
            <h2 className="section-title__title">Explore Our Work</h2>
          </div>
          <div className="gallery-one__filter">
            <ul className="list-unstyled">
              <li className="active" data-filter="*">All</li>
              <li data-filter=".landscaping">Landscaping</li>
              <li data-filter=".lawn-care">Lawn Care</li>
              <li data-filter=".commercial">Commercial</li>
              <li data-filter=".irrigation">Irrigation</li>
              <li data-filter=".tree-planting">Tree Planting</li>
              <li data-filter=".maintenance">Maintenance</li>
            </ul>
          </div>
          <div className="gallery-one__grid row gutter-y-30">
            {galleryImages.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 gallery-item ${item.category.toLowerCase().replace(' ', '-')}`}>
                <div className="gallery-one__item">
                  <div className="gallery-one__image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-one__overlay">
                      <a href={item.image} className="gallery-one__zoom" data-magnific-popup="gallery">
                        <i className="icon-zoom"></i>
                      </a>
                      <a href="/projects/details" className="gallery-one__link">
                        <i className="icon-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="gallery-one__content">
                    <span className="gallery-one__category">{item.category}</span>
                    <h5 className="gallery-one__title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-one__btn text-center" style={{ marginTop: '40px' }}>
            <Link href="/gallery" className="garlon-btn"><span>Load More Images</span> <i className="icon-angle-small-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="video-gallery">
        <div className="container">
          <div className="section-title section-title__center">
            <span className="section-title__tagline">Video Gallery</span>
            <h2 className="section-title__title">Watch Our Work in Action</h2>
          </div>
          <div className="video-gallery__carousel garlon-owl__carousel owl-carousel" data-owl-options='{"loop":true,"items":3,"autoplay":false,"smartSpeed":1000,"margin":30,"nav":true,"navText":["<span class=\\"icon-angle-small-left\\"></span>","<span class=\\"icon-angle-small-right\\"></span>"],"dots":false,"responsive":{"0":{"items":1},"768":{"items":2},"992":{"items":3}}}'>
            {[
              { title: 'Spring Garden Transformation', thumbnail: '/assets/images/video/video-1-1.jpg', video: 'https://www.youtube.com/watch?v=example1' },
              { title: 'Lawn Care Tips', thumbnail: '/assets/images/video/video-1-2.jpg', video: 'https://www.youtube.com/watch?v=example2' },
              { title: 'Tree Planting Process', thumbnail: '/assets/images/video/video-1-3.jpg', video: 'https://www.youtube.com/watch?v=example3' },
            ].map((video, index) => (
              <div key={index} className="item">
                <div className="video-gallery__item">
                  <div className="video-gallery__thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <a href={video.video} className="video-gallery__play" data-magnific-popup="iframe">
                      <i className="icon-play"></i>
                    </a>
                  </div>
                  <div className="video-gallery__content">
                    <h5 className="video-gallery__title">{video.title}</h5>
                    <a href={video.video} className="video-gallery__link" data-magnific-popup="iframe">Watch Video <i className="icon-angle-small-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-1-1.jpg)' }}>
            <div className="cta-one__shape">
              <img src="/assets/images/shapes/cta-1-1.png" alt="shape" />
            </div>
            <div className="row align-items-center">
              <div className="col-xl-8">
                <div className="cta-one__content">
                  <h2 className="cta-one__title">Like What You See?</h2>
                  <p className="cta-one__text">Let's create something beautiful together. Contact us for a free consultation.</p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cta-one__btn">
                  <Link href="/contact" className="garlon-btn garlon-btn--white"><span>Start a Project</span> <i className="icon-angle-small-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}