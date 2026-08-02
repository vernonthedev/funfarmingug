import { FaqPage as FaqContent } from '@/components/faq';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Frequently Asked Questions',
    description:
        'Answers to common questions about visiting Fun Farming Uganda - what to wear, activities, minimum group sizes, payments, drinks and more.',
};

export default function Faq() {
    return (
        <>
            <PageTitle
                image="/images/page-title/faq.jpg"
                subTitle="Answers To Common Questions"
                title="Frequently Asked Questions"
                pageClass="page-faq"
                crumbs={[{ label: 'FAQ' }]}
            />
            <FaqContent />
        </>
    );
}
