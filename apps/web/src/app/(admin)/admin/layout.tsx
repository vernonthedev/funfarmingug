'use client';

import type { ReactNode } from 'react';
import { AppShell } from '@/admin/components/app-shell';
import { SearchPalette } from '@/admin/components/search-palette';
import { ThemeProvider } from '@/admin/providers/theme-provider';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <AppShell>{children}</AppShell>
            <SearchPalette />
        </ThemeProvider>
    );
}
