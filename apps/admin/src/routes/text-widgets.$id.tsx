import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Pencil } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardPanel, CardTitle } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { getTextWidget } from '../lib/site-content';

export const Route = createFileRoute('/text-widgets/$id')({
    component: TextWidgetDetailPage,
    pendingComponent: PageSkeleton,
});

function TextWidgetDetailPage() {
    const { id } = useParams({ from: '/text-widgets/$id' });
    const widget = getTextWidget(id);

    if (!widget) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/text-widgets"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Page Content
            </Link>

            <Card>
                <CardPanel>
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="min-w-0">
                            <h1 className="text-xl font-bold">
                                {widget.title}
                            </h1>
                            <div className="mt-1 flex items-center gap-2">
                                <Badge
                                    variant={
                                        widget.active ? 'success' : 'secondary'
                                    }
                                >
                                    {widget.active ? 'Active' : 'Inactive'}
                                </Badge>
                                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                                    {widget.key}
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            render={
                                <Link
                                    to="/text-widgets/$id/edit"
                                    params={{ id }}
                                />
                            }
                        >
                            <Pencil size={18} strokeWidth={1.5} />
                            Edit Widget
                        </Button>
                    </div>
                </CardPanel>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Content</CardTitle>
                </CardHeader>
                <CardPanel>
                    {widget.content ? (
                        <p className="whitespace-pre-line text-sm">
                            {widget.content}
                        </p>
                    ) : (
                        <p className="text-sm text-muted-foreground italic">
                            No content.
                        </p>
                    )}
                </CardPanel>
            </Card>
        </div>
    );
}
