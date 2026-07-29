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
            <ClientLayoutScripts />
        </>
    );
}
