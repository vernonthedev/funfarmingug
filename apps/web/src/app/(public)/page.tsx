import Link from 'next/link';
import {
    Hero,
    Benefits,
    AboutUs,
    Services,
    QualityOfLife,
    WhatWeDo,
    OurAgriculture,
    Projects,
    Testimonials,
    HappyFarm,
    BlogPosts,
    MeetFarmer,
    ContactUs,
    Partners,
} from '@/components/home';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Benefits />
            <AboutUs />
            <Services />
            <QualityOfLife />
            <WhatWeDo />
            <OurAgriculture />
            <HappyFarm />
            <ContactUs />
        </>
    );
}
