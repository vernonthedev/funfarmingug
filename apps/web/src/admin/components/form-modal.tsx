import type { ReactNode } from 'react';
import { Button } from '@/admin/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from '@/admin/components/ui/dialog';

export interface FormModalProps {
    readonly id?: string;
    readonly title: string;
    readonly children: ReactNode;
    readonly submitLabel?: string;
    readonly open?: boolean;
    readonly onOpenChange?: (open: boolean) => void;
}

export function FormModal({
    title,
    children,
    submitLabel = 'Save',
    open,
    onOpenChange,
}: FormModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-2">{children}</div>
                <DialogFooter>
                    <DialogClose
                        render={<Button variant="outline">Cancel</Button>}
                    />
                    <Button onClick={() => onOpenChange?.(false)}>
                        {submitLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
