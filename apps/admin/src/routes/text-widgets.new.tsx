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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PageSkeleton } from '../components/page-skeleton';

export const Route = createFileRoute('/text-widgets/new')({
    component: TextWidgetNewPage,
    pendingComponent: PageSkeleton,
});

function TextWidgetNewPage() {
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
                <CardHeader>
                    <CardTitle>Create New Widget</CardTitle>
                </CardHeader>
                <CardPanel>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label>Key</Label>
                            <Input placeholder="e.g. about-intro" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input placeholder="Widget title…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input placeholder="https://…" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea placeholder="Widget content…" rows={6} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Status</Label>
                            <Select defaultValue="active">
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
                        render={<Link to="/text-widgets" />}
                    >
                        Cancel
                    </Button>
                    <Button>
                        <Plus size={18} strokeWidth={1.5} />
                        Create Widget
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
