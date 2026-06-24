const aboutHighlights = [
  {
    number: "01",
    title: "Formação em tecnologia",
    description:
      "Estudante de Análise e Desenvolvimento de Sistemas, construindo uma base sólida em programação, lógica e desenvolvimento web.",
  },
  {
    number: "02",
    title: "Aprendizado prático",
    description:
      "Desenvolvendo projetos próprios para praticar React, JavaScript, Tailwind CSS, Git e organização de código.",
  },
  {
    number: "03",
    title: "Olhar visual",
    description:
      "Experiência anterior com design e criação visual aplicada à construção de interfaces mais claras, responsivas e bem apresentadas.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Sobre mim
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Desenvolvimento, tecnologia e construção de interfaces.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-300">
            <p>
              Sou João Paz, desenvolvedor full stack em formação e estudante de
              Análise e Desenvolvimento de Sistemas.
            </p>

            <p>
              Atualmente estou construindo projetos práticos para fortalecer
              minha base em desenvolvimento web, com foco em React, JavaScript,
              Tailwind CSS, versionamento com Git e organização de código.
            </p>

            <p>
              Minha experiência anterior com design e criação visual entra como
              diferencial na criação de interfaces mais claras, responsivas e
              bem apresentadas, mas meu foco atual é evoluir como desenvolvedor
              e criar soluções web bem estruturadas.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((highlight) => (
            <div
              key={highlight.number}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-violet-400/10"
            >
              <span className="text-sm font-semibold text-violet-400">
                {highlight.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {highlight.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
