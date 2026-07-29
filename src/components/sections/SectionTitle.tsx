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
        <div className={`sec-title text-${align}`}>
            <div className="sec-title__tagline bw-split-in-up-fast">
                <img src="/assets/images/shapes/sec-title-shape.png" alt="shape" />
                {tagline}
            </div>
            <h3 className="sec-title__title bw-split-in-up">{title}</h3>
        </div>
    );
}
