import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardFooter,
    CardHeader,
    CardPanel,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PageSkeleton } from '../components/page-skeleton';
import { categories, getPost } from '../lib/site-content';

export const Route = createFileRoute('/posts/$id/edit')({
    component: PostEditPage,
    pendingComponent: PageSkeleton,
});

function PostEditPage() {
    const { id } = useParams({ from: '/posts/$id/edit' });
    const post = getPost(id);

    if (!post) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/posts/$id"
                params={{ id }}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to {post.title}
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Edit: {post.title}</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label>Title</Label>
                                <Input defaultValue={post.title} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Slug</Label>
                                <Input defaultValue={post.slug} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Category</Label>
                                <Select defaultValue={post.categoryId}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem
                                                key={cat.id}
                                                value={cat.id}
                                            >
                                                {cat.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Published Date</Label>
                                <Input
                                    type="date"
                                    defaultValue={post.publishedAt}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Author</Label>
                                <Input defaultValue={post.author} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Status</Label>
                                <Select defaultValue={post.status}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">
                                            Published
                                        </SelectItem>
                                        <SelectItem value="draft">
                                            Draft
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Thumbnail URL</Label>
                            <Input
                                defaultValue={post.thumbnail || ''}
                                placeholder="https://…"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Excerpt</Label>
                            <Textarea defaultValue={post.excerpt} rows={2} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Body</Label>
                            <Textarea defaultValue={post.body} rows={10} />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label>Meta Title</Label>
                                <Input defaultValue={post.metaTitle || ''} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Meta Description</Label>
                                <Input
                                    defaultValue={post.metaDescription || ''}
                                />
                            </div>
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button
                        variant="outline"
                        render={<Link to="/posts/$id" params={{ id }} />}
                    >
                        Cancel
                    </Button>
                    <Button>
                        <Save size={18} strokeWidth={1.5} />
                        Save Changes
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
