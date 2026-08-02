import {
    createFileRoute,
    Link,
    Outlet,
    useLocation,
} from '@tanstack/react-router';
import { Checkbox } from '@/components/ui/checkbox';
import { Frame } from '@/components/ui/frame';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { PageSkeleton } from '../components/page-skeleton';
import { subscribers } from '../lib/site-content';

export const Route = createFileRoute('/subscribers')({
    component: SubscribersPage,
    pendingComponent: PageSkeleton,
});

function SubscribersPage() {
    const location = useLocation();

    if (location.pathname !== '/subscribers') {
        return <Outlet />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Inquiries &amp; Leads
                    </p>
                    <h1 className="text-2xl font-bold">
                        Newsletter Subscribers
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        People subscribed to the website newsletter.
                    </p>
                </div>
            </div>

            <Frame className="w-full">
                <Table variant="card">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Subscribed</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subscribers.map((sub) => (
                            <TableRow key={sub.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                                            {(sub.name || sub.email)
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>
                                        <span className="font-medium">
                                            {sub.name || '—'}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {sub.email}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {sub.createdAt}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="ghost"
                                        size="icon-xs"
                                        render={
                                            <Link
                                                to="/subscribers/$id"
                                                params={{ id: sub.id }}
                                            />
                                        }
                                    >
                                        <Mail size={16} strokeWidth={1.5} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Frame>
            <div className="text-sm text-muted-foreground">
                Showing <strong>{subscribers.length}</strong> subscribers
            </div>
        </div>
    );
}
