import { TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogClose,
} from '@/admin/components/ui/alert-dialog';
import { Button } from '@/admin/components/ui/button';

export interface ConfirmModalProps {
    readonly id?: string;
    readonly title: string;
    readonly children: ReactNode;
    readonly confirmLabel?: string;
    readonly confirmColor?: 'default' | 'destructive';
    readonly onConfirm?: () => void;
}

export function ConfirmModal({
    title,
    children,
    confirmLabel = 'Delete',
    confirmColor = 'destructive',
    onConfirm,
}: ConfirmModalProps) {
    return (
        <AlertDialog>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                            <TriangleAlert className="size-6" />
                        </div>
                    </div>
                    <AlertDialogTitle className="text-center">
                        {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        {children}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogClose
                        render={<Button variant="outline">Cancel</Button>}
                    />
                    <Button variant={confirmColor} onClick={onConfirm}>
                        {confirmLabel}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
