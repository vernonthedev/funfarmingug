import { Skeleton } from '@/admin/components/ui/skeleton';

export function PageSkeleton() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-8 w-[300px]" />
                </div>
                <Skeleton className="h-9 w-[120px]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholder, no reordering
                    <div key={i} className="space-y-3">
                        <Skeleton className="h-4 w-[80px]" />
                        <Skeleton className="h-8 w-[120px]" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                ))}
            </div>
            <div className="space-y-3">
                <Skeleton className="h-6 w-[200px]" />
                {Array.from({ length: 5 }).map((_, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholder, no reordering
                    <Skeleton key={i} className="h-12 w-full" />
                ))}
            </div>
        </div>
    );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="w-full">
            {Array.from({ length: rows }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholder, no reordering
                <Skeleton key={i} className="mb-2 h-10 w-full" />
            ))}
        </div>
    );
}
