import { PrivacyPage as PrivacyContent } from '@/components/privacy';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Privacy Policy',
    description:
        'Learn how Fun Farming Uganda collects, uses and protects your personal data in accordance with our privacy policy.',
};

export default function PrivacyPolicy() {
    return (
        <>
            <PageTitle
                image="/images/page-title/about-us.jpg"
                subTitle="How We Handle Your Data"
                title="Privacy Policy"
                pageClass="page-privacy"
                crumbs={[{ label: 'Privacy Policy' }]}
            />
            <PrivacyContent />
        </>
    );
}
