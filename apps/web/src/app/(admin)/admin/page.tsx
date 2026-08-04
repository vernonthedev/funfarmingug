import {
    ArrowDownRight,
    ArrowUpRight,
    FileText,
    FolderTree,
    Image,
    Plus,
    Type,
} from 'lucide-react';
import { Badge } from '@/admin/components/ui/badge';
import { Button } from '@/admin/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardPanel,
    CardAction,
} from '@/admin/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/admin/components/ui/table';
import Link from 'next/link';

interface StatCardProps {
    readonly label: string;
    readonly value: string;
    readonly trend: number;
    readonly icon: typeof ArrowUpRight;
    readonly color: string;
}

function StatCard({ label, value, trend, icon: Icon, color }: StatCardProps) {
    const isUp = trend >= 0;
    return (
        <Card>
            <CardPanel>
                <div className="flex items-center gap-4">
                    <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: `var(--color-${color}-500)` }}
                    >
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="text-2xl font-bold leading-none">
                            {value}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                            {label}
                        </div>
                    </div>
                    <div
                        className={`flex items-center gap-1 shrink-0 ${isUp ? 'text-emerald-600' : 'text-destructive'}`}
                    >
                        {isUp ? (
                            <ArrowUpRight size={16} strokeWidth={2} />
                        ) : (
                            <ArrowDownRight size={16} strokeWidth={2} />
                        )}
                        <span className="text-sm font-medium">
                            {Math.abs(trend)}%
                        </span>
                    </div>
                </div>
            </CardPanel>
        </Card>
    );
}

interface RecentRow {
    readonly kind: string;
    readonly label: string;
    readonly meta: string;
    readonly href: string;
}

const recent: RecentRow[] = [
    {
        kind: 'Post',
        label: 'Starting an Organic Vegetable Garden in Uganda',
        meta: 'Jun 15, 2025',
        href: '/posts/post-1',
    },
    {
        kind: 'Post',
        label: 'Best Practices for Raising Healthy Poultry',
        meta: 'May 28, 2025',
        href: '/posts/post-2',
    },
    {
        kind: 'Contact',
        label: 'John Mukasa',
        meta: 'General',
        href: '/contacts/ct-1',
    },
    {
        kind: 'Subscriber',
        label: 'Mary Nakato',
        meta: 'mary@example.com',
        href: '/subscribers/sub-1',
    },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Overview
                    </p>
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div>
                <Button render={<Link href="/admin/posts/new" />}>
                    <Plus size={20} strokeWidth={1.5} className="-ms-1" />
                    New Post
                </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    label="Blog Posts"
                    value="18"
                    trend={12.5}
                    icon={FileText}
                    color="emerald"
                />
                <StatCard
                    label="Categories"
                    value="4"
                    trend={0}
                    icon={FolderTree}
                    color="blue"
                />
                <StatCard
                    label="Gallery Images"
                    value="42"
                    trend={8.1}
                    icon={Image}
                    color="sky"
                />
                <StatCard
                    label="Page Widgets"
                    value="9"
                    trend={2.4}
                    icon={Type}
                    color="orange"
                />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Inquiries &amp; Leads</CardTitle>
                    </CardHeader>
                    <CardPanel className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-3xl font-bold">24</div>
                            <div className="text-sm text-muted-foreground">
                                Contact Messages
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">8</div>
                            <div className="text-sm text-muted-foreground">
                                Quote Requests
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">156</div>
                            <div className="text-sm text-muted-foreground">
                                Subscribers
                            </div>
                        </div>
                    </CardPanel>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardPanel className="flex flex-col gap-2">
                        <Button
                            className="w-full justify-start"
                            render={<Link href="/admin/posts/new" />}
                        >
                            <FileText size={20} strokeWidth={1.5} /> New Post
                        </Button>
                        <Button
                            className="w-full justify-start"
                            render={<Link href="/gallery/new" />}
                        >
                            <Image size={20} strokeWidth={1.5} /> Add Gallery
                            Image
                        </Button>
                        <Button
                            className="w-full justify-start"
                            render={<Link href="/text-widgets/new" />}
                        >
                            <Type size={20} strokeWidth={1.5} /> New Page Widget
                        </Button>
                        <Button
                            className="w-full justify-start"
                            render={<Link href="/categories/new" />}
                        >
                            <FolderTree size={20} strokeWidth={1.5} /> New
                            Category
                        </Button>
                    </CardPanel>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardAction>
                        <Button
                            variant="outline"
                            size="sm"
                            render={<Link href="/admin/posts" />}
                        >
                            View All
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardPanel className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Item</TableHead>
                                <TableHead>Meta</TableHead>
                                <TableHead className="w-10" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recent.map((row) => (
                                <TableRow key={row.label}>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className="font-normal"
                                        >
                                            {row.kind}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {row.label}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {row.meta}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            render={<Link href={row.href} />}
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardPanel>
            </Card>
        </div>
    );
}
