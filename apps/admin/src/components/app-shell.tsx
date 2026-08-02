'use client';

import { Link, useLocation } from '@tanstack/react-router';
import {
    FileText,
    FolderTree,
    Image,
    LayoutDashboard,
    LifeBuoy,
    LogOut,
    Mail,
    Moon,
    Newspaper,
    Rss,
    Search,
    Settings,
    Sun,
    Type,
} from 'lucide-react';
import type { ReactNode } from 'react';
import {
    CommandDialogTrigger,
    CommandDialogPopup,
    Command,
    CommandDialog,
    CommandInput,
    CommandPanel,
    CommandEmpty,
    CommandList,
    CommandGroup,
    CommandGroupLabel,
    CommandCollection,
    CommandItem,
    CommandSeparator,
    CommandFooter,
} from '@/components/ui/command';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { useTheme } from '@/providers/theme-provider';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from '@/components/ui/sidebar';
import {
    Menu as MenuPrimitive,
    MenuItem,
    MenuPopup,
    MenuSeparator,
    MenuTrigger,
} from '@/components/ui/menu';

export interface NavItem {
    readonly label: string;
    readonly icon: typeof LayoutDashboard;
    readonly to: string;
    readonly badge?: string | number;
}

const mainNav: ReadonlyArray<NavItem> = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
    { label: 'Blog Posts', icon: FileText, to: '/posts' },
    { label: 'Categories', icon: FolderTree, to: '/categories' },
    { label: 'Gallery', icon: Image, to: '/gallery' },
    { label: 'Page Content', icon: Type, to: '/text-widgets' },
    { label: 'Contacts', icon: Mail, to: '/contacts' },
    { label: 'Quote Requests', icon: Rss, to: '/quotes' },
    { label: 'Subscribers', icon: Newspaper, to: '/subscribers' },
    { label: 'Settings', icon: Settings, to: '/settings' },
];

function Logo() {
    return (
        <h1 className="font-bold font-heading text-foreground text-xl leading-none md:text-base lg:text-lg">
            Fun Farming
        </h1>
    );
}

function HeaderActions() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-0.5 md:flex-col lg:flex-row">
            <CommandDialog>
                <CommandDialogTrigger
                    render={
                        <SidebarMenuButton
                            aria-label="Search"
                            className="shrink-0 justify-center p-0 md:max-lg:order-1 lg:size-8"
                        />
                    }
                >
                    <Search />
                </CommandDialogTrigger>
                <CommandDialogPopup>
                    <Command
                        items={[
                            {
                                items: mainNav.map((item) => ({
                                    label: item.label,
                                    value: item.to,
                                })),
                                value: 'Pages',
                            },
                        ]}
                    >
                        <CommandInput placeholder="Search pages…" />
                        <CommandPanel>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandList>
                                {(group: {
                                    value: string;
                                    items: { label: string; value: string }[];
                                }) => (
                                    <CommandGroup
                                        key={group.value}
                                        items={group.items}
                                    >
                                        <CommandGroupLabel>
                                            {group.value}
                                        </CommandGroupLabel>
                                        <CommandCollection>
                                            {(item: {
                                                label: string;
                                                value: string;
                                            }) => (
                                                <CommandItem
                                                    key={item.value}
                                                    value={item.value}
                                                >
                                                    <span className="flex-1">
                                                        {item.label}
                                                    </span>
                                                </CommandItem>
                                            )}
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
            <SidebarMenuButton
                className="shrink-0 justify-center p-0 lg:size-8"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                {theme === 'light' ? (
                    <Moon className="size-4" />
                ) : (
                    <Sun className="size-4" />
                )}
            </SidebarMenuButton>
            <MenuPrimitive>
                <MenuTrigger
                    render={
                        <SidebarMenuButton
                            aria-label="User menu"
                            className="shrink-0 justify-center p-0 lg:size-8"
                        />
                    }
                >
                    <div className="size-6 rounded-full bg-gradient-to-br from-[#0054a6] to-[#1a73e8] lg:size-6" />
                </MenuTrigger>
                <MenuPopup align="start" side="bottom">
                    <div className="px-2 py-1.5">
                        <p className="text-sm font-medium">Restaurant Owner</p>
                        <p className="text-xs text-muted-foreground">
                            owner@servabistro.com
                        </p>
                    </div>
                    <MenuSeparator />
                    <MenuItem render={<Link to="/settings" />}>
                        <Settings className="size-4" />
                        Settings
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem>
                        <LogOut className="size-4" />
                        Sign out
                    </MenuItem>
                </MenuPopup>
            </MenuPrimitive>
        </div>
    );
}

function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex flex-col items-center justify-between gap-0.5 px-1 lg:flex-row">
                    <SidebarMenuButton
                        className="w-fit justify-center md:max-lg:p-0"
                        render={<Link to="/" />}
                    >
                        <Logo />
                    </SidebarMenuButton>
                    <HeaderActions />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-0.5">
                            {mainNav.map((item) => {
                                const isActive = location.pathname === item.to;
                                const Icon = item.icon;
                                return (
                                    <SidebarMenuItem key={item.to}>
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            render={<Link to={item.to} />}
                                            tooltip={item.label}
                                        >
                                            <Icon />
                                            <span className="max-lg:sr-only">
                                                {item.label}
                                            </span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-0.5">
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={<Link to="/settings" />}
                                    tooltip="Help & Support"
                                >
                                    <LifeBuoy />
                                    <span className="max-lg:sr-only">
                                        Help & Support
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

function MobileHeader() {
    return (
        <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-border border-b bg-sidebar px-4 transition-transform md:hidden">
            <Logo />
            <HeaderActions />
        </header>
    );
}

export function AppShell({ children }: { readonly children: ReactNode }) {
    return (
        <SidebarProvider>
            <MobileHeader />
            <AppSidebar />
            <SidebarInset className="max-md:pt-14">
                <div className="mx-auto w-full max-w-6xl">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
