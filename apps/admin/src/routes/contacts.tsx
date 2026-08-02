import {
    createFileRoute,
    Link,
    Outlet,
    useLocation,
} from '@tanstack/react-router';
import { Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Frame } from '@/components/ui/frame';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { PageSkeleton } from '../components/page-skeleton';
import { contacts } from '../lib/site-content';

export const Route = createFileRoute('/contacts')({
    component: ContactsPage,
    pendingComponent: PageSkeleton,
});

function ContactsPage() {
    const location = useLocation();

    if (location.pathname !== '/contacts') {
        return <Outlet />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Inquiries &amp; Leads
                    </p>
                    <h1 className="text-2xl font-bold">Contact Messages</h1>
                    <p className="text-sm text-muted-foreground">
                        Messages submitted through the website contact form.
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
                            <TableHead>Contact</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Received</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to="/contacts/$id"
                                        params={{ id: contact.id }}
                                        className="flex items-center gap-2 no-underline text-foreground hover:underline"
                                    >
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                                            {contact.name.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-medium">
                                                {contact.name}
                                            </div>
                                            <div className="truncate text-xs text-muted-foreground">
                                                {contact.email}
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant="secondary"
                                        className="font-normal"
                                    >
                                        {contact.inquireType || 'General'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="max-w-[280px] truncate text-muted-foreground">
                                    {contact.message}
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {contact.createdAt}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="ghost"
                                        size="icon-xs"
                                        render={
                                            <Link
                                                to="/contacts/$id"
                                                params={{ id: contact.id }}
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
                Showing <strong>{contacts.length}</strong> messages
            </div>
        </div>
    );
}
