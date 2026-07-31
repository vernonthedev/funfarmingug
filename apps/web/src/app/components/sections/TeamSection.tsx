'use client';

import Link from 'next/link';

interface TeamMember {
    image: string;
    name: string;
    role: string;
    socialLinks?: Array<{ platform: string; href: string }>;
}

interface TeamSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
    {
        image: '/assets/img/team/team6-thumb(1).png',
        name: 'Alex Buckmaster',
        role: "Tam's Stationers",
        socialLinks: [
            { platform: 'facebook', href: '/contact' },
            { platform: 'linkedin', href: '/contact' },
            { platform: 'twitter', href: '/contact' },
            { platform: 'youtube', href: '/contact' },
        ],
    },
    {
        image: '/assets/img/team/team6-thumb(2).png',
        name: 'Alex Buckmaster',
        role: "Tam's Stationers",
        socialLinks: [
            { platform: 'facebook', href: '/contact' },
            { platform: 'linkedin', href: '/contact' },
            { platform: 'twitter', href: '/contact' },
            { platform: 'youtube', href: '/contact' },
        ],
    },
    {
        image: '/assets/img/team/team6-thumb(3).png',
        name: 'Alex Buckmaster',
        role: "Tam's Stationers",
        socialLinks: [
            { platform: 'facebook', href: '/contact' },
            { platform: 'linkedin', href: '/contact' },
            { platform: 'twitter', href: '/contact' },
            { platform: 'youtube', href: '/contact' },
        ],
    },
];

export default function TeamSection({
    title = 'Meet the Minds Behind Orgaanic',
    subtitle = 'Our Team',
    description = "At Orgaanic, we're more than just a company — we're a team of passionate agriculturists, designers, and eco-enthusiasts dedicated",
    members = defaultMembers,
}: TeamSectionProps) {
    const socialIcons: Record<string, string> = {
        facebook: 'fa-brands fa-facebook',
        linkedin: 'fa-brands fa-linkedin-in',
        twitter: 'fa-brands fa-twitter',
        youtube: 'fa-brands fa-youtube',
    };

    return (
        <section className="vl-team6-area sp1">
            <div className="container">
                <div className="row">
                    <div className="team6-heading">
                        <div className="service6-top">
                            <div className="service6-top-left">
                                <h3
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                >
                                    {subtitle}
                                </h3>
                                <div className="space16"></div>
                                <h2
                                    className="text-anime-style-3"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {title}
                                </h2>
                            </div>
                            <div className="service6-top-right">
                                <p
                                    className="text"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space44"></div>

                    <div
                        className="swiper myteam6"
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                    >
                        <div className="swiper-wrapper">
                            {members.map((member, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="team6-area-box">
                                        <div className="team6-thumb">
                                            <div className="team6-img case_img_anime">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                />
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                />
                                            </div>
                                            <div className="team6-content">
                                                <h3>
                                                    <Link href="/team">
                                                        {member.name}
                                                    </Link>
                                                </h3>
                                                <div className="space16"></div>
                                                <p>{member.role}</p>
                                            </div>
                                            <div className="team6-social">
                                                <ul>
                                                    {member.socialLinks?.map(
                                                        (social, i) => (
                                                            <li key={i}>
                                                                <a
                                                                    href={
                                                                        social.href
                                                                    }
                                                                    aria-label={
                                                                        social.platform
                                                                    }
                                                                >
                                                                    <i
                                                                        className={
                                                                            socialIcons[
                                                                                social
                                                                                    .platform
                                                                            ] ||
                                                                            'fa-brands fa-facebook'
                                                                        }
                                                                    ></i>
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="team6-arrow">
                        <div
                            className="next-arrow mr-12"
                            data-aos="fade-right"
                            data-aos-duration="900"
                        >
                            <a href="#">
                                <img
                                    src="/assets/img/icon/arrow-left-testi06.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div
                            className="prev-arrow"
                            data-aos="fade-left"
                            data-aos-duration="900"
                        >
                            <a href="#">
                                <img
                                    src="/assets/img/icon/arrow-right-testi06.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
