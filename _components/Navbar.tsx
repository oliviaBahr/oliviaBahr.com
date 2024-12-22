export default function Navbar() {
  return (
    <nav className="flex flex-col w-64 p-6">
      <div className="flex flex-col space-y-4">
        <a className="navText" href="/pages/about/">About</a>
        <a className="navText" href="/pages/projects/">Projects</a>
        <a className="navText" href="/pages/publications/">Publications</a>
      </div>
    </nav>
  );
}
