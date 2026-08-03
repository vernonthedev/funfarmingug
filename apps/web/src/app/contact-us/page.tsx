import { ContactUsPage as ContactContent } from '@/components/contact';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Contact Us',
    description:
        'Contact Fun Farming Uganda for more information about our activities, tours and organic products. We are happy to answer your questions.',
};

export default function ContactUs() {
    return (
        <>
            <PageTitle
                image="/images/funfarm/funfarm_n27.png"
                subTitle="Take The Bull By The Horns"
                title="Contact Us"
                pageClass="page-contact-us"
                crumbs={[{ label: 'Contact Us' }]}
            />
            <ContactContent />
        </>
    );
}
