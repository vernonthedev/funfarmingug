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
                image="/images/page-title/gallery.jpg"
                subTitle="Moments From The Farm"
                title="Our Gallery"
                pageClass="page-gallery"
                crumbs={[{ label: 'Gallery' }]}
            />
            <GalleryComponent />
        </>
    );
}
