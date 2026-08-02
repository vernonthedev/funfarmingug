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
import { getGalleryItem } from '../lib/site-content';

export const Route = createFileRoute('/gallery/$id/edit')({
    component: GalleryItemEditPage,
    pendingComponent: PageSkeleton,
});

function GalleryItemEditPage() {
    const { id } = useParams({ from: '/gallery/$id/edit' });
    const item = getGalleryItem(id);

    if (!item) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/gallery/$id"
                params={{ id }}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to {item.title}
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Edit: {item.title}</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input defaultValue={item.title} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input
                                defaultValue={item.image || ''}
                                placeholder="https://…"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Category</Label>
                            <Input defaultValue={item.category} />
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button
                        variant="outline"
                        render={<Link to="/gallery/$id" params={{ id }} />}
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
