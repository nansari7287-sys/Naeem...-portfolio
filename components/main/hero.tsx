import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => (
  <div className="relative w-full">
    <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 -z-20 h-[780px] w-full rotate-180 object-cover opacity-50">
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#030014]/10 via-[#030014]/25 to-[#030014]" />
    <HeroContent />
  </div>
);
