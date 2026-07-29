import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayoutScripts from '@/components/ClientLayoutScripts';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <a
                href="#"
                data-target="html"
                className="scroll-to-target scroll-to-top"
            >
                <span className="scroll-to-top__text">back top</span>
                <span className="scroll-to-top__wrapper">
                    <span className="scroll-to-top__inner"></span>
                </span>
            </a>
            <ClientLayoutScripts />
        </>
    );
}
