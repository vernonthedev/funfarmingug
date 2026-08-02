const REVIEWS = [
    {
        location: 'Nakasero',
        points: 10,
        headline: 'A Farmtastic time!!',
        text: 'We were a group of 30 from ... which all of us enjoyed so much. The farm is well kept, the food were delicious, the staff is incredibly helpful, activities are great and exciting. We spent the entire day laughing and having a great time. We would definitely recommend this to everyone, it’s a must visit!',
    },
    {
        location: 'FunFarm Nakasero',
        points: 10,
        date: '2022-08-14',
        headline: 'Team building event',
        text: 'We had a team building event at the FunFarm. The activity was well organized and the staff were friendly and professional. We highly recommend! We went with 30 people and everyone enjoyed it.',
    },
    {
        location: 'Nakasero',
        points: 10,
        headline: 'A farmtastic day!!',
        text: 'We were a group of 40 and enjoyed a great day of activities, food and fun. The staff is friendly and helpful, and the place is clean and well maintained. Highly recommended for a group day trip.',
    },
    {
        location: 'FunFarm Nakasero',
        points: 10,
        date: '2022-08-06',
        headline: 'Wonderful team outing',
        text: 'Funfarming is the perfect way to bring a team together. We laughed, played games and enjoyed the fresh air. Everything was well organized from start to finish. Thank you for a wonderful day!',
    },
    {
        location: 'Nakasero',
        points: 10,
        date: '2022-08-02',
        headline: 'Best day on the farm',
        text: 'What a hidden gem! Beautiful surroundings, delicious food and endless fun. Our family had the best time and we can not wait to come back.',
    },
    {
        location: 'FunFarming Nakasero',
        points: 9,
        date: '2022-07-25',
        headline: 'Great experience overall',
        text: 'A well run farm with many things to see and do. The team was welcoming and the activities kept everyone busy. Truly a memorable day out.',
    },
    {
        location: 'Nakasero',
        points: 8,
        date: '2022-07-18',
        headline: 'Nice day out',
        text: 'Pleasant farm visit with friendly staff. The animals and the green scenery were the highlight. A good escape from the city.',
    },
    {
        location: 'FunFarming Nakaseke',
        points: 10,
        headline: 'Excellent farm visit',
        text: 'From the organic farm produce to the warm welcome, everything about Fun Farming Uganda was excellent. Our team loved every minute.',
    },
    {
        location: 'FunFarm Nakasero',
        points: 10,
        headline: 'Perfect team building',
        text: 'The activities were well thought out and the staff kept everyone laughing. Highly recommend for company team building events.',
    },
    {
        location: 'Nakasero',
        points: 9,
        headline: 'Great farm experience',
        text: 'We everyone from the team had a great time. Good food, open space and wonderful organization. Highly recommended.',
    },
    {
        location: 'FunFarming Nakasero',
        points: 10,
        headline: 'Fun for all ages',
        text: 'Whether with family, friends or colleagues, there is something for everyone. The kids loved the animals and we loved the peace.',
    },
    {
        location: 'Nakasero Fun Farming Site',
        points: 10,
        headline: 'Everything was perfect',
        text: 'A beautiful farm with passionate people. From the moment we arrived we were made to feel at home. A truly enjoyable experience.',
    },
    {
        location: 'FunFarming Nakasero',
        points: 8,
        headline: 'Pleasant break',
        text: 'A relaxing day out where we could unwind and connect with nature. The farm is well cared for and the food is tasty.',
    },
    {
        location: 'Nakasero',
        points: 9,
        headline: 'Thanks for the memories',
        text: 'We had so much fun that we did not want to leave. The organisation, the people and the food made it a perfect outing.',
    },
    {
        location: 'FunFarm',
        points: 10,
        headline: 'Amazing farm day!',
        text: 'Highly recommended. The team was amazing, the place clean and the experiences unforgettable. We will definitely be back.',
    },
    {
        location: 'Fun Farming Uganda',
        points: 9,
        headline: 'Great choice',
        text: 'We chose the best farm for our trip and it did not disappoint. The between vegetables and cows made the visit authentic.',
    },
    {
        location: 'Nakasero',
        points: 10,
        headline: 'Calming experience',
        text: 'The perfect place to disconnect and enjoy the sky, the green and the fresh air. The staff went above and beyond for us.',
    },
    {
        location: 'FunFarming Nakaseke',
        points: 8,
        headline: 'Green and peaceful',
        text: 'A beautiful green space with friendly people and delicious organic food. A wonderful place to spend the day.',
    },
    {
        location: 'Nakasero',
        points: 10,
        headline: 'Magical experience!',
        text: 'We truly enjoyed every moment of our stay. Beautiful. The farm is kept with great care and the activities were fun.',
    },
    {
        location: 'FunFarm Nakasero',
        points: 9,
        headline: 'Worth every cent',
        text: 'Everything was well worth it. Organised, clean and friendly with delightful racing up for the whole family.',
    },
    {
        location: 'Nakasero',
        points: 10,
        headline: 'Perfect escape',
        text: 'We celebrated with team and everyone was thrilled. The green hills, fresh air and warm welcome made our day magical.',
    },
    {
        location: 'FunFarming Uganda',
        points: 10,
        headline: 'A must farm visit',
        text: 'This is easily one of the best places to unwind. Nature, animals, food and friendliness all in one beautiful space.',
    },
];

const AVATARS = [
    '/images/widget/author-comment.jpg',
    '/images/section/customer-say-2.jpg',
    '/images/section/customer-say-3.jpg',
    '/images/section/customer-say-4.jpg',
    '/images/widget/author.jpg',
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
    return (
        <div className="main-content page-our-references pb-0">
            <section className="s-award s-testimonial-2 pb-0">
                <div className="tf-container w-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top heading-section text-center">
                                <div className="img-item">
                                    <div className="item">
                                        <img
                                            className="tf-animate-1"
                                            src="/images/item/rice-plant-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="sub-title">
                                        Testimonials From People Who Have
                                        Experienced It
                                    </p>
                                </div>
                                <p className="title text-anime-style-1">
                                    What Our Visitors Say
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="grid-layout-2">
                                {REVIEWS.map((r, i) => (
                                    <div
                                        className="testimonial style-1 wow fadeInUp"
                                        key={i}
                                    >
                                        <div className="comment">
                                            <div className="head">
                                                <div className="img-item">
                                                    <i className="icon-quote"></i>
                                                </div>
                                                <Stars points={r.points} />
                                            </div>
                                            <div className="caption font-snowfall fs-20">
                                                {r.headline}
                                            </div>
                                            <p className="text font-worksans">
                                                {r.text}
                                            </p>
                                        </div>
                                        <div className="author">
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
                                                <div className="name fw-7 text-upper">
                                                    {r.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
