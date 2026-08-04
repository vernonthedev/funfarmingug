import { Filter } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/admin/components/ui/button';
import {
    Drawer,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerPanel,
    DrawerPopup,
    DrawerTitle,
    DrawerTrigger,
} from '@/admin/components/ui/drawer';

export interface FilterDrawerProps {
    readonly id?: string;
    readonly title?: string;
    readonly triggerLabel?: string;
    readonly children: ReactNode;
}

export function FilterDrawer({
    title = 'Filters',
    triggerLabel = 'Filters',
    children,
}: FilterDrawerProps) {
    return (
        <Drawer position="right">
            <DrawerTrigger
                render={
                    <Button variant="outline">
                        <Filter className="size-4" />
                        {triggerLabel}
                    </Button>
                }
            />
            <DrawerPopup variant="inset">
                <DrawerHeader>
                    <DrawerTitle className="flex items-center gap-2">
                        <Filter className="size-4" />
                        {title}
                    </DrawerTitle>
                    <DrawerDescription>
                        Filter the results below.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerPanel>{children}</DrawerPanel>
                <DrawerFooter variant="bare">
                    <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                            Reset
                        </Button>
                        <Button className="flex-1">Apply</Button>
                    </div>
                </DrawerFooter>
            </DrawerPopup>
        </Drawer>
    );
}
