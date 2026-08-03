import { FarmFoodPage as FarmFoodComponent } from '@/components/farmfood';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Farm Food',
    description:
        'Taste the fresh, organic food of Fun Farming Uganda - delicious meals, BBQ & drinks prepared from our own vegetables, fruits and farm produce in Nakaseke District.',
};

export default function FarmFood() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n13.png"
                subTitle="Fresh From The Farm To Your Plate"
                title="Our FarmFood"
                pageClass="page-our-commitments"
                crumbs={[{ label: 'Farm Food' }]}
            />
            <FarmFoodComponent />
        </>
    );
}
