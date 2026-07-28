'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogDetailsPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <style jsx>{`
                .post-detail {
                    padding: 60px 0;
                }
                .post-header {
                    margin-bottom: 40px;
                }
                .post-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1f292d;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }
                .post-meta {
                    display: flex;
                    gap: 20px;
                    color: #6b7280;
                    font-size: 0.95rem;
                }
                .post-image {
                    width: 100%;
                    max-height: 500px;
                    object-fit: cover;
                    border-radius: 12px;
                    margin-bottom: 40px;
                }
                .post-content {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #374151;
                }
                .post-content p {
                    margin-bottom: 1.5rem;
                }
                .post-content h2 {
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: #1f292d;
                }
                .post-content h3 {
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    color: #1f292d;
                }
                .post-content ul,
                .post-content ol {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .post-content li {
                    margin-bottom: 0.5rem;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #2d6a4f;
                    font-weight: 600;
                    text-decoration: none;
                    margin-bottom: 30px;
                    transition: color 0.3s;
                }
                .back-link:hover {
                    color: #1b4332;
                }
                .share-buttons {
                    display: flex;
                    gap: 15px;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                }
                .share-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: #f3f4f6;
                    border-radius: 8px;
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s;
                }
                .share-btn:hover {
                    background: #2d6a4f;
                    color: white;
                }
            `}</style>

            <div className="l-main">
                <div className="post-detail">
                    <div className="container">
                        <Link href="/blog" className="back-link">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>

                        <article>
                            <header className="post-header">
                                <h1 className="post-title">
                                    Relive the magic of Fun Farm Weekend in
                                    Uganda!
                                </h1>
                                <div className="post-meta">
                                    <time dateTime="2024-04-15">
                                        April 15, 2024
                                    </time>
                                    <span>•</span>
                                    <span>5 min read</span>
                                    <span>•</span>
                                    <span>Agro Tourism</span>
                                </div>
                            </header>

                            <img
                                src="/img/gallery/funfarm_n18.png"
                                alt="Fun Farm Weekend Uganda"
                                className="post-image"
                            />

                            <div className="post-content">
                                <p className="lead">
                                    Check out the highlights as we prepare to
                                    travel in this video! Don't miss out next
                                    time! #FunFarmRecap #UgandaAdventure
                                    #funfarminguganda
                                </p>

                                <p>
                                    What an incredible weekend it was at Fun
                                    Farming Uganda! We welcomed visitors from
                                    across the country and even international
                                    guests for our annual Fun Farm Weekend. The
                                    energy was electric, the laughter was
                                    contagious, and the memories made will last
                                    a lifetime.
                                </p>

                                <h2>Day 1: Arrival & Farm Tour</h2>
                                <p>
                                    The weekend kicked off with a warm welcome
                                    at our main farmhouse. Guests were greeted
                                    with fresh fruit juices from our farm and a
                                    brief orientation about the activities
                                    planned. Our farm manager, David, led an
                                    extensive tour of the property, showcasing
                                    our goat breeding program, poultry farm, and
                                    the expansive banana plantation.
                                </p>
                                <p>
                                    Visitors were particularly fascinated by our
                                    sustainable farming practices. We
                                    demonstrated how we use organic composting,
                                    rainwater harvesting, and natural pest
                                    control methods to maintain a healthy
                                    ecosystem without harmful chemicals.
                                </p>

                                <h2>Day 2: Activities & Adventures</h2>
                                <p>
                                    Saturday was packed with activities for all
                                    ages. The morning started with our popular
                                    Farm Games - team-building exercises
                                    designed to strengthen bonds while having
                                    fun. Groups competed in:
                                </p>
                                <ul>
                                    <li>
                                        Obstacle course through the banana
                                        plantation
                                    </li>
                                    <li>
                                        Goat herding challenge (gentle guidance
                                        only!)
                                    </li>
                                    <li>
                                        Traditional Ugandan cooking competition
                                    </li>
                                    <li>Nature scavenger hunt</li>
                                </ul>
                                <p>
                                    The afternoon featured our Farm Expert Games
                                    for corporate teams, focusing on strategic
                                    thinking, communication, and leadership
                                    development in a natural setting.
                                </p>

                                <h2>Farm-to-Table Dining Experience</h2>
                                <p>
                                    No visit to Fun Farming is complete without
                                    our famous farm-to-table meals. Our chefs
                                    prepared an incredible feast using
                                    ingredients harvested that very morning:
                                </p>
                                <ul>
                                    <li>
                                        Grilled goat skewers with banana leaf
                                        marinade
                                    </li>
                                    <li>
                                        Steamed matooke (green bananas) with
                                        groundnut sauce
                                    </li>
                                    <li>
                                        Fresh salad with vegetables from our
                                        organic garden
                                    </li>
                                    <li>
                                        Tropical fruit platter with passion
                                        fruit, mangoes, and pineapples
                                    </li>
                                </ul>

                                <h2>Evening Entertainment</h2>
                                <p>
                                    As the sun set, we gathered around the
                                    bonfire for traditional Ugandan
                                    storytelling, music, and dance. Local
                                    performers shared cultural dances, and
                                    guests were invited to participate. The
                                    night ended with stargazing - the clear
                                    Ugandan skies offering spectacular views of
                                    the Milky Way.
                                </p>

                                <h2>Join Us Next Time!</h2>
                                <p>
                                    We're already planning our next Fun Farm
                                    Weekend and would love to have you join us!
                                    Whether you're looking for a team-building
                                    retreat, a family getaway, or just a chance
                                    to reconnect with nature, Fun Farming Uganda
                                    offers an unforgettable experience.
                                </p>
                                <p>
                                    <strong>
                                        Stay tuned to our social media for
                                        announcements about the next event date!
                                    </strong>
                                </p>
                            </div>

                            <div className="share-buttons">
                                <a href="#" className="share-btn">
                                    Share on Facebook
                                </a>
                                <a href="#" className="share-btn">
                                    Share on Twitter
                                </a>
                                <a href="#" className="share-btn">
                                    Share on LinkedIn
                                </a>
                                <a href="#" className="share-btn">
                                    Share on WhatsApp
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
