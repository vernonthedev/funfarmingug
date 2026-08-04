import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: {
        default: 'Fun Farming Uganda',
        template: '%s | Fun Farming Uganda',
    },
    description:
        'Fun Farming Uganda - organic farming, farm activities, tours, and fresh farm food. Where Agriculture Meets Adventure!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
