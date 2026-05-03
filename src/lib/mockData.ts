export type EmailSource = {
  id: string;
  sender: string;
  subject: string;
  outlet: string;
  receivedAt: string;
  format: "CSV" | "XLSX" | "PDF Table";
  status: "processed" | "processing" | "queued";
  rawPreview: { headers: string[]; rows: (string | number)[][] };
  rowCount: number;
};

const products = [
  { sku: "FLV-VC1000", name: "Flavettes Vitamin C 1000mg — 30s", category: "Vitamins", price: 38.9 },
  { sku: "FLV-EFV", name: "Flavettes Effervescent Vitamin C — 15s", category: "Vitamins", price: 24.5 },
  { sku: "FLV-GLOW", name: "Flavettes Glow Vitamin C + E — 30s", category: "Beauty", price: 52.0 },
  { sku: "FLV-ENRG", name: "Flavettes Energy Multivitamin — 30s", category: "Vitamins", price: 45.6 },
  { sku: "FLV-IMUN", name: "Flavettes Immune Booster — 30s", category: "Immunity", price: 49.9 },
  { sku: "FLV-ZINC", name: "Flavettes Zinc + Vitamin C — 20s", category: "Immunity", price: 29.8 },
];

// Generate 1000 independent pharmacy outlet names
const outletPrefixes = [
  "Allin", "Greenleaf", "Wellcare", "Medicore", "Healthpoint", "Caring", "Vita", "Pulse",
  "Sunrise", "Harbor", "Summit", "Northgate", "Riverside", "Oakridge", "Maple", "Pinecrest",
  "Lakeside", "Hillcrest", "Bayview", "Brookside", "Cedar", "Westwood", "Eastfield", "Southport",
  "Goldcoast", "Silverleaf", "Bluebell", "Rosewood", "Crystal", "Meadow", "Highland", "Parkway",
  "Plaza", "Central", "Metro", "Unity", "Trust", "Prime", "Apex", "Grace",
];
const outletSuffixes = ["Pharmacy", "Chemist", "Drugstore", "Rx", "Apothecary", "Health"];

const outlets: string[] = [];
for (let i = 0; i < 1000; i++) {
  const prefix = outletPrefixes[i % outletPrefixes.length];
  const suffix = outletSuffixes[Math.floor(i / outletPrefixes.length) % outletSuffixes.length];
  const branchNum = Math.floor(i / (outletPrefixes.length * outletSuffixes.length)) + 1;
  const branch = branchNum === 1 ? "" : ` #${String(branchNum).padStart(2, "0")}`;
  outlets.push(`${prefix} ${suffix}${branch}`);
}

export const emailSources: EmailSource[] = [
  {
    id: "e1",
    sender: "reports@allinpharmacy.com",
    subject: "Daily Sales Report — Allin Pharmacy",
    outlet: "Allin Pharmacy",
    receivedAt: "08:02 AM",
    format: "CSV",
    rowCount: 142,
    status: "processed",
    rawPreview: {
      headers: ["item_code", "item_name", "qty_sold", "unit_price", "trx_date"],
      rows: [
        ["FLV-VC1000", "Flavettes Vit C 1000mg 30s", 24, 38.9, "2026-05-03"],
        ["FLV-GLOW", "Flavettes Glow 30s", 8, 52.0, "2026-05-03"],
        ["FLV-ZINC", "Flavettes Zinc + C 20s", 12, 29.8, "2026-05-03"],
      ],
    },
  },
  {
    id: "e2",
    sender: "pos-export@greenleaf-rx.com",
    subject: "Sales_Export_05-03.xlsx",
    outlet: "Greenleaf Pharmacy",
    receivedAt: "08:14 AM",
    format: "XLSX",
    rowCount: 98,
    status: "processed",
    rawPreview: {
      headers: ["Product SKU", "Description", "Units", "Gross $", "Date"],
      rows: [
        ["VC1000", "Flavettes Vitamin C 1000", 18, 700.2, "05/03/2026"],
        ["EFV", "Flavettes Effervescent", 9, 220.5, "05/03/2026"],
        ["ENRG", "Flavettes Energy", 6, 273.6, "05/03/2026"],
      ],
    },
  },
  {
    id: "e3",
    sender: "manager@wellcare-chemist.co",
    subject: "today's numbers",
    outlet: "Wellcare Chemist",
    receivedAt: "08:31 AM",
    format: "PDF Table",
    rowCount: 67,
    status: "processing",
    rawPreview: {
      headers: ["Code", "Name", "Sold", "Price"],
      rows: [
        ["GLOW", "Flavettes Glow C+E", "14 pcs", "$52.00"],
        ["IMUN", "Flavettes Immune", "9 pcs", "$49.90"],
        ["ZINC", "Flavettes Zinc + C", "16 pcs", "$29.80"],
      ],
    },
  },
  {
    id: "e4",
    sender: "auto@medicore-pharmacy.io",
    subject: "EOD-2026-05-03",
    outlet: "Medicore Pharmacy",
    receivedAt: "08:45 AM",
    format: "CSV",
    rowCount: 113,
    status: "queued",
    rawPreview: {
      headers: ["sku;name;qty;price"],
      rows: [
        ["VC1000;Flavettes Vit C 1000mg;30;38.90"],
        ["EFV;Flavettes Effervescent;11;24.50"],
        ["ENRG;Flavettes Energy;22;45.60"],
      ],
    },
  },
];

export type ConsolidatedRow = {
  id: string;
  outlet: string;
  sku: string;
  product: string;
  category: string;
  units: number;
  unitPrice: number;
  revenue: number;
  date: string;
};

export const consolidatedRows: ConsolidatedRow[] = (() => {
  const rows: ConsolidatedRow[] = [];
  let i = 0;
  outlets.forEach((outlet) => {
    products.forEach((p) => {
      const units = 1 + ((outlet.length * 7 + p.sku.length * 3 + i) % 28);
      rows.push({
        id: `r${i++}`,
        outlet,
        sku: p.sku,
        product: p.name,
        category: p.category,
        units,
        unitPrice: p.price,
        revenue: +(units * p.price).toFixed(2),
        date: "2026-05-03",
      });
    });
  });
  return rows;
})();

export const allOutlets = outlets;
export const allSkus = products.map((p) => p.sku);
