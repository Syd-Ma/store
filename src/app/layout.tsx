// src/app/layout.tsx
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={montserrat.className}>{children}</body>
        </html>
    );
}