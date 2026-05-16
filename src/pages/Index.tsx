import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Workflow,
  Sparkles,
  Inbox,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Bot,
  Clock,
  Users,
  Quote,
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
            <a href="#unifysales" className="transition-smooth hover:text-foreground">UnifySales</a>
            <a href="#aisa" className="transition-smooth hover:text-foreground">AISA</a>
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
              Trusted by leading consumer healthcare brands
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Turn fragmented field data into{" "}
              <span className="text-gradient">commercial advantage.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              EngageRx gives commercial pharma teams two AI-native products to consolidate sell-out
              data automatically and engage every HCP, every day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-primary shadow-glow"
                onClick={() => setQuizOpen(true)}
              >
                See if this is a right fit for your team <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#aisa">See AISA in action</a>
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

      {/* Product 1: UnifySales */}
      <section id="unifysales" className="border-t border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="gap-1.5">
                <Inbox className="h-3 w-3 text-primary" />
                Product 01 · UnifySales
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Consolidate sell-out data automatically and seamlessly.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Stop drowning in spreadsheets. UnifySales ingests sales reports from every outlet,
                in every format, and delivers one clean, standardized dataset your team can trust.
              </p>

              <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" />
                  <div>
                    <p className="text-sm font-medium">The challenge today</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Manual hours consolidating CSVs, XLSX and PDF reports — error-prone, slow,
                      and leaving leadership blind to what's actually selling.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Email-in ingestion from any POS or distributor format",
                  "AI column mapping unifies SKUs across thousands of outlets",
                  "One-click exports per distributor, brand, region, or rep",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="bg-gradient-primary shadow-glow"
                  onClick={() => setQuizOpen(true)}
                >
                  See if this is a right fit for your team <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Visual */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {["CSV", "XLSX", "PDF"].map((f) => (
                    <div key={f} className="rounded-lg border border-border bg-background p-3">
                      <p className="font-mono text-muted-foreground">{f}</p>
                      <p className="mt-1 font-medium">Raw report</p>
                      <p className="mt-2 truncate text-muted-foreground">item_code · qty_sold · price</p>
                    </div>
                  ))}
                </div>
                <div className="my-5 flex items-center justify-center gap-2 text-xs text-primary">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
                  <span className="flex items-center gap-1.5 font-medium"><Sparkles className="h-3 w-3" /> Unified by AI</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
                </div>
                <div className="rounded-lg border border-primary/20 bg-accent/40 p-4">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span>Standardized output</span>
                    <Badge variant="secondary" className="font-mono">1 schema</Badge>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2 text-[11px] font-mono text-muted-foreground">
                    {["outlet", "sku", "units", "revenue"].map((c) => (
                      <div key={c} className="rounded bg-background px-2 py-1.5">{c}</div>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
                    {["Allin Pharmacy", "FLV-VC1000", "248", "$3,720"].map((c, i) => (
                      <div key={i} className="rounded bg-background px-2 py-1.5">{c}</div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <Stat label="Outlets unified" value="10,000+" />
                  <Stat label="Hours saved / mo" value="120h" />
                  <Stat label="Data accuracy" value="99.8%" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer story embedded under UnifySales */}
          <div className="mx-auto mt-16 max-w-4xl">
            <Card className="overflow-hidden border-primary/20 shadow-elegant">
              <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <Badge variant="secondary" className="gap-1.5"><Users className="h-3 w-3" /> Customer story</Badge>
                  <Quote className="mt-4 h-8 w-8 text-primary/40" />
                  <p className="mt-3 text-lg font-medium leading-relaxed sm:text-xl">
                    "UnifySales consolidates thousands of general trade outlets' data for us,
                    saving us weeks of productivity every month."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                      CH
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Commercial Lead</p>
                      <p className="text-muted-foreground">Major global consumer healthcare company</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <ResultStat icon={Users} value="10,000+" label="GT outlets unified" />
                  <ResultStat icon={Clock} value="Weeks" label="Of productivity saved monthly" />
                  <ResultStat icon={CheckCircle2} value="100%" label="Field force on incentive tracking" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product 2: AISA */}
      <section id="aisa" className="border-t border-border/60 py-20">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Visual */}
            <Card className="order-2 shadow-elegant lg:order-1">
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <ChatBubble from="hcp">
                    Can you share the latest dosing data for pediatric patients?
                  </ChatBubble>
                  <ChatBubble from="aisa">
                    Of course, Dr. Tan. Here's the updated guideline with the new pediatric dosing
                    table — would you like me to email a copy to your clinic?
                  </ChatBubble>
                  <ChatBubble from="hcp">
                    Yes please. I'd also like to restock our Flavettes Vitamin C.
                  </ChatBubble>
                  <ChatBubble from="aisa">
                    Done — I've placed an order for 3 cartons of Flavettes VC 1000mg through your
                    usual distributor, arriving Thursday.
                  </ChatBubble>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <Stat label="Availability" value="24/7" />
                  <Stat label="Avg. wait time" value="0s" />
                  <Stat label="Cost vs. rep" value="-85%" />
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="gap-1.5">
                <Bot className="h-3 w-3 text-primary" />
                Product 02 · AISA
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                The AI chat bot that reaches every HCP your reps can't.
              </h2>
              <p className="mt-4 text-muted-foreground">
                AISA is an AI chat bot for healthcare professionals — answering questions, sharing
                materials, and helping HCPs put in orders, instantly and around the clock.
              </p>

              <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" />
                  <div>
                    <p className="text-sm font-medium">The challenge today</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pharma has whole pockets of HCPs going unserved. Field forces are stretched
                      and simply can't reach every doctor, every pharmacy, every week.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2.5"><Clock className="mt-0.5 h-4 w-4 text-primary" /> Frictionless engagement — no waiting times, 24/7 availability</li>
                <li className="flex items-start gap-2.5"><Users className="mt-0.5 h-4 w-4 text-primary" /> Serves marginalized HCP segments your reps can't cover</li>
                <li className="flex items-start gap-2.5"><TrendingUp className="mt-0.5 h-4 w-4 text-primary" /> A fraction of the cost of an in-person sales call</li>
              </ul>

              <Card className="mt-6 border-primary/20 bg-accent/40">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Results:</span> increased HCP engagement and
                    measurable revenue uplift in long-tail segments.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-primary shadow-glow">
                  <a href="#contact">See AISA in action <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
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
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/demo">Explore the live demo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} EngageRx. AI for commercial pharma.</p>
          <div className="flex gap-5">
            <a href="#unifysales" className="hover:text-foreground">UnifySales</a>
            <a href="#aisa" className="hover:text-foreground">AISA</a>
            <a href="#press" className="hover:text-foreground">Press</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>

      <FitQuizDialog open={quizOpen} onOpenChange={setQuizOpen} />
    </main>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-background p-3">
    <p className="text-base font-semibold text-foreground">{value}</p>
    <p className="mt-0.5 text-[11px] text-muted-foreground">{label}</p>
  </div>
);

const ResultStat = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

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

const ChatBubble = ({ from, children }: { from: "hcp" | "aisa"; children: React.ReactNode }) => (
  <div className={`flex ${from === "aisa" ? "justify-start" : "justify-end"}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
        from === "aisa"
          ? "rounded-bl-sm bg-accent text-foreground"
          : "rounded-br-sm bg-gradient-primary text-primary-foreground"
      }`}
    >
      {from === "aisa" && (
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-primary">AISA</p>
      )}
      {children}
    </div>
  </div>
);

export default Index;
