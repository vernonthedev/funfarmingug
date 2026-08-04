import { GalleryPage as GalleryComponent } from '@/components/gallery';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Gallery',
    description:
        'A glimpse of life at Fun Farming Uganda - organic farm views, animals, activities and happy visitors in Nakaseke District, Uganda.',
};

export default function Gallery() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n13.png"
                subTitle="See Our Daily Photos"
                title="Farm Gallery"
                pageClass="page-gallery"
                crumbs={[{ label: 'Gallery' }]}
            />
            <GalleryComponent />
        </>
    );
}
