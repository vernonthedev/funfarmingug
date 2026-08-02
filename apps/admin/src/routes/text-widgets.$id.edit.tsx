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
import { getTextWidget } from '../lib/site-content';

export const Route = createFileRoute('/text-widgets/$id/edit')({
    component: TextWidgetEditPage,
    pendingComponent: PageSkeleton,
});

function TextWidgetEditPage() {
    const { id } = useParams({ from: '/text-widgets/$id/edit' });
    const widget = getTextWidget(id);

    if (!widget) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/text-widgets/$id"
                params={{ id }}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to {widget.title}
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Edit: {widget.title}</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label>Key</Label>
                            <Input defaultValue={widget.key} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input defaultValue={widget.title} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input
                                defaultValue={widget.image || ''}
                                placeholder="https://…"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea
                                defaultValue={widget.content || ''}
                                rows={6}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Status</Label>
                            <Select
                                defaultValue={
                                    widget.active ? 'active' : 'inactive'
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="inactive">
                                        Inactive
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardPanel>
                <CardFooter className="justify-end gap-2">
                    <Button
                        variant="outline"
                        render={<Link to="/text-widgets/$id" params={{ id }} />}
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
