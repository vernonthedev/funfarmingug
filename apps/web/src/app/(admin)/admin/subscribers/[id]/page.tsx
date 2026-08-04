'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Mail } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardPanel,
    CardTitle,
} from '@/admin/components/ui/card';
import { getSubscriber } from '@/admin/lib/site-content';

export default function SubscriberDetailPage() {
    const { id } = useParams<{ id: string }>();
    const sub = getSubscriber(id);

    if (!sub) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/admin/subscribers"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Subscribers
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Subscriber details</CardTitle>
                </CardHeader>
                <CardPanel className="space-y-3">
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="text-muted-foreground">Name</div>
                        <div className="font-medium">{sub.name || '—'}</div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="text-muted-foreground">Email</div>
                        <div className="flex items-center gap-2 font-medium">
                            <Mail size={14} strokeWidth={1.5} /> {sub.email}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="text-muted-foreground">Subscribed</div>
                        <div className="flex items-center gap-2 font-medium">
                            <Calendar size={14} strokeWidth={1.5} />{' '}
                            {sub.createdAt}
                        </div>
                    </div>
                </CardPanel>
            </Card>
        </div>
    );
}
