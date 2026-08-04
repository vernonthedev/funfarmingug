import Link from 'next/link';
import { Image as ImageIcon, Pencil, Plus, Trash2 } from 'lucide-react';
import { Badge } from '@/admin/components/ui/badge';
import { Button } from '@/admin/components/ui/button';
import { Checkbox } from '@/admin/components/ui/checkbox';
import { Frame } from '@/admin/components/ui/frame';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/admin/components/ui/table';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/admin/components/ui/tooltip';
import { galleryItems } from '@/admin/lib/site-content';

export default function GalleryPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Media
                    </p>
                    <h1 className="text-2xl font-bold">Gallery</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage photos shown in the website gallery.
                    </p>
                </div>
                <Button render={<Link href="/admin/gallery/new" />}>
                    <Plus size={20} strokeWidth={1.5} />
                    Add Image
                </Button>
            </div>

            <Frame className="w-full">
                <Table variant="card">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox />
                            </TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="w-10" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {galleryItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Link
                                        href={`/admin/gallery/${item.id}`}
                                        className="flex items-center gap-3 no-underline text-foreground hover:underline"
                                    >
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            <ImageIcon
                                                size={16}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <span className="font-medium">
                                            {item.image || '—'}
                                        </span>
                                    </Link>
                                </TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="secondary"
                                        className="font-normal"
                                    >
                                        {item.category}
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
                                                                href={`/admin/gallery/${item.id}/edit`}
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
                Showing <strong>{galleryItems.length}</strong> images
            </div>
        </div>
    );
}
