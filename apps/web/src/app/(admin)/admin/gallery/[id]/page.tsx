'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, Pencil } from 'lucide-react';
import { Badge } from '@/admin/components/ui/badge';
import { Button } from '@/admin/components/ui/button';
import { Card, CardHeader } from '@/admin/components/ui/card';
import { getGalleryItem } from '@/admin/lib/site-content';

export default function GalleryItemDetailPage() {
    const { id } = useParams<{ id: string }>();
    const item = getGalleryItem(id);

    if (!item) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/admin/gallery"
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
                        render={<Link href={`/admin/gallery/${id}/edit`} />}
                    >
                        <Pencil size={18} strokeWidth={1.5} />
                        Edit
                    </Button>
                </CardHeader>
            </Card>
        </div>
    );
}
