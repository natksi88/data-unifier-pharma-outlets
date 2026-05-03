import { useState } from "react";
import { Inbox, Workflow, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmailInbox } from "@/components/EmailInbox";
import { MappingPipeline } from "@/components/MappingPipeline";
import { ConsolidatedTable } from "@/components/ConsolidatedTable";
import { emailSources } from "@/lib/mockData";

const Index = () => {
  const [selectedId, setSelectedId] = useState(emailSources[0].id);

  return (
    <main className="min-h-screen bg-gradient-mesh">
      <header className="border-b border-border/60 bg-card/40 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <Workflow className="h-4 w-4" />
            </div>
            <div>
              <h1 className="text-base font-semibold leading-none">UnifySales</h1>
              <p className="mt-1 text-[11px] text-muted-foreground">Email-in · Standardized-out</p>
            </div>
          </div>
          <Badge variant="outline" className="gap-1.5">
            <Sparkles className="h-3 w-3 text-primary" />
            Demo
          </Badge>
        </div>
      </header>

      <section className="container py-10">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <Inbox className="h-3 w-3" />
            Live ingestion pipeline
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One inbox. <span className="text-gradient">Every outlet.</span> Clean data.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Forward sales reports from any POS, in any format. We normalize columns, unify SKUs,
            and let you export exactly the slice you need.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[360px_1fr]">
          <div className="space-y-5">
            <EmailInbox selectedId={selectedId} onSelect={setSelectedId} />
            <MappingPipeline selectedId={selectedId} />
          </div>
          <ConsolidatedTable />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Tip: select an email on the left to see how its raw schema maps into the standard.
        </p>
      </section>
    </main>
  );
};

export default Index;
