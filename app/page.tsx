import Image from "next/image";

const skills = ["React.js", "TypeScript", "Tailwind CSS", "Python", "Flutter", "Data Analysis"];

const services = [
  {
    title: "Clean Architecture",
    description:
      "Writing scalable, maintainable code using modern design patterns and industry standards.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating stunning glassmorphism interfaces with a focus on accessibility and user delight.",
  },
  {
    title: "Creative Coding",
    description:
      "Blending mathematics and art to build interactive experiences that tell a story.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0612] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.28),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:26px_26px]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10">
          <nav className="flex flex-wrap items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-[0_10px_40px_rgba(124,58,237,0.15)] backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed] text-sm font-semibold">
                NE
              </span>
              <span className="text-sm font-semibold tracking-wide">
                Natania Ezeigwe
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
              <button className="rounded-full bg-[#7c3aed] px-5 py-2 text-sm font-semibold shadow-[0_12px_30px_rgba(124,58,237,0.35)] transition hover:translate-y-[-1px] hover:bg-[#8b5cf6]">
                Resume
              </button>
            </div>
          </nav>

          <section
            id="about"
            className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="flex flex-col gap-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
                <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
                Open for Collaboration
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Software Engineering &amp;{" "}
                  <span className="text-[#7c3aed]">Frontend</span>
                  <br />
                  Design.
                </h1>
                <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/70 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  Hi, I&apos;m Natania Ezeigwe. I craft immersive digital
                  experiences with a focus on clean code and nostalgic
                  aesthetics. Transforming complex problems into elegant
                  interfaces.
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-sm font-semibold shadow-[0_14px_35px_rgba(124,58,237,0.35)] transition hover:translate-y-[-1px] hover:bg-[#8b5cf6]">
                  View Projects
                  <span className="text-lg transition group-hover:translate-x-1">
                    
                  </span>
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#120a22]/80 text-[#c4b5fd] shadow-[0_10px_30px_rgba(124,58,237,0.25)] lg:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7.75L2 5.5V17l10 5 10-5V5.5l-10 4.25Z" />
                </svg>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1b0f2e] via-[#0f0a17] to-[#05030a] p-4 shadow-[0_25px_60px_rgba(124,58,237,0.2)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_55%)]" />
                <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-black/40">
                  <Image
                    src="/avatar.png"
                    alt="Avatar portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/70">
                    system.status = "rendering"
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
              <span className="flex h-2 w-2 rounded-full bg-[#7c3aed]" />
              natania@portfolio: ~/intro
            </div>
            <div className="mt-4 space-y-3 font-mono text-sm">
              <div className="text-white/60">$ whoami</div>
              <div className="text-white/70">
                Initializing Natania Ezeigwe&apos;s portfolio environment...
              </div>
              <div className="text-white/60">$ ls skills/</div>
              <div className="flex flex-wrap gap-3 text-white/70">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        id="projects"
        className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3"
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7c3aed]/20 text-[#c4b5fd]">
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 bg-[#0a050f]"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-white/60">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7c3aed]/20 text-sm font-semibold text-white">
              NE
            </span>
            <span className="text-white/80">Natania Ezeigwe</span>
          </div>
          <span> 2024 Built with passion &amp; coffee.</span>
          <div className="flex items-center gap-3 text-white/70">
            <button className="rounded-full border border-white/10 p-2 transition hover:border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 3a9 9 0 0 0-3.16 17.44c.5.1.68-.22.68-.48V18.5c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.13-1.5-1.13-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.1.63-1.36-2.22-.25-4.56-1.1-4.56-4.9 0-1.08.39-1.96 1.02-2.65-.1-.25-.44-1.28.1-2.67 0 0 .84-.27 2.76 1.02a9.4 9.4 0 0 1 5.02 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.21 2.42.1 2.67.63.69 1.02 1.57 1.02 2.65 0 3.81-2.35 4.65-4.58 4.9.36.3.68.9.68 1.82v2.7c0 .27.18.58.69.48A9 9 0 0 0 12 3Z" />
              </svg>
            </button>
            <button className="rounded-full border border-white/10 p-2 transition hover:border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3h-15Zm2.25 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM6 18V11.25h1.5V18H6Zm4.5-3.75V18H9v-6.75h1.5v1.2c.4-.7 1.1-1.2 2.1-1.2 1.8 0 2.4 1.2 2.4 2.9V18h-1.5v-3.3c0-.9-.2-1.5-1.1-1.5-1 0-1.4.8-1.4 1.6Z" />
              </svg>
            </button>
            <button className="rounded-full border border-white/10 p-2 transition hover:border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm10.5 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
