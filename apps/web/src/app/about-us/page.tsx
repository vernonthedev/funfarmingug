import { AboutUsPage } from '@/components/about';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'About Us',
    description:
        'Fun Farming Uganda is an organic farm engaging in goat breeding, poultry farming and banana plantation, and a youth agro project in Uganda.',
};

export default function AboutPage() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n28.png"
                subTitle="Nurturing the Earth, Feeding the World"
                title="About the Farm"
                pageClass="page-about-us"
                crumbs={[{ label: 'About Us' }, { label: 'About The Farm' }]}
            />
            <AboutUsPage />
        </>
    );
}
