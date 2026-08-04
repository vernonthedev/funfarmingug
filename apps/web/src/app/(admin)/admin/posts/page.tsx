import Link from 'next/link';
import { FileText, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { Badge } from '@/admin/components/ui/badge';
import { Button } from '@/admin/components/ui/button';
import { Checkbox } from '@/admin/components/ui/checkbox';
import { Frame } from '@/admin/components/ui/frame';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/admin/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/admin/components/ui/table';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/admin/components/ui/tooltip';
import { FilterDrawer } from '@/admin/components/filter-drawer';
import { categories, posts } from '@/admin/lib/site-content';

export default function PostsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Content
                    </p>
                    <h1 className="text-2xl font-bold">Blog Posts</h1>
                    <p className="text-sm text-muted-foreground">
                        Create and manage blog posts shown across the website.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button render={<Link href="/admin/posts/new" />}>
                        <Plus size={20} strokeWidth={1.5} />
                        New Post
                    </Button>
                    <FilterDrawer title="Post Filters">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <Label>Search</Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Search posts…"
                                        className="ps-8"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Category</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Categories
                                        </SelectItem>
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
                                <Label>Status</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="All Statuses" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Statuses
                                        </SelectItem>
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
                    </FilterDrawer>
                </div>
            </div>

            <Frame className="w-full">
                <Table variant="card">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Published</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.map((post) => {
                            const cat = categories.find(
                                (c) => c.id === post.categoryId
                            );
                            return (
                                <TableRow
                                    key={post.id}
                                    className={
                                        post.status === 'draft'
                                            ? 'opacity-70'
                                            : ''
                                    }
                                >
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/admin/posts/${post.id}`}
                                            className="flex items-center gap-3 no-underline text-foreground hover:underline"
                                        >
                                            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                                                <FileText
                                                    size={16}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="truncate font-medium">
                                                    {post.title}
                                                </div>
                                                <div className="truncate text-xs text-muted-foreground">
                                                    /{post.slug}
                                                </div>
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className="font-normal"
                                        >
                                            {cat?.title ?? 'Uncategorised'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {post.author}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {post.publishedAt}
                                    </TableCell>
                                    <TableCell>
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
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            <Tooltip>
                                                <TooltipTrigger
                                                    render={
                                                        <Button
                                                            variant="ghost"
                                                            size="icon-xs"
                                                            render={
                                                                <Link
                                                                    href={`/admin/posts/${post.id}`}
                                                                />
                                                            }
                                                        >
                                                            <Pencil
                                                                size={16}
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                            />
                                                        </Button>
                                                    }
                                                />
                                                <TooltipContent>
                                                    Edit
                                                </TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    render={
                                                        <Button
                                                            variant="ghost"
                                                            size="icon-xs"
                                                            className="text-destructive hover:text-destructive"
                                                        >
                                                            <Trash2
                                                                size={16}
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                            />
                                                        </Button>
                                                    }
                                                />
                                                <TooltipContent>
                                                    Delete
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Frame>
            <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                    Showing <strong>{posts.length}</strong> posts
                </div>
                <div className="flex gap-1">
                    <Button variant="outline" size="sm" disabled>
                        Prev
                    </Button>
                    <Button size="sm">1</Button>
                    <Button variant="outline" size="sm">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
