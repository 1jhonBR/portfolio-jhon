function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3x1 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
          Desenvolvedor full stack em formação
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          João Paz
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Uno minha experiência com design, social media e criação visual ao
          desenvolvimento de interfaces modernas, responsivas e bem
          estruturadas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/1jhonBR"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Ver GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/1jhonbr/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400 hover:text-violet-300"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
