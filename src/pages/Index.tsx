import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Workflow,
  Sparkles,
  Inbox,
  Bot,
  LineChart,
  ShieldCheck,
  Zap,
  Newspaper,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FitQuizDialog } from "@/components/FitQuizDialog";
import { SignupDialog } from "@/components/SignupDialog";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-mesh">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <Workflow className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold">EngageRx</p>
              <p className="text-[11px] text-muted-foreground">AI for commercial pharma</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link to="/unifysales" className="transition-smooth hover:text-foreground">UnifySales</Link>
            <Link to="/aisa" className="transition-smooth hover:text-foreground">AISA</Link>
            <a href="#press" className="transition-smooth hover:text-foreground">Press</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-gradient-primary shadow-glow"
              onClick={() => setQuizOpen(true)}
            >
              See if it's a fit <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        </div>
        <div className="container py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-5 gap-1.5">
              <Sparkles className="h-3 w-3 text-primary" />
              Trusted by leading pharma and consumer health brands
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              The AI sales enablement{" "}
              <span className="text-gradient">platform for pharma.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Gain insight <span className="text-primary">|</span> Reach more doctors <span className="text-primary">|</span> Achieve maximum potential
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-primary shadow-glow"
                onClick={() => setQuizOpen(true)}
              >
                See if it's a fit <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/aisa">See AISA in action</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Enterprise-grade security</span>
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Live in &lt; 2 weeks</span>
              <span className="flex items-center gap-1.5"><LineChart className="h-3.5 w-3.5" /> Measurable revenue uplift</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two products intro */}
      <section className="border-t border-border/60 bg-card/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="gap-1.5">
              <Sparkles className="h-3 w-3 text-primary" /> Two products. One commercial engine.
            </Badge>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              EngageRx gives commercial pharma teams{" "}
              <span className="font-semibold text-foreground">two AI-native products</span> to{" "}
              <span className="font-semibold text-foreground">consolidate sell-out data automatically</span>{" "}
              and <span className="font-semibold text-foreground">engage every HCP, every day</span>.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <Link to="/unifysales" className="group">
              <Card className="h-full border-primary/20 transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                      <Inbox className="h-4 w-4" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-[10px]">Product 01</Badge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">UnifySales</h3>
                  <p className="mt-1 text-sm font-medium text-primary">Consolidate sell-out data</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Ingest sales reports from every outlet, in every format — get one clean,
                    standardized dataset.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-smooth group-hover:gap-2">
                    Explore UnifySales <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <div className="flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-semibold text-primary shadow-sm md:h-12 md:w-12">
                +
              </div>
            </div>

            <Link to="/aisa" className="group">
              <Card className="h-full border-primary/20 transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                      <Bot className="h-4 w-4" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-[10px]">Product 02</Badge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">AISA</h3>
                  <p className="mt-1 text-sm font-medium text-primary">Engage every HCP</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    An AI chat bot that answers HCPs, shares materials, and helps them place
                    orders — 24/7.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-smooth group-hover:gap-2">
                    Explore AISA <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>


      {/* Press */}
      <section id="press" className="border-t border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="gap-1.5">
              <Newspaper className="h-3 w-3 text-primary" /> In the press
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Recognized as a rising AI startup.
            </h2>
            <p className="mt-3 text-muted-foreground">
              EngageRx was named a winner of Alpha Startups Cohort 64, signalling the rising
              momentum of AI-native commercial pharma tooling.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <PressCard
              source="Digital News Asia"
              title="Fluxion and EngageRx win Alpha Startups Cohort 64, signalling rising momentum of AI startups"
              href="https://www.digitalnewsasia.com/startups/fluxion-and-engagerx-win-alpha-startups-cohort-64-signalling-rising-momentum-ai-startups"
            />
            <PressCard
              source="1337 Ventures"
              title="Fluxion and EngageRx win Alpha Startups Cohort 64"
              href="https://1337.ventures/fluxion-and-engagerx-win-alpha-startups-cohort-64/"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="container py-24">
        <Card className="overflow-hidden border-primary/20 bg-gradient-primary text-primary-foreground shadow-elegant">
          <CardContent className="grid items-center gap-8 p-10 sm:p-14 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to unify your data and unlock every HCP?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Tell us about your setup in 60 seconds — we'll come back with a tailored demo of
                UnifySales and AISA for your portfolio.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-md"
                onClick={() => setQuizOpen(true)}
              >
                See if this is a right fit <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => setSignupOpen(true)}
              >
                Explore the live demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} EngageRx. AI for commercial pharma.</p>
          <div className="flex gap-5">
            <Link to="/unifysales" className="hover:text-foreground">UnifySales</Link>
            <Link to="/aisa" className="hover:text-foreground">AISA</Link>
            <a href="#press" className="hover:text-foreground">Press</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>

      <FitQuizDialog open={quizOpen} onOpenChange={setQuizOpen} />
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />
    </main>
  );
};

const PressCard = ({
  source,
  title,
  href,
}: {
  source: string;
  title: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
  >
    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-primary opacity-0 transition-smooth group-hover:opacity-100" />
    <div className="flex items-center justify-between">
      <Badge variant="secondary" className="gap-1.5">
        <Newspaper className="h-3 w-3 text-primary" /> {source}
      </Badge>
      <ExternalLink className="h-4 w-4 text-muted-foreground transition-smooth group-hover:text-primary" />
    </div>
    <p className="mt-4 text-sm font-medium leading-snug">{title}</p>
    <p className="mt-3 text-xs text-primary opacity-0 transition-smooth group-hover:opacity-100">
      Read the article →
    </p>
  </a>
);

export default Index;
