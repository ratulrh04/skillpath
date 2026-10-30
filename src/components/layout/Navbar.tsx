import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          SkillPath
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/goals" className="hover:text-gray-900">
            Goals
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;