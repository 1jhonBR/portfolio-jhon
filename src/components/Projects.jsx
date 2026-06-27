const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Portfólio desenvolvido com React, Vite e Tailwind CSS para apresentar minha trajetória, habilidades e projetos.",
    tags: ["React", "Vite", "Tailwind CSS", "GitHub"],
    status: "Em desenvolvimento",
    featured: true,
    badge: "Este site!",
  },

  {
    title: "Landing Page GG Overlays",
    description:
      "Landing page comercial criada em WordPress para apresentação e venda de um produto digital para streamers.",
    tags: ["WordPress", "UI/UX", "Copywriting", "Produto Digital"],
    status: "Projeto comercial",
  },

  {
    title: "Projeto Python com API",
    description:
      "Projeto planejado para praticar Python, consumo de API, lógica de programação e tratamento de dados.",
    tags: ["Python", "API", "JSON", "Lógica"],
    status: "Planejado",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Projetos
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Projetos em destaque.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
          Uma seleção de projetos desenvolvidos, comerciais e planejados para
          demonstrar minha evolução prática em tecnologia, produto digital e
          desenvolvimento web.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl border p-6 transition hover:border-violet-400/40 hover:bg-violet-400/10 ${
                project.featured
                  ? "border-violet-400/50 bg-violet-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-violet-400">
                  {project.status}
                </span>

                {project.badge && (
                  <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-400/10 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
