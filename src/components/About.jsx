function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Sobre mim
        </p>

        <h2 className="text-3x1 font-bold tracking-tight text-white sm:text-4x1">
          Desenvolvimento, tecnologia e construção de interfaces.
        </h2>
      </div>

      <div className="space-y-6 text-base leading-8 text-zinc-300">
        <p>
          Sou João Paz, desenvolvedor full stack em formação e estudante de
          Análise e Desenvolvimento de Sistemas.
        </p>

        <p>
          Atualmente estou construindo projetos práticos para fortalecer minha
          base em desenvolvimento web, com foco em React, JavaScript, Tailwind
          CSS, versionamento com Git e organização de código.
        </p>

        <p>
          Minha experiência anterior com design e criação visual entra como um
          diferencial na construção de interfaces mais claras, responsivas e bem
          apresentadas, mas meu foco atual é evoluir como desenvolvedor e criar
          soluções web bem estruturadas.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2x1 border border-white/10 bg-white/5 p-5">
            <strong className="block text-2x1 text-white">ADS</strong>
            <span className="text-sm text-zinc-400">formação em andamento</span>
          </div>

          <div className="rounded-2x1 border border-white/10 bg-white/5 p-5">
            <strong className="block text 2x1 text-white">React</strong>
            <span className="text-sm text-zinc-400">estudo prático</span>
          </div>

          <div className="rounded-2x1 border border-white/10 bg-white/5 p-5">
            <strong className="block text-2x1 text-white">GitHub</strong>
            <span className="text=sm text-zinc-400">projetos versionados</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
