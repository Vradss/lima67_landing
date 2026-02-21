import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import Logo from '../components/Logo';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-bone">
        <div className="max-w-[800px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] uppercase text-graphite hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={16} weight="bold" />
            Volver
          </Link>
          <Logo variant="dark" size="sm" />
        </div>
      </header>

      <article className="max-w-[800px] mx-auto px-6 py-12 md:py-16">
        <h1 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.02em] text-charcoal mb-10">
          {title}
        </h1>
        <div className="prose prose-lg max-w-none text-graphite leading-relaxed space-y-6 [&>h2]:font-display [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-charcoal [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2">
          {children}
        </div>
      </article>
    </div>
  );
}
