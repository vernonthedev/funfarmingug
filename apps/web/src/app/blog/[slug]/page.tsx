import { notFound } from 'next/navigation';
import { BlogDetailPage } from '@/components/blog-detail';
import { PageTitle } from '@/components/site/PageTitle';
import { POSTS } from '@/lib/blog';

export function generateStaticParams() {
    return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = POSTS.find((item) => item.slug === params.slug);
    if (!post) {
        return { title: 'Blog' };
    }
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogDetailPageWrapper({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = POSTS.find((item) => item.slug === slug);
    if (!post) {
        notFound();
    }
    return (
        <>
            <PageTitle
                image="/images/page-title/blog-full-w.jpg"
                subTitle="Blog"
                title={post.title}
                pageClass="page-blog-single"
                crumbs={[
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                ]}
            />
            <BlogDetailPage post={post} />
        </>
    );
}
