import { BlogPage } from '@/components/blog';
import { PageTitle } from '@/components/site/PageTitle';

export const metadata = {
    title: 'Blog',
    description:
        'Stories, guides and updates from Fun Farming Uganda covering organic farming, goat breeding, poultry and our youth agro project.',
};

export default function BlogIndexPage() {
    return (
        <>
            <PageTitle
                image="/images/page-title/blog-full-w.jpg"
                subTitle="News & Stories"
                title="Blog"
                pageClass="page-blog"
                crumbs={[{ label: 'Blog' }]}
            />
            <BlogPage />
        </>
    );
}
