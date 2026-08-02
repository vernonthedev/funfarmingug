import { GetSupportPage as SupportContent } from '@/components/get-support';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Get Support',
    description:
        'Contact the Fun Farming Uganda support team for any inquiries, bookings and follow up. We are happy to assist you.',
};

export default function GetSupport() {
    return (
        <>
            <PageTitle
                image="/images/page-title/contact-us.jpg"
                subTitle="Contact The Support Team"
                title="Get Support"
                pageClass="page-support"
                crumbs={[{ label: 'Get Support' }]}
            />
            <SupportContent />
        </>
    );
}
