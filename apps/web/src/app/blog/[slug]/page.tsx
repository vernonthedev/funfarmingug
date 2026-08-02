import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    return <div>Blog Post: {slug}</div>;
}
