import {
    createFileRoute,
    Link,
    Outlet,
    useLocation,
} from '@tanstack/react-router';
import { Eye, EyeOff, Pencil, Plus, Type, Trash2 } from 'lucide-react';
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
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { PageSkeleton } from '../components/page-skeleton';
import { textWidgets } from '../lib/site-content';

export const Route = createFileRoute('/text-widgets')({
    component: TextWidgetsPage,
    pendingComponent: PageSkeleton,
});

function TextWidgetsPage() {
    const location = useLocation();

    if (location.pathname !== '/text-widgets') {
        return <Outlet />;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Content
                    </p>
                    <h1 className="text-2xl font-bold">Page Content</h1>
                    <p className="text-sm text-muted-foreground">
                        Edit reusable text widgets used across site pages.
                    </p>
                </div>
                <Button render={<Link to="/text-widgets/new" />}>
                    <Plus size={20} strokeWidth={1.5} />
                    New Widget
                </Button>
            </div>

            <Frame className="w-full">
                <Table variant="card">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Widget</TableHead>
                            <TableHead>Key</TableHead>
                            <TableHead>Content</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {textWidgets.map((widget) => (
                            <TableRow
                                key={widget.id}
                                className={!widget.active ? 'opacity-70' : ''}
                            >
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Link
                                        to="/text-widgets/$id"
                                        params={{ id: widget.id }}
                                        className="flex items-center gap-3 no-underline text-foreground hover:underline"
                                    >
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                                            <Type size={16} strokeWidth={1.5} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-medium">
                                                {widget.title}
                                            </div>
                                            <div className="truncate text-xs text-muted-foreground">
                                                {widget.key}
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                                        {widget.key}
                                    </span>
                                </TableCell>
                                <TableCell className="max-w-[320px] truncate text-muted-foreground">
                                    {widget.content}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            widget.active
                                                ? 'success'
                                                : 'secondary'
                                        }
                                    >
                                        {widget.active ? (
                                            <>
                                                <Eye
                                                    size={14}
                                                    strokeWidth={2}
                                                />{' '}
                                                Active
                                            </>
                                        ) : (
                                            <>
                                                <EyeOff
                                                    size={14}
                                                    strokeWidth={2}
                                                />{' '}
                                                Inactive
                                            </>
                                        )}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <Tooltip>
                                            <TooltipTrigger
                                                render={
                                                    <Button
                                                        variant="ghost"
                                                        size="icon-xs"
                                                        render={
                                                            <Link
                                                                to="/text-widgets/$id"
                                                                params={{
                                                                    id: widget.id,
                                                                }}
                                                            />
                                                        }
                                                    >
                                                        <Pencil
                                                            size={16}
                                                            strokeWidth={1.5}
                                                        />
                                                    </Button>
                                                }
                                            />
                                            <TooltipContent>
                                                Edit
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger
                                                render={
                                                    <Button
                                                        variant="ghost"
                                                        size="icon-xs"
                                                        className="text-destructive hover:text-destructive"
                                                    >
                                                        <Trash2
                                                            size={16}
                                                            strokeWidth={1.5}
                                                        />
                                                    </Button>
                                                }
                                            />
                                            <TooltipContent>
                                                Delete
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Frame>
            <div className="text-sm text-muted-foreground">
                Showing <strong>{textWidgets.length}</strong> widgets
            </div>
        </div>
    );
}
