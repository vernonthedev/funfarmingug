import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Pencil } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { getGalleryItem } from '../lib/site-content';

export const Route = createFileRoute('/gallery/$id')({
    component: GalleryItemDetailPage,
    pendingComponent: PageSkeleton,
});

function GalleryItemDetailPage() {
    const { id } = useParams({ from: '/gallery/$id' });
    const item = getGalleryItem(id);

    if (!item) {
        throw notFound();
    }

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
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-4xl text-primary">
                            {item.image ? '🖼' : '✦'}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <Badge
                                variant="secondary"
                                className="mt-1 font-normal"
                            >
                                {item.category}
                            </Badge>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        render={<Link to="/gallery/$id/edit" params={{ id }} />}
                    >
                        <Pencil size={18} strokeWidth={1.5} />
                        Edit
                    </Button>
                </CardHeader>
            </Card>
        </div>
    );
}
