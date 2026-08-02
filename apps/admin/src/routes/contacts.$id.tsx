import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardPanel, CardTitle } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { getContact } from '../lib/site-content';

export const Route = createFileRoute('/contacts/$id')({
    component: ContactDetailPage,
    pendingComponent: PageSkeleton,
});

function ContactDetailPage() {
    const { id } = useParams({ from: '/contacts/$id' });
    const contact = getContact(id);

    if (!contact) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/contacts"
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
