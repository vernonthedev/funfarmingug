import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChefHat,
  ClipboardList,
  Clock,
  Plus,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardPanel,
  CardAction,
} from "@/components/ui/card";
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

export const Route = createFileRoute("/")({
  component: Dashboard,
  pendingComponent: PageSkeleton,
});

interface StatCardProps {
  readonly label: string;
  readonly value: string;
  readonly trend: number;
  readonly icon: typeof TrendingUp;
  readonly color: string;
}

function StatCard({ label, value, trend, icon: Icon, color }: StatCardProps) {
  const isUp = trend >= 0;
  return (
    <Card>
      <CardPanel>
        <div className="flex items-center gap-4">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: `var(--color-${color}-500)` }}
          >
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-2xl font-bold leading-none">{value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{label}</div>
          </div>
          <div className={`flex items-center gap-1 shrink-0 ${isUp ? "text-emerald-600" : "text-destructive"}`}>
            {isUp ? (
              <ArrowUpRight size={16} strokeWidth={2} />
            ) : (
              <ArrowDownRight size={16} strokeWidth={2} />
            )}
            <span className="text-sm font-medium">{Math.abs(trend)}%</span>
          </div>
        </div>
      </CardPanel>
    </Card>
  );
}

function RevenueSparkline() {
  const data = [320, 480, 410, 560, 620, 590, 780, 850, 720, 930, 880, 1050];
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1" style={{ height: 48 }}>
      {data.map((v, i) => (
        <div
          key={i}
          className="w-full rounded-sm bg-primary"
          style={{
            height: `${(v / max) * 100}%`,
            opacity: 0.3 + (i / data.length) * 0.7,
          }}
        />
      ))}
    </div>
  );
}

interface OrderRow {
  readonly id: string;
  readonly table: string;
  readonly items: number;
  readonly total: number;
  readonly status: "pending" | "preparing" | "served" | "paid";
  readonly time: string;
}

const statusBadge: Record<OrderRow["status"], { variant: "warning" | "info" | "success" | "secondary"; label: string }> = {
  pending: { variant: "warning", label: "Pending" },
  preparing: { variant: "info", label: "Preparing" },
  served: { variant: "success", label: "Served" },
  paid: { variant: "secondary", label: "Paid" },
};

const orders: OrderRow[] = [
  { id: "#ORD-0421", table: "Table 5", items: 3, total: 48.5, status: "paid", time: "2 min ago" },
  { id: "#ORD-0420", table: "Table 8", items: 2, total: 32.0, status: "served", time: "8 min ago" },
  { id: "#ORD-0419", table: "Table 3", items: 4, total: 67.25, status: "preparing", time: "15 min ago" },
  { id: "#ORD-0418", table: "Table 12", items: 1, total: 14.0, status: "pending", time: "22 min ago" },
  { id: "#ORD-0417", table: "Table 6", items: 5, total: 89.75, status: "paid", time: "31 min ago" },
  { id: "#ORD-0416", table: "Table 2", items: 2, total: 26.5, status: "preparing", time: "45 min ago" },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Overview</p>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus size={20} strokeWidth={1.5} className="-ms-1" />
            New Order
          </Button>
          <Button variant="outline" className="hidden sm:inline-flex">
            <ClipboardList size={20} strokeWidth={1.5} className="-ms-1" />
            View All
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's Revenue" value={formatCurrency(3450)} trend={12.5} icon={TrendingUp} color="emerald" />
        <StatCard label="Active Orders" value="18" trend={-3.2} icon={ShoppingCart} color="blue" />
        <StatCard label="Customers Served" value="64" trend={8.1} icon={Users} color="sky" />
        <StatCard label="Avg. Rating" value="4.8" trend={2.4} icon={Star} color="orange" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Revenue</CardTitle>
          </CardHeader>
          <CardPanel>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{formatCurrency(7845)}</span>
              <span className="flex items-center gap-1 text-emerald-600 text-sm">
                <ArrowUpRight size={16} strokeWidth={2} /> +14.2%
              </span>
              <span className="text-sm text-muted-foreground">vs last week</span>
            </div>
            <RevenueSparkline />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardPanel className="flex flex-col gap-2">
            <Button className="w-full justify-start">
              <Plus size={20} strokeWidth={1.5} />
              New Order
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <ChefHat size={20} strokeWidth={1.5} />
              Send to Kitchen
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock size={20} strokeWidth={1.5} />
              Time Clock
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users size={20} strokeWidth={1.5} />
              New Customer
            </Button>
          </CardPanel>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardAction>
            <Button variant="outline" size="sm">View All</Button>
          </CardAction>
        </CardHeader>
        <CardPanel className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Table</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const s = statusBadge[order.status];
                return (
                  <TableRow key={order.id}>
                    <TableCell className="text-muted-foreground">{order.id}</TableCell>
                    <TableCell>{order.table}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="font-medium">{formatCurrency(order.total)}</TableCell>
                    <TableCell>
                      <Badge variant={s.variant}>{s.label}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{order.time}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardPanel>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Kitchen Status</CardTitle>
          </CardHeader>
          <CardPanel>
            <div className="flex justify-around text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600">4</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">7</div>
                <div className="text-sm text-muted-foreground">Preparing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">32</div>
                <div className="text-sm text-muted-foreground">Completed Today</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Floor Occupancy</CardTitle>
          </CardHeader>
          <CardPanel>
            <div className="flex justify-around text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">8</div>
                <div className="text-sm text-muted-foreground">Occupied</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-muted-foreground">4</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">2</div>
                <div className="text-sm text-muted-foreground">Reserved</div>
              </div>
            </div>
          </CardPanel>
        </Card>
      </div>
    </div>
  );
}
