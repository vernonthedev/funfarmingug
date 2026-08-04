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
import { getQuote } from '@/admin/lib/site-content';

export default function QuoteDetailPage() {
    const { id } = useParams<{ id: string }>();
    const quote = getQuote(id);

    if (!quote) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/admin/quotes"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Quote Requests
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Quote request from {quote.name}</CardTitle>
                </CardHeader>
                <CardPanel className="space-y-4">
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Mail size={14} strokeWidth={1.5} /> {quote.email}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} strokeWidth={1.5} />{' '}
                            {quote.createdAt}
                        </span>
                    </div>
                    <div>
                        <div className="mb-1 text-xs font-medium text-muted-foreground">
                            Message
                        </div>
                        <p className="whitespace-pre-line text-sm">
                            {quote.message}
                        </p>
                    </div>
                </CardPanel>
            </Card>
        </div>
    );
}
