'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
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
import { getTextWidget } from '@/admin/lib/site-content';

export default function TextWidgetEditPage() {
    const { id } = useParams<{ id: string }>();
    const widget = getTextWidget(id);

    if (!widget) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href={`/admin/text-widgets/${id}`}
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
                        render={<Link href={`/admin/text-widgets/${id}`} />}
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
