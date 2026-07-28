'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Organic Goat Cheese', price: 'UGX 25,000', image: '/img/gallery/funfarm_n1.png', category: 'Dairy' },
  { id: 2, name: 'Free-Range Eggs (12)', price: 'UGX 15,000', image: '/img/gallery/funfarm_n4.png', category: 'Poultry' },
  { id: 3, name: 'Fresh Banana Bunch', price: 'UGX 10,000', image: '/img/gallery/funfarm_n5.png', category: 'Produce' },
  { id: 4, name: 'Organic Honey (500g)', price: 'UGX 30,000', image: '/img/gallery/funfarm_n6.png', category: 'Pantry' },
  { id: 5, name: 'Goat Meat (1kg)', price: 'UGX 45,000', image: '/img/gallery/funfarm_n2.png', category: 'Meat' },
  { id: 6, name: 'Herbal Tea Blend', price: 'UGX 20,000', image: '/img/gallery/funfarm_n7.png', category: 'Beverages' },
  { id: 7, name: 'Handmade Soap Set', price: 'UGX 18,000', image: '/img/gallery/funfarm_n8.png', category: 'Wellness' },
  { id: 8, name: 'Banana Flour (1kg)', price: 'UGX 12,000', image: '/img/gallery/funfarm_n9.png', category: 'Pantry' },
];

const categories = ['All', 'Dairy', 'Poultry', 'Produce', 'Pantry', 'Meat', 'Beverages', 'Wellness'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="page-header" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header.jpg)' }}>
        <div className="container">
          <div className="page-header__inner">
            <h2 className="page-header__title">Farm Shop</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        <div className="page-header__shape-1"><img src="/assets/images/shapes/page-header-1-1.png" alt="shape" /></div>
        <div className="page-header__shape-2"><img src="/assets/images/shapes/page-header-1-2.png" alt="shape" /></div>
      </div>

      <section className="shop-section section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <aside className="shop-sidebar">
                <div className="sidebar-widget">
                  <h4 className="sidebar-widget__title">Categories</h4>
                  <ul className="sidebar-widget__list">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <label className="custom-checkbox">
                          <input 
                            type="checkbox" 
                            checked={activeCategory === cat || (cat === 'All' && activeCategory === 'All')}
                            onChange={() => setActiveCategory(cat)}
                          />
                          <span className="checkmark"></span>
                          {cat}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h4 className="sidebar-widget__title">Price Range</h4>
                  <div className="price-range-slider">
                    <div id="price-slider"></div>
                    <div className="price-inputs">
                      <input type="text" placeholder="Min" readOnly />
                      <span>-</span>
                      <input type="text" placeholder="Max" readOnly />
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h4 className="sidebar-widget__title">Availability</h4>
                  <ul className="sidebar-widget__list">
                    <li>
                      <label className="custom-checkbox">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        In Stock
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Pre-Order
                      </label>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            <div className="col-lg-9">
              <div className="shop-toolbar">
                <div className="shop-toolbar__left">
                  <p className="shop-toolbar__count">Showing {filteredProducts.length} of {products.length} products</p>
                </div>
                <div className="shop-toolbar__right">
                  <div className="shop-view-mode">
                    <button 
                      className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                      aria-label="Grid view"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" rx="1"/>
                        <rect x="14" y="3" width="7" height="7" rx="1"/>
                        <rect x="3" y="14" width="7" height="7" rx="1"/>
                        <rect x="14" y="14" width="7" height="7" rx="1"/>
                      </svg>
                    </button>
                    <button 
                      className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                      aria-label="List view"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                      </svg>
                    </button>
                  </div>
                  <select className="shop-sort-select" defaultValue="default">
                    <option value="default">Default Sorting</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>

              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filteredProducts.map((product) => (
                  <article key={product.id} className="product-card">
                    <div className="product-card__image">
                      <Link href={`/shop/${product.id}`}>
                        <img src={product.image} alt={product.name} loading="lazy" />
                      </Link>
                      <div className="product-card__badges">
                        <span className="badge badge--organic">Organic</span>
                      </div>
                      <div className="product-card__actions">
                        <button className="btn-action btn-action--wishlist" aria-label="Add to wishlist">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        </button>
                        <button className="btn-action btn-action--quick-view" aria-label="Quick view">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="product-card__content">
                      <span className="product-card__category">{product.category}</span>
                      <h4 className="product-card__title">
                        <Link href={`/shop/${product.id}`}>{product.name}</Link>
                      </h4>
                      <div className="product-card__price">{product.price}</div>
                      <div className="product-card__actions-mobile">
                        <Link href={`/shop/${product.id}`} className="btn btn--primary btn--sm">View Details</Link>
                        <button className="btn btn--outline btn--sm" aria-label="Add to cart">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="pagination">
                <Link href="#" className="page-link" aria-label="Previous"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></Link>
                <Link href="#" className="page-link active">1</Link>
                <Link href="#" className="page-link">2</Link>
                <Link href="#" className="page-link">3</Link>
                <Link href="#" className="page-link" aria-label="Next"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}