import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Heart, Mail, Pencil, Phone, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
import { PageSkeleton } from "../components/page-skeleton";
import { getCustomer } from "../lib/customers-data";
import { formatCurrency } from "../lib/format";

export const Route = createFileRoute("/customers/$id")({
  component: CustomerDetailPage,
  pendingComponent: PageSkeleton,
});

const statusConfig: Record<string, { variant: "warning" | "info" | "success"; label: string }> = {
  vip: { variant: "warning", label: "VIP" },
  regular: { variant: "info", label: "Regular" },
  new: { variant: "success", label: "New" },
};

function CustomerDetailPage() {
  const { id } = useParams({ from: "/customers/$id" });
  const customer = getCustomer(id);

  if (!customer) {
    throw notFound();
  }

  const sb = statusConfig[customer.status] || statusConfig.new;

  return (
    <div className="space-y-6">
      <Link
        to="/customers"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to Customers
      </Link>

      <Card>
        <CardPanel>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-medium text-primary">
                {customer.avatar}
                {customer.status === "vip" && (
                  <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-warning" />
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold mb-0">{customer.name}</h1>
                  <Badge variant={sb.variant}>
                    {customer.status === "vip" && <Star size={12} strokeWidth={2} />}
                    {sb.label}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mail size={14} strokeWidth={1.5} /> {customer.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} strokeWidth={1.5} /> {customer.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} strokeWidth={1.5} /> Customer since {customer.joined}
                  </span>
                </div>
              </div>
            </div>
            <Button variant="outline" render={<Link to="/customers/$id/edit" params={{ id }} />}>
              <Pencil size={18} strokeWidth={1.5} />
              Edit Profile
            </Button>
          </div>
        </CardPanel>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardPanel>
            <div className="text-2xl font-bold leading-none">
              {formatCurrency(customer.totalSpent)}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Total Spent</div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="text-2xl font-bold leading-none">{customer.visits}</div>
            <div className="mt-1 text-sm text-muted-foreground">Visits</div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="text-2xl font-bold leading-none">{customer.lastVisit}</div>
            <div className="mt-1 text-sm text-muted-foreground">Last Visit</div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="text-2xl font-bold leading-none">{customer.birthday || "—"}</div>
            <div className="mt-1 text-sm text-muted-foreground">Birthday</div>
          </CardPanel>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart size={18} strokeWidth={1.5} className="text-destructive" />
              Favorite Items
            </CardTitle>
          </CardHeader>
          <CardPanel>
            {customer.favoriteItems && customer.favoriteItems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {customer.favoriteItems.map((item: string, i: number) => (
                  <Badge key={i} variant="secondary" size="lg" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">No favorites recorded yet.</p>
            )}
          </CardPanel>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardPanel>
            {customer.notes ? (
              <p className="text-sm">{customer.notes}</p>
            ) : (
              <p className="text-sm text-muted-foreground italic">No notes on file.</p>
            )}
          </CardPanel>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} />
            Recent Orders
          </CardTitle>
        </CardHeader>
        <CardPanel className="p-0">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b">
                <th className="h-10 px-2.5 text-left font-medium text-muted-foreground">Order</th>
                <th className="h-10 px-2.5 text-left font-medium text-muted-foreground">Items</th>
                <th className="h-10 px-2.5 text-left font-medium text-muted-foreground">Total</th>
                <th className="h-10 px-2.5 text-left font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0 hover:bg-muted/20">
                <td className="p-2.5 font-medium">#ORD-0421</td>
                <td className="p-2.5 text-muted-foreground">
                  Steak Frites, Caesar Salad, Espresso
                </td>
                <td className="p-2.5 font-medium">$48.50</td>
                <td className="p-2.5 text-muted-foreground">2 days ago</td>
              </tr>
              <tr className="border-b last:border-0 hover:bg-muted/20">
                <td className="p-2.5 font-medium">#ORD-0418</td>
                <td className="p-2.5 text-muted-foreground">Grilled Salmon, Garlic Bread</td>
                <td className="p-2.5 font-medium">$34.00</td>
                <td className="p-2.5 text-muted-foreground">1 week ago</td>
              </tr>
            </tbody>
          </table>
        </CardPanel>
      </Card>
    </div>
  );
}
