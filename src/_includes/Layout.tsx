import type { ComponentChildren } from "npm:react";
import Navbar from "../_components/Navbar.tsx";
import FancyName from "../_components/FancyName.tsx";

export interface LayoutProps {
  title: string;
  children: ComponentChildren;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-screen">
        <div className="min-h-screen grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] divide-gray-300 divide-y divide-x">
          <div className="flex items-center p-4">
            <FancyName />
          </div>
          <div className="flex items-center justify-center p-4">
            <h1 className="text-6xl rainbow-hover font-semibold">{title}</h1>
          </div>

          <Navbar />
          <main className="px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
