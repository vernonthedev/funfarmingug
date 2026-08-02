import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Plus } from 'lucide-react';
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
import { PageSkeleton } from '../components/page-skeleton';

export const Route = createFileRoute('/categories/new')({
    component: CategoryNewPage,
    pendingComponent: PageSkeleton,
});

function CategoryNewPage() {
    return (
        <div className="space-y-6">
            <Link
                to="/categories"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Categories
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Create New Category</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input placeholder="Category name…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Slug</Label>
                            <Input placeholder="category-slug" />
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button
                        variant="outline"
                        render={<Link to="/categories" />}
                    >
                        Cancel
                    </Button>
                    <Button>
                        <Plus size={18} strokeWidth={1.5} />
                        Create Category
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
