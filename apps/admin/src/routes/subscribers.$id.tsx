import {
    createFileRoute,
    Link,
    notFound,
    useParams,
} from '@tanstack/react-router';
import { ArrowLeft, Calendar, Mail } from 'lucide-react';
import { Card, CardHeader, CardPanel, CardTitle } from '@/components/ui/card';
import { PageSkeleton } from '../components/page-skeleton';
import { getSubscriber } from '../lib/site-content';

export const Route = createFileRoute('/subscribers/$id')({
    component: SubscriberDetailPage,
    pendingComponent: PageSkeleton,
});

function SubscriberDetailPage() {
    const { id } = useParams({ from: '/subscribers/$id' });
    const sub = getSubscriber(id);

    if (!sub) {
        throw notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                to="/subscribers"
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
