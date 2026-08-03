import { ActivitiesPage as ActivitiesComponent } from '@/components/activities';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Activities',
    description:
        'Fun Farming Uganda activities - board games, farm kitchen, team building and farm lounge facilities for groups of more than forty people.',
};

export default function Activities() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n21.png"
                subTitle="Farm Games, Tours & Team Events"
                title="Farm Activities"
                pageClass="page-our-events"
                crumbs={[{ label: 'Activities' }]}
            />
            <ActivitiesComponent />
        </>
    );
}
