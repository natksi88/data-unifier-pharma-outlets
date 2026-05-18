import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Workflow,
  Sparkles,
  Inbox,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Users,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FitQuizDialog } from "@/components/FitQuizDialog";

const UnifySales = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-mesh">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <Workflow className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold">EngageRx</p>
              <p className="text-[11px] text-muted-foreground">AI for commercial pharma</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link to="/unifysales" className="text-foreground">UnifySales</Link>
            <Link to="/aisa" className="transition-smooth hover:text-foreground">AISA</Link>
            <Link to="/#press" className="transition-smooth hover:text-foreground">Press</Link>
          </nav>
          <Button size="sm" className="bg-gradient-primary shadow-glow" onClick={() => setQuizOpen(true)}>
            See if it's a fit <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="gap-1.5">
                <Inbox className="h-3 w-3 text-primary" />
                Product 01 · UnifySales
              </Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Consolidate sell-out data automatically and seamlessly.
              </h1>
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
                <Button className="bg-gradient-primary shadow-glow" onClick={() => setQuizOpen(true)}>
                  See if it's a fit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

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
                      <p className="font-medium">Business Unit Head</p>
                      <p className="text-muted-foreground">Major consumer healthcare and pharma</p>
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

export default UnifySales;
