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

export const Route = createFileRoute('/gallery/new')({
    component: GalleryItemNewPage,
    pendingComponent: PageSkeleton,
});

function GalleryItemNewPage() {
    return (
        <div className="space-y-6">
            <Link
                to="/gallery"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Gallery
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Add New Image</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input placeholder="Image title…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input placeholder="https://…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Category</Label>
                            <Input placeholder="e.g. Crops, Livestock, Facilities" />
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button variant="outline" render={<Link to="/gallery" />}>
                        Cancel
                    </Button>
                    <Button>
                        <Plus size={18} strokeWidth={1.5} />
                        Add Image
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
