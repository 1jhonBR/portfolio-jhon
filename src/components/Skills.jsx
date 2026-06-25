const skills = [
  {
    category: "Front-end",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Back-end e Dados",
    items: ["Python", "SQL", "Lógica de Programação", "Banco de Dados"],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "Vite"],
  },
  {
    category: "Diferenciais",
    items: [
      "UI Design",
      "Responsividade",
      "Criação visual",
      "Organização Visual",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tecnologias e habilidades em desenvolvimento.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
          Uma seleção das tecnologias, ferramentas e fundamentos que estou
          estudando e aplicando em projetos práticos.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-violet-400/10"
            >
              <h3 className="text-lg font-semibold text-white">
                {skill.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-400/10 bg-violet-400/10 px-4 py-2 text-sm text-violet-200"
                  >
                    {item}
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

export default Skills;
