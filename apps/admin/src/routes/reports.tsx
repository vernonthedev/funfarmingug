import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Download,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
import { Frame } from "@/components/ui/frame";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageSkeleton } from "../components/page-skeleton";
import { formatCurrency } from "../lib/format";

export const Route = createFileRoute("/reports")({
  component: ReportsPage,
  pendingComponent: PageSkeleton,
});

interface TopItem {
  readonly rank: number;
  readonly name: string;
  readonly category: string;
  readonly sold: number;
  readonly revenue: number;
  readonly trend: number;
}

const topItems: TopItem[] = [
  { rank: 1, name: "Garlic Bread", category: "Sides", sold: 312, revenue: 1872, trend: 12.3 },
  { rank: 2, name: "Craft Lemonade", category: "Beverages", sold: 420, revenue: 2100, trend: 8.7 },
  { rank: 3, name: "Steak Frites", category: "Mains", sold: 203, revenue: 6902, trend: 15.2 },
  {
    rank: 4,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    sold: 195,
    revenue: 2535,
    trend: -2.1,
  },
  { rank: 5, name: "Iced Tea", category: "Beverages", sold: 356, revenue: 1424, trend: 5.4 },
];

interface CategoryRevenue {
  readonly category: string;
  readonly revenue: number;
  readonly percentage: number;
  readonly color: string;
}

const categoryRevenue: CategoryRevenue[] = [
  { category: "Main Courses", revenue: 15240, percentage: 38, color: "bg-blue-500" },
  { category: "Appetizers", revenue: 8470, percentage: 21, color: "bg-emerald-500" },
  { category: "Desserts", revenue: 6830, percentage: 17, color: "bg-pink-500" },
  { category: "Beverages", revenue: 5420, percentage: 14, color: "bg-sky-500" },
  { category: "Sides", revenue: 4040, percentage: 10, color: "bg-orange-500" },
];

function ReportsPage() {
  const totalRevenue = categoryRevenue.reduce((sum, c) => sum + c.revenue, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sales performance, trends, and revenue insights.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline">
            <CalendarDays size={20} strokeWidth={1.5} />
            This Month
          </Button>
          <Button>
            <Download size={20} strokeWidth={1.5} />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">
                  {formatCurrency(totalRevenue)}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Total Revenue</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <BarChart3 size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">1,847</div>
                <div className="mt-1 text-sm text-muted-foreground">Orders</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">$42.50</div>
                <div className="mt-1 text-sm text-muted-foreground">Avg. Order Value</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <PieChart size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold leading-none">4.2%</span>
                  <span className="text-emerald-600 flex items-center gap-1 text-sm">
                    <ArrowUpRight size={14} strokeWidth={2} />
                    0.8%
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Conversion Rate</div>
              </div>
            </div>
          </CardPanel>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-7">
          <h3 className="font-semibold text-sm px-1">Top Selling Items</h3>
          <Frame className="w-full">
            <Table variant="card">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1">#</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topItems.map((item) => (
                  <TableRow key={item.rank}>
                    <TableCell className="text-muted-foreground">{item.rank}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-normal">
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${(item.sold / 420) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{item.sold}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(item.revenue)}</TableCell>
                    <TableCell>
                      <span
                        className={`flex items-center gap-1 text-sm ${item.trend >= 0 ? "text-emerald-600" : "text-destructive"}`}
                      >
                        {item.trend >= 0 ? (
                          <ArrowUpRight size={14} strokeWidth={2} />
                        ) : (
                          <ArrowDownRight size={14} strokeWidth={2} />
                        )}
                        {Math.abs(item.trend)}%
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Frame>
        </div>
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Revenue by Category</CardTitle>
          </CardHeader>
          <CardPanel>
            <div className="flex h-8 w-full rounded-lg overflow-hidden mb-4">
              {categoryRevenue.map((cat) => (
                <div
                  key={cat.category}
                  className={cat.color}
                  style={{
                    width: `${cat.percentage}%`,
                    opacity: 0.6 + (cat.percentage / 38) * 0.4,
                  }}
                />
              ))}
            </div>
            <div className="space-y-3">
              {categoryRevenue.map((cat) => (
                <div key={cat.category} className="flex items-center gap-3">
                  <div className={`size-2.5 shrink-0 rounded-full ${cat.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-sm">
                      <span className="truncate">{cat.category}</span>
                      <span className="font-medium">{formatCurrency(cat.revenue)}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${cat.color}`}
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{cat.percentage}%</span>
                </div>
              ))}
            </div>
          </CardPanel>
        </Card>
      </div>
    </div>
  );
}
