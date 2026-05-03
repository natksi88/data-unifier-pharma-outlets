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
    sender: "reports@northgate-mall.com",
    subject: "Daily Sales Report — Northgate",
    outlet: "Northgate Mall",
    receivedAt: "08:02 AM",
    format: "CSV",
    rowCount: 142,
    status: "processed",
    rawPreview: {
      headers: ["item_code", "item_name", "qty_sold", "unit_price", "trx_date"],
      rows: [
        ["SKU-1001", "Classic Tee — Black", 12, 24.0, "2026-05-03"],
        ["SKU-1042", "Slim Jeans — Indigo", 5, 58.0, "2026-05-03"],
        ["SKU-2210", "Canvas Sneaker", 3, 72.0, "2026-05-03"],
      ],
    },
  },
  {
    id: "e2",
    sender: "pos-export@riverside.store",
    subject: "Sales_Export_05-03.xlsx",
    outlet: "Riverside Plaza",
    receivedAt: "08:14 AM",
    format: "XLSX",
    rowCount: 98,
    status: "processed",
    rawPreview: {
      headers: ["Product SKU", "Description", "Units", "Gross $", "Date"],
      rows: [
        ["1001", "Tee Black", 8, 192.0, "05/03/2026"],
        ["2210", "Sneaker Canvas", 4, 288.0, "05/03/2026"],
        ["3301", "Hoodie Grey M", 6, 396.0, "05/03/2026"],
      ],
    },
  },
  {
    id: "e3",
    sender: "manager@harbor-outlet.co",
    subject: "today's numbers",
    outlet: "Harbor Outlet",
    receivedAt: "08:31 AM",
    format: "PDF Table",
    rowCount: 67,
    status: "processing",
    rawPreview: {
      headers: ["Code", "Name", "Sold", "Price"],
      rows: [
        ["1042", "Slim Jeans Indigo", "7 pcs", "$58"],
        ["3301", "Hoodie Grey M", "11 pcs", "$66"],
        ["4400", "Cap Logo", "9 pcs", "$22"],
      ],
    },
  },
  {
    id: "e4",
    sender: "auto@summit-store.io",
    subject: "EOD-2026-05-03",
    outlet: "Summit Center",
    receivedAt: "08:45 AM",
    format: "CSV",
    rowCount: 113,
    status: "queued",
    rawPreview: {
      headers: ["sku;name;qty;price"],
      rows: [
        ["1001;Classic Tee Black;15;24.00"],
        ["2210;Canvas Sneaker;6;72.00"],
        ["4400;Cap Logo;12;22.00"],
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
  { sku: "SKU-1001", name: "Classic Tee — Black", category: "Apparel", price: 24 },
  { sku: "SKU-1042", name: "Slim Jeans — Indigo", category: "Apparel", price: 58 },
  { sku: "SKU-2210", name: "Canvas Sneaker", category: "Footwear", price: 72 },
  { sku: "SKU-3301", name: "Hoodie Grey — M", category: "Apparel", price: 66 },
  { sku: "SKU-4400", name: "Cap — Logo", category: "Accessories", price: 22 },
  { sku: "SKU-5510", name: "Tote Bag — Natural", category: "Accessories", price: 18 },
];

const outlets = ["Northgate Mall", "Riverside Plaza", "Harbor Outlet", "Summit Center"];

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
