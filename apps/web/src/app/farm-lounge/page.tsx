import { FarmLoungePage as FarmLoungeComponent } from '@/components/farm-lounge';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Farm Lounge',
    description:
        'Sip, unwind and reconnect with nature at the Fun Farming Uganda farm lounge - a five star haven for weary travellers in the Nakaseke hills.',
};

export default function FarmLounge() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n16.png"
                subTitle="Five Star Housing & Facilities"
                title="Our Lounge Facilities"
                pageClass="page-our-service"
                crumbs={[{ label: 'Farm Lounge' }]}
            />
            <FarmLoungeComponent />
        </>
    );
}
