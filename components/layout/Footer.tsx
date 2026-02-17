export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-full border-t border-white/5 bg-black/95 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="inline-block h-10 w-10 rounded bg-gradient-to-br from-green-400 to-green-600" />
          <div>
            <div className="text-sm font-semibold text-white">Edwin Anderson</div>
            <div className="text-xs text-zinc-400">Frontend Developer</div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4">
          <a href="#services" className="text-sm text-zinc-300 hover:text-white">
            Services
          </a>
          <a href="#portfolio" className="text-sm text-zinc-300 hover:text-white">
            Portfolio
          </a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="mt-6 text-center text-xs text-zinc-500">© {year} Edwin Anderson. All rights reserved.</div>
    </footer>
  );
}
