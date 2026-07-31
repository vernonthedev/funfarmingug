import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";
import { AppShell } from "../components/app-shell";
import { Button } from "../components/ui/button";
// import { ConvexProvider } from "../providers/convex-provider";
import { ThemeProvider } from "../providers/theme-provider";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Serva | Restaurant Operating System",
      },
      {
        name: "color-scheme",
        content: "light dark",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center" style={{ minHeight: "60vh" }}>
      <h1 className="text-4xl font-bold text-primary">404</h1>
      <h2 className="mb-2">Page not found</h2>
      <p className="text-muted-foreground mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>Back to dashboard</Button>
      </Link>
    </div>
  ),
});

function RootDocument({ children }: { readonly children?: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Flash-prevention: set dark class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("serva-theme")||"";if(s==="dark"){document.documentElement.classList.add("dark")}else if(s!=="light"&&window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
        <HeadContent />
      </head>
      <body className="relative bg-sidebar font-sans text-foreground antialiased">
      {/* <ConvexProvider> */}
          <ThemeProvider>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
          {/* </ConvexProvider>*/}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
