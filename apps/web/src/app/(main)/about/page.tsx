'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            {/* HERO START */}
            <div className="vl-hero-inner-area parallaxie" style={{ backgroundImage: 'url(/assets/img/hero/about-us-inr-herothumb.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-hero-info">
                                <h2>About Us</h2>
                                <div className="space16"></div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><img src="/assets/img/icon/arrow-right-inner.svg" alt="" /></li>
                                    <li><Link className="aboutus_titlefix" href="/about">About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO END */}

            {/* ABOUT START */}
            <div className="vl-about-inner-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="vl-about-inner-info">
                                <div className="vl-about-inner-heading">
                                    <h3>About Our Agriculture</h3>
                                    <div className="space16"></div>
                                    <h2>Where Agriculture Meets Adventure!</h2>
                                    <div className="space16"></div>
                                    <p>
                                        Fun Farming Uganda is a unique agro-tourism destination where agriculture meets adventure.
                                        Located in the heart of Nakaseke District, Butalangu province, we offer an unforgettable
                                        farm experience that combines education, team building, and the beauty of Ugandan rural life.
                                    </p>
                                    <div className="space16"></div>
                                    <p>
                                        At Fun Farming Uganda, we bring people together through unforgettable farm experiences.
                                        From team building to farm tours, every visit is crafted to inspire connection and joy.
                                        Our farm is a living classroom where visitors can learn about sustainable farming practices,
                                        interact with farm animals, and enjoy the freshest organic produce.
                                    </p>
                                </div>
                                <div className="space30"></div>
                                <div className="vl-about-inner-thumb reveal image-anime lg-mb20">
                                    <img src="/webimgs/fun-farm-image.jpg" alt="Fun Farming Uganda" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="vl-about-inner-content">
                                <div className="vl-about-inner-author">
                                    <img src="/webimgs/david-holding-goat.jpg" alt="Farmer David" />
                                    <div className="space24"></div>
                                    <h2><span className="counter">5000</span>+</h2>
                                    <div className="space8"></div>
                                    <p>Happy Visitors</p>
                                </div>
                                <div className="vl-about-inner-items-info">
                                    <div className="vl-about-inner-items-content">
                                        <div className="logos">
                                            <img src="/assets/img/icon/about6-icon(1).svg" alt="" />
                                        </div>
                                        <div className="text_content">
                                            <h2><Link href="/about">Start Small, Grow Big</Link></h2>
                                            <div className="space16"></div>
                                            <p>At Fun Farming Uganda, we believe that everyone deserves access to fresh, organic food.</p>
                                        </div>
                                    </div>
                                    <div className="vl-about-inner-items-content">
                                        <div className="logos">
                                            <img src="/assets/img/icon/about6-icon(2).svg" alt="" />
                                        </div>
                                        <div className="text_content">
                                            <h2><Link href="/about">Green Starts Here</Link></h2>
                                            <div className="space16"></div>
                                            <p>Our mission is to transform unused spaces into productive, green areas.</p>
                                        </div>
                                    </div>
                                    <div className="vl-about-inner-items-list">
                                        <ul>
                                            <li><img src="/assets/img/icon/tick-about-inr.svg" alt="" />Small Space, Big Harvest</li>
                                            <li><img src="/assets/img/icon/tick-about-inr.svg" alt="" />Farm Is the New Adventure</li>
                                            <li><img src="/assets/img/icon/tick-about-inr.svg" alt="" />The Future Grows Here</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT END */}

            {/* HISTORY START */}
            <div className="vl-history-inr-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="team6-heading">
                            <div className="service6-top">
                                <div className="service6-top-left">
                                    <h3 data-aos="fade-right" data-aos-duration="900">Our History</h3>
                                    <div className="space16"></div>
                                    <h2 data-aos="fade-left" data-aos-duration="1000">The Story Behind <br />
                                        Fun Farming Uganda</h2>
                                </div>
                                <div className="service6-top-right">
                                    <p className="text" data-aos="fade-left" data-aos-duration="1000">
                                        Fun Farming Uganda began with a simple idea: to bring
                                        agriculture back to where people live. What started as a passion project
                                        on a small farm has grown into a thriving agro-tourism destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space44"></div>
                    </div>
                    <div className="vl-history-inr-gwrap">
                        <div className="vl-history-inr-gwrap-box">
                            <h2>2020</h2>
                            <div className="space24"></div>
                            <h3>Started With A Seed</h3>
                            <div className="space16"></div>
                            <p>One seed. One idea. One intention to grow better. That is all it took to start what would become a growing movement in sustainable agriculture and agro-tourism.</p>
                        </div>
                        <div className="vl-history-inr-gwrap-box">
                            <h2>2022</h2>
                            <div className="space24"></div>
                            <h3>Seeds Of Our Journey</h3>
                            <div className="space16"></div>
                            <p>With every seed we planted, a story began one of hope, community, and conscious living. Our journey has been marked by growth and learning.</p>
                        </div>
                        <div className="vl-history-inr-gwrap-box">
                            <h2>2024</h2>
                            <div className="space24"></div>
                            <h3>Where It All Began</h3>
                            <div className="space16"></div>
                            <p>It all started with a farm and a dream to make agriculture accessible to everyone. From that humble beginning, we have grown into a leading agro-tourism destination.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* HISTORY END */}
        </>
    );
}