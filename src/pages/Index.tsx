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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
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
              <p className="text-base font-semibold">Pharos</p>
              <p className="text-[11px] text-muted-foreground">AI for commercial pharma</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#unifysales" className="transition-smooth hover:text-foreground">UnifySales</a>
            <a href="#aisa" className="transition-smooth hover:text-foreground">AISA</a>
            <a href="#proof" className="transition-smooth hover:text-foreground">Customers</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#contact">Talk to sales</a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary shadow-glow">
              <Link to="/demo">
                See live demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-20 sm:py-28">
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
            Pharos gives commercial pharma teams two AI-native products to consolidate sell-out
            data automatically and engage every HCP, every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
              <Link to="/demo">
                See UnifySales in action <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Book a strategy call</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Enterprise-grade security</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Live in &lt; 2 weeks</span>
            <span className="flex items-center gap-1.5"><LineChart className="h-3.5 w-3.5" /> Measurable revenue uplift</span>
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
                  "One-click exports per outlet, SKU, region or rep",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-primary shadow-glow">
                  <Link to="/demo">
                    Try the live demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="#proof">Read the case study</a>
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
                  <Stat label="Outlets unified" value="1,000+" />
                  <Stat label="Hours saved / mo" value="120h" />
                  <Stat label="Data accuracy" value="99.8%" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section id="proof" className="container py-20">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="gap-1.5"><Users className="h-3 w-3" /> Customer story</Badge>
          <Card className="mt-5 overflow-hidden border-primary/20 shadow-elegant">
            <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="mt-3 text-lg font-medium leading-relaxed sm:text-xl">
                  "UnifySales consolidates thousands of general trade outlets' data for us every
                  week. Our field force now has clear incentive compensation and live tracking —
                  and we've seen real revenue uplift since rolling it out."
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
              <div className="grid gap-3 sm:grid-cols-1">
                <ResultStat icon={TrendingUp} value="+14%" label="Revenue uplift in 6 months" />
                <ResultStat icon={Users} value="3,200" label="General trade outlets unified" />
                <ResultStat icon={CheckCircle2} value="100%" label="Field force on incentive tracking" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product 2: AISA */}
      <section id="aisa" className="border-t border-border/60 bg-card/30 py-20">
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
                  <ChatBubble from="hcp">Yes please. Also, any samples available?</ChatBubble>
                  <ChatBubble from="aisa">
                    Sent. I've also requested 20 samples to be delivered to Klinik Tan by Thursday.
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
                Reach every HCP your reps can't.
              </h2>
              <p className="mt-4 text-muted-foreground">
                AISA is your AI sales assistant for healthcare professionals — answering questions,
                sharing materials and taking sample requests, instantly and around the clock.
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
                  <a href="#contact">Request an AISA pilot <ArrowRight className="h-4 w-4" /></a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">Talk to our team</a>
                </Button>
              </div>
            </div>
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
                See UnifySales and AISA tailored to your portfolio in a 30-minute working session
                with our team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" variant="secondary" className="shadow-md">
                <Link to="/demo">Explore the live demo <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="mailto:hello@pharos.ai">Book a strategy call</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Pharos. AI for commercial pharma.</p>
          <div className="flex gap-5">
            <a href="#unifysales" className="hover:text-foreground">UnifySales</a>
            <a href="#aisa" className="hover:text-foreground">AISA</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
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
