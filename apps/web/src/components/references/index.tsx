import Link from 'next/link';

const REVIEWS = [
    {
        name: 'Lieve',
        duty: 'at FunFarm Nakasero',
        points: 10,
        headline: 'Top team building thanks to David and Joseph',
        text: 'Pouring downpour. And there the cozy warm barn waited with coffee and a warm welcome. We were very happy that there was a partial switch to a winter program. It really was a great day, a bit of competition but not too much. The atmosphere was good. The games were challenging but not TOO. Everyone could participate. The meal was also tasty and more than sufficient.',
    },
    {
        name: 'Matovu Divo',
        duty: 'Nakasero Fun Farming Site',
        points: 10,
        headline: 'Despite the changeable weather, an absolutely sunny team building experience.',
        text: 'Delicious breakfast served with love (including bacon and eggs). Original assignments, enthusiastically supervised. Delicious lunch (BBQ) and very quick service, always with a smile. If you are looking for something different in the Savannah, in other words an original team activity, this is the place to be!',
    },
    {
        name: 'Nantume Mariam',
        duty: 'at FunFarming Nakasero',
        points: 8,
        headline: 'Fun day full of collaboration and activities',
        text: 'I enjoyed the day. The activities were very different, so you had to think and be active. The cooperation within our group was good, which meant that the roles could be divided properly. Every game was easy to complete within the set times.',
    },
    {
        name: 'Lawrence Kivumbi',
        duty: 'Nakasero FunFarming Site',
        points: 8,
        headline: 'super good teambuilding',
        text: 'Very fun games where both trust and cooperation were discussed. Location was also very nice.',
    },
    {
        name: 'Jessy Evans',
        duty: 'Nakasero Fun Farming Site',
        points: 8,
        headline: 'It was a super fun and well organized day',
        text: 'It was a super fun day. Activities were varied and everything ran smoothly from start to finish.',
    },
    {
        name: 'Leila Katushabe',
        duty: 'at FunFarming Nakasero',
        points: 10,
        headline: 'Pheno-meuh-naal!',
        text: 'We came to FarmFun for a mini team building with our partners, and it was great! Everything was arranged with care and dedication. The cozy area for reception and lunch provided the necessary rest between the active farm games. Breakfast and lunch were excellent. By the way, the puns throughout the day are the icing on the cake for me - love it :)',
    },
    {
        name: 'Lubwama Enock',
        duty: 'Fun Farming Uganda',
        points: 10,
        headline: 'A staff day you will never forget',
        text: 'We had a farmtastic staff day. The games are fun and vary from making puzzles to beating your colleague to a pulp with a bag of hay. In addition to the games and enthusiastic guidance, the farm is also located in the beautiful countryside. We enjoyed a great day out - highly recommended!',
    },
    {
        name: 'Wendy Martha',
        duty: 'at FunFarming Uganda',
        points: 10,
        headline: 'Certainly among the top team building events of my career!',
        text: 'The farm itself is very well maintained, beautiful location with tasteful design of the meeting place where lunch is also served, with a beautiful view of the green. Very varied assignments, sometimes thinking, sometimes more physical effort. The whole thing is kept accessible so everyone can feel at ease - team spirit is central. Guidance top!',
    },
    {
        name: 'Joshua Mulonge',
        duty: 'at FunFarming Uganda',
        points: 9,
        headline: 'Super fun afternoon with a very smooth and pleasant reception',
        text: 'Been twice already. Pleasant people, fun games, super cool concept. Definitely recommended for other groups.',
    },
    {
        name: 'Nalule Esther',
        duty: 'at FunFarming Uganda',
        points: 10,
        headline: 'COW-tastic',
        text: 'It was well organized, clear, fun and created a great team spirit and, above all, lots of funny moments! The whole team had fun!',
    },
    {
        name: 'Cindy Sanyu',
        duty: 'at Funfarming Uganda',
        points: 10,
        headline: 'COW fantastic afternoon and evening!',
        text: 'Team building was very successful: super fun games, the nicest and most fantastic supervisors, very nice farm, very tasty BBQ and a fun after party with a very nice message for our specific group! A TOP team building is an understatement!',
    },
    {
        name: 'Joe Mutambuza',
        duty: 'at Fun Farming Uganda',
        points: 9,
        headline: 'Wow! What great team building!',
        text: 'We went for the FunFarming Plus package. The games were explained very well, the setting was very nice and the room where the refreshments and drinks were available was very neat with modern equipment. The team building was a wonderful mix of thinking and doing. To be repeated!',
    },
    {
        name: 'Riena Williams',
        duty: 'at FunFarming',
        points: 10,
        headline: 'Awesome!!!!',
        text: 'A very nice day full of variety and fantastic guidance. We were pampered by the two ladies who guided us through the assignments.',
    },
    {
        name: 'David Mitala',
        duty: 'at FunFarming Uganda',
        points: 10,
        headline: 'Wonderful, relaxed, hilarious team building day among the cows :-)',
        text: 'Super nice creative assignments, laughed a lot with colleagues and had a very tasty meal. Nice relaxing environment, which ensures that you have a fulfilled day!',
    },
];

const AVATARS = [
    '/images/funfarm/david1.jpg',
    '/images/funfarm/david2.jpg',
    '/images/funfarm/Farm-staff.jpeg',
    '/images/funfarm/david3.jpg',
    '/images/funfarm/david4.jpg',
    '/images/funfarm/david5.jpg',
];

function Stars({ points }: { points: number }) {
    const full = Math.floor(points / 2);
    const hasHalf = points % 2 === 1;
    return (
        <div className="wg-rating">
            {[0, 1, 2, 3, 4].map((i) => {
                if (i < full) {
                    return <i className="fa-solid fa-star" key={i}></i>;
                }
                if (i === full && hasHalf) {
                    return (
                        <i className="fa-solid fa-star-half-stroke" key={i}></i>
                    );
                }
                return <i className="fa-regular fa-star" key={i}></i>;
            })}
        </div>
    );
}

export function ReferencesPage() {
    const colA = REVIEWS.filter((_, i) => i % 2 === 0);
    const colB = REVIEWS.filter((_, i) => i % 2 === 1);
    return (
        <div className="main-content page-testimonial pb-0 mb--20">
            <section className="s-review">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image-wrap">
                                <div className="image">
                                    <img
                                        src="/images/funfarm/funfarm_n18.png"
                                        alt=""
                                        className="lazyload tf-animate-2"
                                    />
                                </div>
                                <div className="wg-counter style-3 scroll-element">
                                    <div className="has-border">
                                        <div className="counter-item">
                                            <div className="icon style-circle">
                                                <i className="fa-solid fa-face-smile"></i>
                                            </div>
                                            <div className="counter">
                                                <div className="odometer style-3">
                                                    10
                                                </div>
                                                <span className="sub-odo font-worksans">
                                                    k
                                                </span>
                                            </div>
                                            <p className="title font-worksans">
                                                Happy Customer
                                            </p>
                                            <div className="wg-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content-section">
                                <div className="heading-section style-2">
                                    <div className="img-item">
                                        <div className="item mr-25">
                                            <img
                                                className="tf-animate-1"
                                                src="/images/item/rice-plant-2.png"
                                                alt=""
                                            />
                                        </div>
                                        <p className="sub-title">
                                            Send Us A Review
                                        </p>
                                    </div>
                                    <p className="title">
                                        If You Are Satisfied
                                        <br />
                                        With The Service, Rate Us!
                                    </p>
                                </div>
                                <p className="text">
                                    There is great satisfaction in knowing you've
                                    done your job well and served your clients'
                                    interests. It gives us particular
                                    satisfaction when our clients take the time
                                    to acknowledge their satisfaction by
                                    providing Fun Farming Uganda with their
                                    testimonials.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="tf-btn btn-read-more scale-50"
                                >
                                    <span className="text-style text-anime-style-1">
                                        Talk About Your Review
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-item item-1 wow fadeInRight" data-wow-delay="0s">
                    <img src="/images/item/rice-plant-color.png" alt="" />
                </div>
            </section>

            <section className="s-customer-say container-loadmore has-img-item tf-pt-0">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section has-text text-center">
                                <p className="title wow fadeInUp" data-wow-delay="0s">
                                    What Did Customers Say?
                                </p>
                                <p className="text">
                                    Our farm ambassadors share their experiences
                                    of team building, farm games and the delicious
                                    FarmFood served at our location in Nakasero.
                                </p>
                                <div className="img-item">
                                    <img
                                        className="tf-animate-1"
                                        src="/images/item/rice-plant-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-customer">
                                {colA.map((r, i) => (
                                    <div
                                        className="testimonial wow fadeInUp"
                                        data-wow-delay="0s"
                                        key={i}
                                    >
                                        <div className="author-wrap">
                                            <div className="cd-flex">
                                                <div className="image-avt">
                                                    <img
                                                        src={
                                                            AVATARS[
                                                                i % AVATARS.length
                                                            ]
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="infor">
                                                    <div className="name-wrap">
                                                        <a
                                                            href="#"
                                                            className="name text-upper hover-text-4"
                                                        >
                                                            {r.name}
                                                        </a>
                                                        <Stars points={r.points} />
                                                    </div>
                                                    <p className="duty">
                                                        {r.duty}
                                                    </p>
                                                </div>
                                            </div>
                                            <i className="icon-quote"></i>
                                        </div>
                                        <div className="comment">
                                            <p className="caption fs-30 font-snowfall">
                                                {r.headline}
                                            </p>
                                            <p className="text">{r.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-customer">
                                {colB.map((r, i) => (
                                    <div
                                        className="testimonial wow fadeInUp"
                                        data-wow-delay="0s"
                                        key={i}
                                    >
                                        <div className="author-wrap">
                                            <div className="left">
                                                <div className="image-avt">
                                                    <img
                                                        src={
                                                            AVATARS[
                                                                i % AVATARS.length
                                                            ]
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="infor">
                                                    <div className="name-wrap">
                                                        <a
                                                            href="#"
                                                            className="name text-upper hover-text-4"
                                                        >
                                                            {r.name}
                                                        </a>
                                                        <Stars points={r.points} />
                                                    </div>
                                                    <p className="duty">
                                                        {r.duty}
                                                    </p>
                                                </div>
                                            </div>
                                            <i className="icon-quote"></i>
                                        </div>
                                        <div className="comment">
                                            <p className="caption fs-30 font-snowfall">
                                                {r.headline}
                                            </p>
                                            <p className="text">{r.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="flex justify-center">
                                <a
                                    href="#"
                                    className="tf-btn btn-load_menu mt-50"
                                >
                                    <span className="text-style">
                                        Load More Previews
                                    </span>
                                    <div className="icon">
                                        <i className="icon-arrow_right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-img-item item-1">
                    <img src="/images/item/page-title-top.png" alt="" />
                </div>
            </section>
        </div>
    );
}