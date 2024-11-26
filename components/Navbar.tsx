import { ComponentChildren } from "npm:react";

interface NavLinkProps {
  href: string;
  children: ComponentChildren;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <NavLink href="/pages/about/">About</NavLink>
            <NavLink href="/pages/projects/">Projects</NavLink>
            <NavLink href="/pages/publications/">Publications</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
