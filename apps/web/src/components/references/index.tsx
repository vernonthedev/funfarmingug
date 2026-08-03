const REVIEWS = [
    {
        name: 'Lieve',
        location: 'at FunFarm Nakasero',
        points: 10,
        headline: 'Top team building thanks to David and Joseph',
        text: 'Pouring downpour. And there the cozy warm barn waited with coffee and a warm welcome. We were very happy that there was a partial switch to a winter program. It really was a great day, a bit of competition but not too much. The atmosphere was good. The games were challenging but not TOO. Everyone could participate. The meal was also tasty and more than sufficient.',
    },
    {
        name: 'Matovu Divo',
        location: 'Nakasero Fun Farming Site',
        points: 10,
        headline: 'Despite the changeable weather, an absolutely sunny team building experience.',
        text: 'Delicious breakfast served with love (including bacon and eggs). Original assignments, enthusiastically supervised. Delicious lunch (BBQ) and very quick service, always with a smile. If you are looking for something different in the Savannah, in other words an original team activity, this is the place to be!',
    },
    {
        name: 'Nantume Mariam',
        location: 'at FunFarming Nakasero',
        points: 8,
        headline: 'Fun day full of collaboration and activities',
        text: 'I enjoyed the day. The activities were very different, so you had to think and be active. The cooperation within our group was good, which meant that the roles could be divided properly. Every game was easy to complete within the set times.',
    },
    {
        name: 'Lawrence Kivumbi',
        location: 'Nakasero FunFarming Site',
        points: 8,
        headline: 'super good teambuilding',
        text: 'Very fun games where both trust and cooperation were discussed. Location was also very nice.',
    },
    {
        name: 'Jessy Evans',
        location: 'Nakasero Fun Farming Site',
        points: 8,
        headline: 'It was a super fun and well organized day',
        text: 'It was a super fun day. Activities were varied and everything ran smoothly from start to finish.',
    },
    {
        name: 'Leila Katushabe',
        location: 'at FunFarming Nakasero',
        points: 10,
        headline: 'Pheno-meuh-naal!',
        text: 'We came to FarmFun for a mini team building with our partners, and it was great! Everything was arranged with care and dedication, and it was clear that all employees do this with heart and soul. The cozy area for reception and lunch provided the necessary rest between the active farm games. Breakfast and lunch were also excellent. Afterwards I received very enthusiastic feedback from our partners, so... mission accomplished! By the way, the puns throughout the day and in all communication are the icing on the cake for me - love it :)',
    },
    {
        name: 'Lubwama Enock',
        location: 'Fun Farming Uganda',
        points: 10,
        headline: 'A staff day you will never forget',
        text: 'We had a farmtastic staff day. The games are fun and vary from making puzzles to beating your colleague to a pulp with a bag of hay. In addition to the games and enthusiastic guidance, the farm is also located in the beautiful countryside and there are more than enough opportunities to take a break, have a nice drink or enjoy one of the local products. We enjoyed it for a while :) Highly recommended! P.S.: The day was made just a little bit better by the cute kittens on the farm.',
    },
    {
        name: 'Wendy Martha',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'Certainly among the top team building events of my career!',
        text: 'The farm itself: very well maintained, beautiful location with tasteful design of the meeting place where lunch is also served, with a beautiful view of the green. Very varied assignments, sometimes thinking, sometimes more physical effort, some of which in the stables themselves next to the cows or calves so that we were still reminded of the farm. The whole thing is kept accessible so that everyone can feel at ease, team spirit is central. Guidance top! The team building is perfectly adapted to the group.',
    },
    {
        name: 'Joshua Mulonge',
        location: 'at FunFarming Uganda',
        points: 9,
        headline: 'Super fun afternoon with a very smooth and pleasant reception',
        text: 'Been twice already. Pleasant people, fun games, super cool concept. Definitely recommended for other groups.',
    },
    {
        name: 'Lillian Mbabazi',
        location: 'at FunFarming Uganda',
        points: 9,
        headline: 'fun team building, something for everyone',
        text: 'A fun and engaging day that gave our team plenty to talk about. Great games, great people and a beautiful setting.',
    },
    {
        name: 'Nalule Esther',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'COW-tastic',
        text: 'It was well organised, clear, fun and created a great team spirit and, above all, lots of funny moments! The whole team had fun!',
    },
    {
        name: 'Cindy Sanyu',
        location: 'at Funfarming Uganda',
        points: 10,
        headline: 'COW fantastic afternoon and evening!',
        text: 'Team building was very successful: super fun games, the nicest and most fantastic supervisors, very nice farm: very well kept, clean, very tasty BBQ and a fun "after party" with a very nice message for our specific group! A TOP team building is an understatement!',
    },
    {
        name: 'Marion Nalwoga',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'Very nice team building day!',
        text: 'Immaculate farm where hundreds of cows and 2 wonderful farmers gave us an unforgettable afternoon with our team. Challenging assignments, crazy games that really gave us a strong feeling together. This was followed by a nice BBQ.',
    },
    {
        name: 'Yolanda Vicky',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'super cool day, really what team building should be!',
        text: 'Top atmosphere that you convey, games that ensure that you help each other, need each other, had a good laugh and a lot of fun. That is only possible if the atmosphere is great with you!! Big thanks.',
    },
    {
        name: 'William Matuni',
        location: 'at Funfarming Uganda',
        points: 10,
        headline: 'Fantastic!!! Best team building ever!!!',
        text: 'Worth repeating. Great guidance and fun, funny activities!!!',
    },
    {
        name: 'Stefanie',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'Unforgettable day',
        text: 'Best team building in years!',
    },
    {
        name: 'Christine',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'Fun, challenging, well-cared for, competitive',
        text: 'Fun, and good collaboration with the whole group.',
    },
    {
        name: 'Hilde',
        location: 'at FunFarming Uganda',
        points: 9,
        headline: 'super experience!',
        text: 'It was a great experience, well organised, fun activities.',
    },
    {
        name: 'Joe Mutambuza',
        location: 'at FunFarming Uganda',
        points: 9,
        headline: 'Wow! What great team building!',
        text: 'We went for the FunFarming Plus package. The games were explained very well, the setting was very nice and the room where the refreshments and drinks were also available was very neat with modern equipment and furnishings. The team building was a wonderful mix of thinking and doing. To be repeated. Different location or different games.',
    },
    {
        name: 'Anjo lamers',
        location: 'at FunFarming Uganda',
        points: 8,
        headline: 'Awesome',
        text: 'Fun games, good organization, the food is also delicious.',
    },
    {
        name: 'Riena Williams',
        location: 'at FunFarming',
        points: 10,
        headline: 'Awesome!!!!',
        text: 'A very nice day full of variety and fantastic guidance. We were pampered by the two ladies who guided us through the assignments.',
    },
    {
        name: 'David Mitala',
        location: 'at FunFarming Uganda',
        points: 10,
        headline: 'Wonderful, relaxed, hilarious team building day among the cows :-)',
        text: 'Super nice creative assignments, laughed a lot, gave everything with colleagues and had a very tasty meal. Nice relaxing environment, which ensures that you have a fulfilled day!',
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
                                        Listen And Read All The Great Reviews
                                    </p>
                                </div>
                                <p className="title text-anime-style-1">
                                    Our Farm Ambassadors Say
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
                                                    {r.name}
                                                </div>
                                                <div className="location fs-13">
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