'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
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
import { getCategory } from '@/admin/lib/site-content';

export default function CategoryEditPage() {
    const { id } = useParams<{ id: string }>();
    const cat = getCategory(id);

    if (!cat) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/admin/categories"
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
                        render={<Link href="/admin/categories" />}
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
