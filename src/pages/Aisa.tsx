import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Workflow,
  Bot,
  AlertTriangle,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FitQuizDialog } from "@/components/FitQuizDialog";
import { SignupDialog } from "@/components/SignupDialog";

const Aisa = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

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
            <Link to="/unifysales" className="transition-smooth hover:text-foreground">UnifySales</Link>
            <Link to="/aisa" className="text-foreground">AISA</Link>
            <Link to="/#press" className="transition-smooth hover:text-foreground">Press</Link>
          </nav>
          <Button size="sm" className="bg-gradient-primary shadow-glow" onClick={() => setQuizOpen(true)}>
            See if it's a fit <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="border-t border-border/60 py-20">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
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
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                The AI chat bot that reaches every HCP your reps can't.
              </h1>
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
                <Button className="bg-gradient-primary shadow-glow" onClick={() => setSignupOpen(true)}>
                  See AISA in action <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FitQuizDialog open={quizOpen} onOpenChange={setQuizOpen} />
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />
    </main>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-background p-3">
    <p className="text-base font-semibold text-foreground">{value}</p>
    <p className="mt-0.5 text-[11px] text-muted-foreground">{label}</p>
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

export default Aisa;
