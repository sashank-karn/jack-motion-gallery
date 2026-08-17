import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./Buttons";

const U = (f: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${f}&w=1280&q=85`;

const projects = [
  {
    n: "01",
    name: "Nextlevel Studio",
    category: "Client",
    col1a: U("hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png"),
    col1b: U("hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png"),
    col2: U("hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png"),
  },
  {
    n: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    col1a: U("hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png"),
    col1b: U("hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png"),
    col2: U("hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png"),
  },
  {
    n: "03",
    name: "Solaris Digital",
    category: "Client",
    col1a: U("hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png"),
    col1b: U("hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png"),
    col2: U("hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png"),
  },
];

const RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale],
  );

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px`, backgroundColor: "#0C0C0C" }}
        className={`relative w-full border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-none text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-6 flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1a}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1b}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`h-full w-full object-cover ${RADIUS}`}
              style={{ minHeight: "clamp(302px, 38vw, 586px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      {projects.map((p, i) => (
        <ProjectCard
          key={p.n}
          project={p}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
