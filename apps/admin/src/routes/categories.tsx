import {
    createFileRoute,
    Link,
    Outlet,
    useLocation,
} from '@tanstack/react-router';
import { FolderTree, Pencil, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Frame } from '@/components/ui/frame';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { PageSkeleton } from '../components/page-skeleton';
import { categories } from '../lib/site-content';

export const Route = createFileRoute('/categories')({
    component: CategoriesPage,
    pendingComponent: PageSkeleton,
});

function CategoriesPage() {
    const location = useLocation();

    if (location.pathname !== '/categories') {
        return <Outlet />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Content
                    </p>
                    <h1 className="text-2xl font-bold">Categories</h1>
                    <p className="text-sm text-muted-foreground">
                        Organise blog posts into categories across the website.
                    </p>
                </div>
                <Button render={<Link to="/categories/new" />}>
                    <Plus size={20} strokeWidth={1.5} />
                    New Category
                </Button>
            </div>

            <Frame className="w-full">
                <Table variant="card">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Posts</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((cat) => (
                            <TableRow key={cat.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to="/categories/$id/edit"
                                        params={{ id: cat.id }}
                                        className="flex items-center gap-3 no-underline text-foreground hover:underline"
                                    >
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                                            <FolderTree
                                                size={16}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <span className="font-medium">
                                            {cat.title}
                                        </span>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {cat.slug}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-16 rounded-full bg-secondary">
                                            <div
                                                className="h-2 rounded-full bg-primary"
                                                style={{
                                                    width: `${(cat.postCount / 20) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {cat.postCount}
                                        </span>
                                    </div>
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
                                                                to="/categories/$id/edit"
                                                                params={{
                                                                    id: cat.id,
                                                                }}
                                                            />
                                                        }
                                                    >
                                                        <Pencil
                                                            size={16}
                                                            strokeWidth={1.5}
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
                                                            strokeWidth={1.5}
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
                        ))}
                    </TableBody>
                </Table>
            </Frame>
        </div>
    );
}
