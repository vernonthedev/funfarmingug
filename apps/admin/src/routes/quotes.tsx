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
import { quotes } from '../lib/site-content';

export const Route = createFileRoute('/quotes')({
    component: QuotesPage,
    pendingComponent: PageSkeleton,
});

function QuotesPage() {
    const location = useLocation();

    if (location.pathname !== '/quotes') {
        return <Outlet />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Inquiries &amp; Leads
                    </p>
                    <h1 className="text-2xl font-bold">Quote Requests</h1>
                    <p className="text-sm text-muted-foreground">
                        Quote requests submitted from the website.
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
                            <TableHead>Requester</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Received</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quotes.map((quote) => (
                            <TableRow key={quote.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to="/quotes/$id"
                                        params={{ id: quote.id }}
                                        className="flex items-center gap-2 no-underline text-foreground hover:underline"
                                    >
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                                            {quote.name.charAt(0)}
                                        </div>
                                        <span className="font-medium">
                                            {quote.name}
                                        </span>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {quote.email}
                                </TableCell>
                                <TableCell className="max-w-[280px] truncate text-muted-foreground">
                                    {quote.message}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {quote.createdAt}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="ghost"
                                        size="icon-xs"
                                        render={
                                            <Link
                                                to="/quotes/$id"
                                                params={{ id: quote.id }}
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
                Showing <strong>{quotes.length}</strong> requests
            </div>
        </div>
    );
}
