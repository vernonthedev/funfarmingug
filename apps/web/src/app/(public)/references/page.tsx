import { ReferencesPage } from '@/components/references';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'References',
    description:
        'Read reviews and testimonials from the happy visitors, teams and families who have experienced Fun Farming Uganda in Nakaseke District.',
};

export default function References() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n18.png"
                subTitle="Our Farm Ambassadors Say"
                title="Our References"
                pageClass="page-our-references"
                crumbs={[{ label: 'References' }]}
            />
            <ReferencesPage />
        </>
    );
}
