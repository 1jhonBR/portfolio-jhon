const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/1jhonbr/",
  },
  {
    label: "GitHub",
    href: "https://github.com/1jhonbr",
  },
  {
    label: "E-mail",
    href: "mailto:1jhonbr@gmail.com",
  },
];

const contactInfo = [
  {
    title: "Aberto a oportunidades",
    description:
      "Buscando oportunidades de estágio, júnior ou projetos iniciais em tecnologia.",
  },
  {
    title: "Foco atual",
    description:
      "React, JavaScript, Tailwind CSS, Git, GitHub e estudos em Python.",
  },
  {
    title: "Contato profissional",
    description: "Você pode falar comigo pelo LinkedIn, GitHub ou e-mail!",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Contato
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vamos conversar?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
            Estou em busca de oportunidades para evoluir como desenvolvedor e
            aplicar meus estudos em projetos reais. Você pode entrar em contato
            comigo pelos links abaixo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400 hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Informações rápidas
          </h3>

          <div className="mt-6 space-y-5">
            {contactInfo.map((info) => (
              <div key={info.title}>
                <strong className="block text-sm font-semibold text-violet-400">
                  {info.title}
                </strong>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
