import { useMemo, useState } from "react";
import { Download, Filter, Search, Table2, TrendingUp, Package, Store } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { consolidatedRows, allOutlets, allSkus } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export const ConsolidatedTable = () => {
  const [outlets, setOutlets] = useState<string[]>(allOutlets);
  const [skus, setSkus] = useState<string[]>(allSkus);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      consolidatedRows.filter(
        (r) =>
          outlets.includes(r.outlet) &&
          skus.includes(r.sku) &&
          (query === "" ||
            r.product.toLowerCase().includes(query.toLowerCase()) ||
            r.sku.toLowerCase().includes(query.toLowerCase()))
      ),
    [outlets, skus, query]
  );

  const totals = useMemo(
    () => ({
      revenue: filtered.reduce((s, r) => s + r.revenue, 0),
      units: filtered.reduce((s, r) => s + r.units, 0),
      rows: filtered.length,
    }),
    [filtered]
  );

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };

  const exportCsv = () => {
    const headers = ["outlet", "sku", "product", "category", "units", "unit_price", "revenue", "date"];
    const csv = [
      headers.join(","),
      ...filtered.map((r) =>
        [r.outlet, r.sku, `"${r.product}"`, r.category, r.units, r.unitPrice, r.revenue, r.date].join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `unified-sales-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} rows`, {
      description: `${outlets.length} outlets · ${skus.length} SKUs`,
    });
  };

  return (
    <Card className="overflow-hidden border-border/60 shadow-elegant">
      <div className="border-b border-border/60 bg-gradient-subtle px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              <Table2 className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold leading-tight">Consolidated Sales</h2>
              <p className="text-xs text-muted-foreground">
                Unified output · {totals.rows} rows · ${totals.revenue.toLocaleString()} revenue
              </p>
            </div>
          </div>
          <Button onClick={exportCsv} className="bg-gradient-primary shadow-glow hover:opacity-95">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Stat icon={TrendingUp} label="Revenue" value={`$${totals.revenue.toLocaleString()}`} />
          <Stat icon={Package} label="Units" value={totals.units.toLocaleString()} />
          <Stat icon={Store} label="Outlets" value={`${outlets.length} / ${allOutlets.length}`} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-[200px] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search SKU or product…"
              className="h-9 pl-9 text-sm"
            />
          </div>
          <FilterPopover
            label="Outlets"
            count={outlets.length}
            total={allOutlets.length}
            options={allOutlets}
            selected={outlets}
            onToggle={(v) => toggle(outlets, setOutlets, v)}
            onAll={() => setOutlets(allOutlets)}
            onNone={() => setOutlets([])}
          />
          <FilterPopover
            label="SKUs"
            count={skus.length}
            total={allSkus.length}
            options={allSkus}
            selected={skus}
            onToggle={(v) => toggle(skus, setSkus, v)}
            onAll={() => setSkus(allSkus)}
            onNone={() => setSkus([])}
          />
        </div>
      </div>

      <div className="max-h-[480px] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10 bg-card/95 backdrop-blur">
            <tr className="border-b border-border/60 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-3">Outlet</th>
              <th className="px-3 py-3">SKU</th>
              <th className="px-3 py-3">Product</th>
              <th className="px-3 py-3 text-right">Units</th>
              <th className="px-3 py-3 text-right">Unit Price</th>
              <th className="px-5 py-3 text-right">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr
                key={r.id}
                className={cn(
                  "border-b border-border/40 transition-smooth hover:bg-accent/30",
                  i % 2 === 1 && "bg-secondary/20"
                )}
              >
                <td className="px-5 py-2.5 font-medium">{r.outlet}</td>
                <td className="px-3 py-2.5 font-mono text-xs text-muted-foreground">{r.sku}</td>
                <td className="px-3 py-2.5">{r.product}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{r.units}</td>
                <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                  ${r.unitPrice.toFixed(2)}
                </td>
                <td className="px-5 py-2.5 text-right font-medium tabular-nums">
                  ${r.revenue.toLocaleString()}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-muted-foreground">
                  No rows match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const Stat = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) => (
  <div className="rounded-lg border border-border/60 bg-card/60 px-3 py-2.5">
    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
      <Icon className="h-3 w-3" />
      {label}
    </div>
    <div className="mt-0.5 text-base font-semibold tabular-nums">{value}</div>
  </div>
);

const FilterPopover = ({
  label,
  count,
  total,
  options,
  selected,
  onToggle,
  onAll,
  onNone,
}: {
  label: string;
  count: number;
  total: number;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
  onAll: () => void;
  onNone: () => void;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" size="sm" className="h-9 gap-2">
        <Filter className="h-3.5 w-3.5" />
        {label}
        <Badge variant="secondary" className="ml-1 h-5 px-1.5 font-mono text-[10px]">
          {count}/{total}
        </Badge>
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end" className="w-64 p-0">
      <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
        <span className="text-xs font-medium">{label}</span>
        <div className="flex gap-1">
          <button onClick={onAll} className="text-[11px] text-primary hover:underline">All</button>
          <span className="text-[11px] text-muted-foreground">·</span>
          <button onClick={onNone} className="text-[11px] text-muted-foreground hover:underline">None</button>
        </div>
      </div>
      <div className="max-h-64 overflow-auto p-1">
        {options.map((o) => (
          <label
            key={o}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent/60"
          >
            <Checkbox checked={selected.includes(o)} onCheckedChange={() => onToggle(o)} />
            <span className="truncate">{o}</span>
          </label>
        ))}
      </div>
    </PopoverContent>
  </Popover>
);
