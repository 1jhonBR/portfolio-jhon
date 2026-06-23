function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 shadow-lg shadow-black/20 backdrop-blur-x1">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-bold text-white">
          João Paz
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-300 sm:flex">
          <a href="#about" className="transition hover:text-violet-400">
            Sobre
          </a>

          <a href="#skills" className="transition hover:text-violet-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-violet-400">
            Projetos
          </a>

          <a href="#contact" className="transition hover:text-violet-400">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
