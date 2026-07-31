'use client';

import HeroSection from '@/app/components/sections/HeroSection';
import TeamSection from '@/app/components/sections/TeamSection';
import FAQSection from '@/app/components/sections/FAQSection';

const teamMember = {
    name: 'Alex Buckmaster',
    role: 'Founder & CEO',
    bio: 'Alex has over 20 years of experience in sustainable agriculture and organic farming. He founded Orgaanic with a vision to make home farming accessible to everyone.',
    image: '/assets/img/team/team6-thumb(1).png',
    expertise: [
        'Organic Farming',
        'Sustainable Agriculture',
        'Urban Gardening',
        'Permaculture Design',
    ],
    socialLinks: [
        { platform: 'facebook', href: '#' },
        { platform: 'linkedin', href: '#' },
        { platform: 'twitter', href: '#' },
        { platform: 'youtube', href: '#' },
    ],
};

export default function TeamSinglePage() {
    return (
        <>
            <HeroSection
                subtitle="Team Member"
                title={teamMember.name}
                description={teamMember.role}
                primaryButtonText="Back to Team"
                primaryButtonHref="/team"
            />
            <section className="vl-team-single-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="team-single-thumb">
                                <img
                                    src={teamMember.image}
                                    alt={teamMember.name}
                                />
                            </div>
                            <div className="space30"></div>
                            <div className="team-single-social">
                                <ul>
                                    {teamMember.socialLinks.map((social, i) => (
                                        <li key={i}>
                                            <a
                                                href={social.href}
                                                aria-label={social.platform}
                                            >
                                                <i
                                                    className={`fa-brands fa-${social.platform}`}
                                                ></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="team-single-info">
                                <h3 className="sub-title">{teamMember.role}</h3>
                                <div className="space16"></div>
                                <h2 className="title">{teamMember.name}</h2>
                                <div className="space24"></div>
                                <p>{teamMember.bio}</p>
                                <div className="space30"></div>
                                <div className="team-single-expertise">
                                    <h4>Areas of Expertise</h4>
                                    <ul>
                                        {teamMember.expertise.map(
                                            (skill, i) => (
                                                <li key={i}>
                                                    <i className="fa-solid fa-check"></i>{' '}
                                                    {skill}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSection />
            <FAQSection />
        </>
    );
}
