import type { ReactNode } from 'react';
import '@/admin/styles.css';

export default function AdminGroupLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <script
                // biome-ignore lint/security/noDangerouslySetInnerHtml: static theme script, no user input
                dangerouslySetInnerHTML={{
                    __html: `(function(){try{var s=localStorage.getItem("serva-theme")||"";if(s==="dark"){document.documentElement.classList.add("dark")}else if(s!=="light"&&window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
                }}
            />
            <div className="relative bg-sidebar font-sans text-foreground antialiased">
                {children}
            </div>
        </>
    );
}
