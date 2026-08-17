import { FadeIn } from "./FadeIn";

const services = [
  {
    n: "01",
    name: "3D Modeling",
    d: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    n: "02",
    name: "Rendering",
    d: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    n: "03",
    name: "Motion Design",
    d: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    n: "04",
    name: "Branding",
    d: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    n: "05",
    name: "Web Design",
    d: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.1}
            className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="font-black leading-none"
              style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-3 pt-1">
              <h3
                className="font-medium uppercase leading-none"
                style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {s.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{
                  color: "#0C0C0C",
                  opacity: 0.6,
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                }}
              >
                {s.d}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
