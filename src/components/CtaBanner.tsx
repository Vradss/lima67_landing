import { useRef, useEffect } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const quote = el.querySelector('[data-quote]');
    const cta = el.querySelector('[data-cta]');

    if (quote) {
      gsap.fromTo(
        quote,
        { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.3,
          ease: 'power4.out',
          scrollTrigger: { trigger: quote, start: 'top 80%' },
        }
      );
    }

    if (cta) {
      gsap.fromTo(
        cta,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: cta, start: 'top 90%' },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative py-32 md:py-48 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80&auto=format&fit=crop"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <div className="w-10 h-[1px] bg-forest-light mx-auto mb-10" />

        <blockquote data-quote>
          <p
            id="cta-heading"
            className="font-display text-[clamp(1.8rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream mb-4"
          >
            &ldquo;Hagamos que tu próximo evento sea{' '}
            <span className="italic font-light text-forest-light">impecable</span>&rdquo;
          </p>
        </blockquote>

        <p className="text-sm md:text-base font-light text-sand/80 mb-12 max-w-[480px] mx-auto leading-relaxed">
          Cuéntanos tu visión y diseñamos una propuesta a la medida de tu evento.
        </p>

        <div data-cta>
          <a
            href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-teal text-cream text-[13px] font-medium tracking-[0.08em] uppercase px-10 py-4 rounded-full hover:bg-teal-dark transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,97,112,0.45)]"
          >
            <WhatsappLogo
              size={18}
              weight="fill"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Habla con un experto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
