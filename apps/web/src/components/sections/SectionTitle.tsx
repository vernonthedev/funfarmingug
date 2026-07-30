export default function SectionTitle({
    tagline,
    title,
    align = 'center',
}: {
    tagline: string;
    title: string | React.ReactNode;
    align?: 'center' | 'start';
}) {
    return (
        <div className={`service6-top text-${align}`}>
            <div className="service6-top-left" data-aos="fade-right" data-aos-duration="900">
                <h3>{tagline}</h3>
                <div className="space16"></div>
                <h2 className="text-anime-style-3" data-aos="fade-left" data-aos-duration="1000">
                    {title}
                </h2>
            </div>
        </div>
    );
}
