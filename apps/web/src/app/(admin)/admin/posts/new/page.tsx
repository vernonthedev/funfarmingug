import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';
import { Button } from '@/admin/components/ui/button';
import {
    Card,
    CardFooter,
    CardHeader,
    CardPanel,
    CardTitle,
} from '@/admin/components/ui/card';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/admin/components/ui/select';
import { Textarea } from '@/admin/components/ui/textarea';
import { categories } from '@/admin/lib/site-content';

export default function PostNewPage() {
    return (
        <div className="space-y-6">
            <Link
                href="/admin/posts"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Blog Posts
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Create New Post</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label>Title</Label>
                                <Input placeholder="Post title…" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Slug</Label>
                                <Input placeholder="post-slug" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Category</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
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
                                <Input type="date" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Author</Label>
                                <Input placeholder="Author name…" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Status</Label>
                                <Select defaultValue="draft">
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
                            <Input placeholder="https://…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Excerpt</Label>
                            <Textarea placeholder="Short summary…" rows={2} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Body</Label>
                            <Textarea
                                placeholder="Write your post…"
                                rows={10}
                            />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label>Meta Title</Label>
                                <Input placeholder="SEO title…" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Meta Description</Label>
                                <Input placeholder="SEO description…" />
                            </div>
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button
                        variant="outline"
                        render={<Link href="/admin/posts" />}
                    >
                        Cancel
                    </Button>
                    <Button>
                        <Plus size={18} strokeWidth={1.5} />
                        Create Post
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
