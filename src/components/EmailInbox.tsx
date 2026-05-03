import { Mail, FileSpreadsheet, FileText, FileType, CheckCircle2, Loader2, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { emailSources, type EmailSource } from "@/lib/mockData";

const formatIcon = (f: EmailSource["format"]) => {
  if (f === "CSV") return FileText;
  if (f === "XLSX") return FileSpreadsheet;
  return FileType;
};

const statusMeta = {
  processed: { label: "Processed", icon: CheckCircle2, className: "text-success" },
  processing: { label: "Parsing", icon: Loader2, className: "text-primary animate-spin" },
  queued: { label: "Queued", icon: Clock, className: "text-muted-foreground" },
} as const;

export const EmailInbox = ({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
            <Mail className="h-3.5 w-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-none">Inbound Sources</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">ingest@unifysales.io</p>
          </div>
        </div>
        <Badge variant="secondary" className="font-mono text-[10px]">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
          LIVE
        </Badge>
      </div>

      <div className="divide-y divide-border/60">
        {emailSources.map((email) => {
          const FIcon = formatIcon(email.format);
          const SMeta = statusMeta[email.status];
          const SIcon = SMeta.icon;
          const active = email.id === selectedId;
          return (
            <button
              key={email.id}
              onClick={() => onSelect(email.id)}
              className={cn(
                "group flex w-full items-start gap-3 px-4 py-3 text-left transition-smooth hover:bg-accent/40",
                active && "bg-accent/60"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background transition-smooth",
                  active && "border-primary/40 shadow-glow"
                )}
              >
                <FIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium">{email.outlet}</p>
                  <span className="shrink-0 text-[11px] text-muted-foreground">{email.receivedAt}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{email.subject}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline" className="h-5 px-1.5 font-mono text-[10px]">
                    {email.format}
                  </Badge>
                  <span className="text-[11px] text-muted-foreground">{email.rowCount} rows</span>
                  <span className={cn("ml-auto inline-flex items-center gap-1 text-[11px]", SMeta.className)}>
                    <SIcon className="h-3 w-3" />
                    {SMeta.label}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
};
