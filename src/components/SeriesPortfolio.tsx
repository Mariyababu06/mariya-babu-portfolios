import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountUp from './CountUp';
import Reveal from './Reveal';
import cvAsset from '../assets/mariya-babu-cv.pdf.asset.json';
import {
  certifications,
  experience,
  profile,
  projects,
  skillGenres,
} from '../data/portfolio';
import ContactSection from './ContactSection';
import Footer from './Footer';

const navItems = [
  { href: '#story', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#originals', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const projectFilters = [
  { label: 'All work', genre: 'all' },
  { label: 'Customer analytics', genre: 'CUSTOMER ANALYTICS' },
  { label: 'BI & reporting', genre: 'BUSINESS INTELLIGENCE' },
  { label: 'Predictive analytics', genre: 'PREDICTIVE ANALYTICS' },
] as const;

const SeriesPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]['genre']>('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
      const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= 180);
      const currentSection = passedSections[passedSections.length - 1];
      setActiveSection(currentSection ? `#${currentSection.id}` : '#home');
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.genre === activeFilter);

  return (
    <div className="series-portfolio min-h-screen overflow-hidden bg-ink text-bone">
      <div
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress * 100)}
        className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"
      >
        <div className="h-full origin-left bg-crimson transition-transform duration-150" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <header className="sticky top-0 z-40 border-b border-line/10 bg-ink/90 backdrop-blur-lg">
        <nav aria-label="Main navigation" className="gutter mx-auto flex min-h-16 max-w-screen-2xl items-center justify-between gap-6">
          <a href="#home" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="avatar-ring inline-block h-9 w-9">
              <img src="/mariya-babu-profile.png" alt="" aria-hidden="true" className="h-full w-full" width={36} height={36} loading="lazy" />
            </span>
            <span className="font-display text-xl uppercase tracking-wide text-bone">
              Mariya Babu<span className="ml-2 text-crimson">/</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                aria-current={activeSection === item.href ? 'location' : undefined}
                className={`text-sm transition-colors hover:text-bone ${activeSection === item.href ? 'text-crimson-2' : 'text-mist'}`}
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-sm bg-crimson px-4 text-primary-foreground hover:bg-crimson-2">
              <a href={cvAsset.url} download="Mariya-Babu-CV.pdf" aria-label="Download Mariya Babu’s CV">
                <Download aria-hidden="true" /> CV
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="gutter border-t border-line/10 py-3 md:hidden">
            <div className="mx-auto flex max-w-screen-2xl flex-col">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => { setActiveSection(item.href); setMenuOpen(false); }} className="border-b border-line/5 py-3 text-sm text-mist hover:text-bone">
                  {item.label}
                </a>
              ))}
              <a href={cvAsset.url} download="Mariya-Babu-CV.pdf" className="py-3 text-sm font-semibold text-crimson-2">
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="billboard relative isolate flex min-h-[700px] items-end overflow-hidden md:min-h-[760px]">
          <img
            src="/mariya-babu-profile.png"
            alt="Portrait of Mariya Babu"
            fetchPriority="high"
            className="billboard-photo absolute inset-y-0 right-0 h-full w-full object-cover object-[center_18%] md:w-[67%] md:object-[center_16%]"
          />
          <div aria-hidden="true" className="billboard-shade absolute inset-0" />
          <div className="gutter relative z-10 mx-auto w-full max-w-screen-2xl pb-12 pt-80 md:pb-20 md:pt-36">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-crimson-2">
                <span className="h-2 w-2 rounded-full bg-crimson" /> Available immediately · Data & BI roles
              </p>
              <h1 className="font-display text-6xl uppercase leading-[0.92] text-bone sm:text-7xl md:text-8xl">
                Mariya<br />Babu<span className="text-crimson">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium text-bone sm:text-xl">
                Data Analyst <span className="text-crimson-2">/</span> Business Intelligence Analyst
              </p>
              <p className="mt-4 max-w-lg text-base leading-7 text-mist">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-sm bg-crimson px-6 text-primary-foreground hover:bg-crimson-2">
                  <a href="#originals">Explore my work <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-sm border-line/30 bg-ink/30 px-6 text-bone hover:bg-ink-3 hover:text-bone">
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs uppercase tracking-wider text-smoke">
                <ArrowDown aria-hidden="true" className="h-4 w-4" /> Guntur, Andhra Pradesh · B.Tech IT · 2022–2026
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Portfolio highlights" className="border-y border-line/10 bg-ink-2">
          <div className="gutter mx-auto grid max-w-screen-2xl grid-cols-2 divide-x divide-line/10 py-6 md:grid-cols-4">
            {[
              ['824K+', 'Transactions analyzed'],
              ['5,878', 'Customers segmented'],
              ['3', 'Internship experiences'],
              ['0.88', 'Student model R²'],
            ].map(([metric, caption]) => (
              <div key={caption} className="min-w-0 px-4 py-3 first:pl-0 md:px-7">
                <p className="font-display text-3xl text-bone">{metric}</p>
                <p className="mt-1 text-xs text-smoke sm:text-sm">{caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="story" className="gutter scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="eyebrow">01 / The pilot</p>
              <h2 className="section-heading mt-4">A clear story,<br />told by data.</h2>
            </div>
            <div className="max-w-3xl self-end">
              <p className="text-xl leading-9 text-bone sm:text-2xl sm:leading-10">
                I’m an Information Technology graduate who enjoys making business data easier to understand and act on.
              </p>
              <p className="mt-6 text-base leading-8 text-mist">
                From writing analytical SQL and exploring large datasets to shaping Power BI dashboards, I focus on the question behind the numbers. My project work also includes practical machine-learning models—from customer segmentation to performance prediction.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line/10 pt-5 text-sm text-mist">
                <span>{profile.education}</span>
                <span>{profile.location}</span>
                <span className="text-crimson-2">{profile.availability}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-20 border-y border-line/10 bg-ink-2 py-24 md:py-28">
          <div className="gutter mx-auto max-w-screen-2xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">02 / My journey</p>
                <h2 className="section-heading mt-4">Experience, in episodes.</h2>
              </div>
              <span className="text-sm text-smoke">Three chapters in data & machine learning</span>
            </div>
            <div className="divide-y divide-line/10 border-y border-line/10">
              {experience.map((entry, index) => (
                <article key={entry.episode} className="grid gap-4 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-7">
                  <span className="font-display text-2xl text-crimson-2">S01:{entry.episode}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-bone">{entry.role}</h3>
                    <p className="mt-1 text-sm font-medium text-crimson-2">{entry.company}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-mist">{entry.detail}</p>
                  </div>
                  <span className="text-sm text-smoke sm:pt-1">{entry.period}</span>
                  {index === experience.length - 1 && (
                    <p className="sm:col-start-2 text-xs text-smoke">Earlier internship chapter</p>
                  )}
                </article>
              ))}
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="eyebrow">The origin story</p>
                <h3 className="mt-3 text-xl font-semibold">B.Tech in Information Technology</h3>
                <p className="mt-2 text-sm text-mist">KKR & KSR Institute of Technology & Sciences · 2022–2026</p>
                <p className="mt-2 text-sm text-smoke">CGPA 7.21</p>
              </div>
              <div>
                <p className="eyebrow">Featured credentials</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="border-l-2 border-crimson/70 py-1 pl-3 text-sm leading-6 text-mist">{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="originals" className="gutter scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">03 / Selected work</p>
                <h2 className="section-heading mt-4">The data originals.</h2>
              </div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-bone transition-colors hover:text-crimson-2">
                More on GitHub <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2" aria-label="Filter projects">
                {projectFilters.map((filter) => (
                  <Button
                    key={filter.genre}
                    type="button"
                    size="sm"
                    variant={activeFilter === filter.genre ? 'default' : 'outline'}
                    aria-pressed={activeFilter === filter.genre}
                    onClick={() => setActiveFilter(filter.genre)}
                    className={`rounded-sm px-3 text-xs ${activeFilter === filter.genre ? 'bg-crimson text-primary-foreground hover:bg-crimson-2' : 'border-line/20 bg-transparent text-mist hover:bg-ink-3 hover:text-bone'}`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
              <p className="text-xs uppercase text-smoke" aria-live="polite">
                {String(visibleProjects.length).padStart(2, '0')} {visibleProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <div className={`grid gap-px border border-line/10 bg-line/10 ${visibleProjects.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'}`}>
              {visibleProjects.map((project) => (
                <article key={project.episode} className="flex min-h-[360px] flex-col bg-ink p-6 transition-colors hover:bg-ink-3 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl text-crimson/80">{project.episode}</span>
                    <span className="text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-smoke">{project.genre}</span>
                  </div>
                  <div className="mt-10 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-crimson-2">{project.signal}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-bone">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-mist">{project.description}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-line/10 pt-4">
                    {project.tools.map((tool) => <span key={tool} className="text-xs text-smoke">{tool}</span>)}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs text-smoke">Selected project</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 border-y border-line/10 bg-ink-2 py-24 md:py-28">
          <div className="gutter mx-auto max-w-screen-2xl">
            <p className="eyebrow">04 / Skill genres</p>
            <div className="mb-12 mt-4 flex flex-wrap items-end justify-between gap-5">
              <h2 className="section-heading">Tools of the trade.</h2>
              <p className="max-w-md text-sm leading-6 text-mist">A practical toolkit for finding the signal, explaining it, and making it useful.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {skillGenres.map((genre, index) => (
                <article key={genre.name} className="border-t-2 border-crimson/70 pt-5">
                  <p className="font-display text-2xl text-smoke">VOL. 0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-bone">{genre.name}</h3>
                  <p className="mt-2 text-sm text-mist">{genre.detail}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                    {genre.skills.map((skill) => <li key={skill} className="text-sm text-bone">{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gutter py-16">
          <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-6 border-b border-line/10 pb-12 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">The complete story</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-bone">Mariya’s CV</h2>
            </div>
            <Button asChild size="lg" className="w-fit rounded-sm bg-crimson px-6 text-primary-foreground hover:bg-crimson-2">
              <a href={cvAsset.url} download="Mariya-Babu-CV.pdf"><Download aria-hidden="true" /> Download CV</a>
            </Button>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeriesPortfolio;