'use client';

import { useRouter } from 'next/navigation';
import {
    FileText,
    FolderTree,
    Image,
    LayoutDashboard,
    Mail,
    Newspaper,
    Rss,
    SearchIcon,
    Settings,
    Type,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import {
    Command,
    CommandCollection,
    CommandDialog,
    CommandDialogPopup,
    CommandDialogTrigger,
    CommandEmpty,
    CommandFooter,
    CommandGroup,
    CommandGroupLabel,
    CommandInput,
    CommandItem,
    CommandList,
    CommandPanel,
    CommandSeparator,
} from '@/admin/components/ui/command';
import { Kbd, KbdGroup } from '@/admin/components/ui/kbd';

interface PageItem {
    value: string;
    label: string;
    icon: typeof LayoutDashboard;
}

const pageItems: PageItem[] = [
    { label: 'Dashboard', value: '/', icon: LayoutDashboard },
    { label: 'Blog Posts', value: '/posts', icon: FileText },
    { label: 'Categories', value: '/categories', icon: FolderTree },
    { label: 'Gallery', value: '/gallery', icon: Image },
    { label: 'Page Content', value: '/text-widgets', icon: Type },
    { label: 'Contacts', value: '/contacts', icon: Mail },
    { label: 'Quote Requests', value: '/quotes', icon: Rss },
    { label: 'Subscribers', value: '/subscribers', icon: Newspaper },
    { label: 'Settings', value: '/settings', icon: Settings },
];

const searchGroups = [{ items: pageItems, value: 'Pages' }];

export function SearchPalette() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen(true);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const handleSelect = useCallback(
        (item: PageItem) => {
            setOpen(false);
            router.push(`/admin${item.value === '/' ? '' : item.value}`);
        },
        [router]
    );

    return (
        <CommandDialog onOpenChange={setOpen} open={open}>
            <CommandDialogTrigger
                render={
                    <button
                        type="button"
                        className="relative flex flex-1 items-center gap-2 rounded-lg border border-input bg-background px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                        <SearchIcon className="size-4 shrink-0" />
                        <span className="flex-1">Search pages…</span>
                        <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
                    </button>
                }
            />
            <CommandDialogPopup>
                <Command items={searchGroups}>
                    <CommandInput placeholder="Search pages…" />
                    <CommandPanel>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandList>
                            {(group: (typeof searchGroups)[number]) => (
                                <CommandGroup
                                    key={group.value}
                                    items={group.items}
                                >
                                    <CommandGroupLabel>
                                        {group.value}
                                    </CommandGroupLabel>
                                    <CommandCollection>
                                        {(item: PageItem) => {
                                            const Icon = item.icon;
                                            return (
                                                <CommandItem
                                                    key={item.value}
                                                    onClick={() =>
                                                        handleSelect(item)
                                                    }
                                                    value={item.value}
                                                >
                                                    <Icon className="size-4" />
                                                    <span>{item.label}</span>
                                                </CommandItem>
                                            );
                                        }}
                                    </CommandCollection>
                                    <CommandSeparator />
                                </CommandGroup>
                            )}
                        </CommandList>
                    </CommandPanel>
                    <CommandFooter>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <KbdGroup>
                                    <Kbd>
                                        <span>↑</span>
                                    </Kbd>
                                    <Kbd>
                                        <span>↓</span>
                                    </Kbd>
                                </KbdGroup>
                                <span>Navigate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Kbd>
                                    <span>↵</span>
                                </Kbd>
                                <span>Open</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Kbd>Esc</Kbd>
                            <span>Close</span>
                        </div>
                    </CommandFooter>
                </Command>
            </CommandDialogPopup>
        </CommandDialog>
    );
}
