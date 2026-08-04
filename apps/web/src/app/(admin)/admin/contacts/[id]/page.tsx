'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Badge } from '@/admin/components/ui/badge';
import {
    Card,
    CardHeader,
    CardPanel,
    CardTitle,
} from '@/admin/components/ui/card';
import { getContact } from '@/admin/lib/site-content';

export default function ContactDetailPage() {
    const { id } = useParams<{ id: string }>();
    const contact = getContact(id);

    if (!contact) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/admin/contacts"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
            >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Back to Contact Messages
            </Link>

            <Card>
                <CardHeader>
                    <CardTitle>Message from {contact.name}</CardTitle>
                </CardHeader>
                <CardPanel className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="font-normal">
                            {contact.inquireType || 'General'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            {contact.createdAt}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Mail size={14} strokeWidth={1.5} /> {contact.email}
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={14} strokeWidth={1.5} />{' '}
                            {contact.phoneNumber}
                        </span>
                    </div>
                    <div>
                        <div className="mb-1 text-xs font-medium text-muted-foreground">
                            Message
                        </div>
                        <p className="whitespace-pre-line text-sm">
                            {contact.message}
                        </p>
                    </div>
                </CardPanel>
            </Card>
        </div>
    );
}
