import { ArrowRight, Sparkles, Wand2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { emailSources } from "@/lib/mockData";

const STANDARD = ["outlet", "sku", "product", "units", "unit_price", "revenue", "date"];

export const MappingPipeline = ({ selectedId }: { selectedId: string }) => {
  const email = emailSources.find((e) => e.id === selectedId) ?? emailSources[0];
  const mapping: Record<string, string> = {
    CSV: "item_code → sku · qty_sold → units · unit_price → unit_price",
    XLSX: "Product SKU → sku · Units → units · Gross $ → revenue",
    "PDF Table": "Code → sku · Sold → units · Price → unit_price",
  };

  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
            <Wand2 className="h-3.5 w-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-none">Schema Mapping</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">AI-detected column alignment</p>
          </div>
        </div>
        <Badge variant="secondary" className="gap-1 text-[10px]">
          <Sparkles className="h-3 w-3 text-primary" />
          98% confidence
        </Badge>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Source — {email.outlet} ({email.format})
          </p>
          <div className="overflow-hidden rounded-lg border border-border/60 bg-secondary/30">
            <div className="flex flex-wrap gap-1.5 border-b border-border/60 px-3 py-2">
              {email.rawPreview.headers.map((h) => (
                <span
                  key={h}
                  className="rounded-md bg-background px-2 py-0.5 font-mono text-[11px] text-foreground/80 shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="px-3 py-2 font-mono text-[11px] text-muted-foreground">
              {email.rawPreview.rows[0].join(" │ ")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          <ArrowRight className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[10px]">{mapping[email.format]}</span>
          <ArrowRight className="h-3.5 w-3.5 text-primary" />
          <div className="h-px flex-1 bg-border" />
        </div>

        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Standardized Schema
          </p>
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-primary/20 bg-accent/40 p-3">
            {STANDARD.map((h) => (
              <span
                key={h}
                className="rounded-md bg-gradient-primary px-2 py-0.5 font-mono text-[11px] text-primary-foreground shadow-sm"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
