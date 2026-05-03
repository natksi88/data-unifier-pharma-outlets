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
        ["SKU-1001", "Paracetamol 500mg — 20s", 24, 4.5, "2026-05-03"],
        ["SKU-1042", "Ibuprofen 200mg — 24s", 12, 6.8, "2026-05-03"],
        ["SKU-2210", "Vitamin C 1000mg — 30s", 8, 14.0, "2026-05-03"],
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
        ["1001", "Paracetamol 500mg", 18, 81.0, "05/03/2026"],
        ["2210", "Vitamin C 1000mg", 9, 126.0, "05/03/2026"],
        ["3301", "Cough Syrup 100ml", 6, 47.4, "05/03/2026"],
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
        ["1042", "Ibuprofen 200mg", "14 pcs", "$6.80"],
        ["3301", "Cough Syrup 100ml", "9 pcs", "$7.90"],
        ["4400", "Hand Sanitizer 250ml", "16 pcs", "$5.20"],
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
        ["1001;Paracetamol 500mg;30;4.50"],
        ["2210;Vitamin C 1000mg;11;14.00"],
        ["4400;Hand Sanitizer 250ml;22;5.20"],
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

const products = [
  { sku: "SKU-1001", name: "Paracetamol 500mg — 20s", category: "Pain Relief", price: 4.5 },
  { sku: "SKU-1042", name: "Ibuprofen 200mg — 24s", category: "Pain Relief", price: 6.8 },
  { sku: "SKU-2210", name: "Vitamin C 1000mg — 30s", category: "Vitamins", price: 14 },
  { sku: "SKU-3301", name: "Cough Syrup 100ml", category: "Cold & Flu", price: 7.9 },
  { sku: "SKU-4400", name: "Hand Sanitizer 250ml", category: "Personal Care", price: 5.2 },
  { sku: "SKU-5510", name: "Antiseptic Cream 30g", category: "First Aid", price: 8.5 },
];

const outlets = ["Allin Pharmacy", "Greenleaf Pharmacy", "Wellcare Chemist", "Medicore Pharmacy"];

export const consolidatedRows: ConsolidatedRow[] = (() => {
  const rows: ConsolidatedRow[] = [];
  let i = 0;
  outlets.forEach((outlet) => {
    products.forEach((p) => {
      const units = 2 + ((outlet.length + p.sku.length) % 14);
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
