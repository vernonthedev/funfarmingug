import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Calendar, FileText, Pencil, Tag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardPanel, CardTitle } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { categories, getPost } from '../lib/site-content';

export const Route = createFileRoute('/posts/$id')({
    component: PostDetailPage,
    pendingComponent: PageSkeleton,
});

function PostDetailPage() {
    const { id } = useParams({ from: '/posts/$id' });
    const post = getPost(id);

    if (!post) {
        throw notFound();
    }

    const cat = categories.find((c) => c.id === post.categoryId);

    return (
        <div className="space-y-6">
            <Link
                to="/posts"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Blog Posts
            </Link>

            <Card>
                <CardPanel>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="min-w-0 space-y-2">
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} strokeWidth={1.5} />{' '}
                                    {post.publishedAt}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User size={14} strokeWidth={1.5} />{' '}
                                    {post.author}
                                </span>
                                {cat && (
                                    <span className="flex items-center gap-1">
                                        <Tag size={14} strokeWidth={1.5} />{' '}
                                        {cat.title}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant={
                                        post.status === 'active'
                                            ? 'success'
                                            : 'secondary'
                                    }
                                >
                                    {post.status === 'active'
                                        ? 'Published'
                                        : 'Draft'}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                    /{post.slug}
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            render={
                                <Link to="/posts/$id/edit" params={{ id }} />
                            }
                        >
                            <Pencil size={18} strokeWidth={1.5} />
                            Edit Post
                        </Button>
                    </div>
                </CardPanel>
            </Card>

            <div className="grid gap-4 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText size={18} strokeWidth={1.5} />
                            Content
                        </CardTitle>
                    </CardHeader>
                    <CardPanel>
                        {post.body ? (
                            <p className="whitespace-pre-line text-sm">
                                {post.body}
                            </p>
                        ) : (
                            <p className="text-sm text-muted-foreground italic">
                                No content yet.
                            </p>
                        )}
                    </CardPanel>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Metadata</CardTitle>
                    </CardHeader>
                    <CardPanel className="space-y-3">
                        <div>
                            <div className="text-xs font-medium text-muted-foreground">
                                Excerpt
                            </div>
                            <p className="text-sm">{post.excerpt || '—'}</p>
                        </div>
                        <div>
                            <div className="text-xs font-medium text-muted-foreground">
                                Meta Title
                            </div>
                            <p className="text-sm">{post.metaTitle || '—'}</p>
                        </div>
                        <div>
                            <div className="text-xs font-medium text-muted-foreground">
                                Meta Description
                            </div>
                            <p className="text-sm">
                                {post.metaDescription || '—'}
                            </p>
                        </div>
                    </CardPanel>
                </Card>
            </div>
        </div>
    );
}
