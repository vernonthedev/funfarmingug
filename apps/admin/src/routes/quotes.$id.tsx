import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Calendar, Mail } from 'lucide-react';
import { Card, CardHeader, CardPanel, CardTitle } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { getQuote } from '../lib/site-content';

export const Route = createFileRoute('/quotes/$id')({
    component: QuoteDetailPage,
    pendingComponent: PageSkeleton,
});

function QuoteDetailPage() {
    const { id } = useParams({ from: '/quotes/$id' });
    const quote = getQuote(id);

    if (!quote) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/quotes"
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
