import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';
import { Button } from '@/admin/components/ui/button';
import {
    Card,
    CardFooter,
    CardHeader,
    CardPanel,
    CardTitle,
} from '@/admin/components/ui/card';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/admin/components/ui/select';
import { Textarea } from '@/admin/components/ui/textarea';

export default function TextWidgetNewPage() {
    return (
        <div className="space-y-6">
            <Link
                href="/admin/text-widgets"
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
                        render={<Link href="/admin/text-widgets" />}
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
