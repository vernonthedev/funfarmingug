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
import { PageSkeleton } from '../components/page-skeleton';
import { getCategory } from '../lib/site-content';

export const Route = createFileRoute('/categories/$id/edit')({
    component: CategoryEditPage,
    pendingComponent: PageSkeleton,
});

function CategoryEditPage() {
    const { id } = useParams({ from: '/categories/$id/edit' });
    const cat = getCategory(id);

    if (!cat) {
        throw notFound();
    }

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
                    <CardTitle>Edit: {cat.title}</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input defaultValue={cat.title} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Slug</Label>
                            <Input defaultValue={cat.slug} />
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
                        <Save size={18} strokeWidth={1.5} />
                        Save Changes
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
