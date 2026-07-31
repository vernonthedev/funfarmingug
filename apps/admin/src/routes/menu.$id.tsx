import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock, Eye, EyeOff, Pencil, ShoppingCart, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
import { PageSkeleton } from "../components/page-skeleton";
import { formatCurrency } from "../lib/format";
import { getMenuItem } from "../lib/menu-data";

export const Route = createFileRoute("/menu/$id")({
  component: MenuItemDetailPage,
  pendingComponent: PageSkeleton,
});

function MenuItemDetailPage() {
  const { id } = useParams({ from: "/menu/$id" });
  const item = getMenuItem(id);

  if (!item) {
    throw notFound();
  }

  const totalRevenue = item.price * item.orders;

  return (
    <div className="space-y-6">
      <Link
        to="/menu"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to Menu
      </Link>

      <Card>
        <CardPanel>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex size-18 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl font-bold text-primary"
                style={{ width: 72, height: 72 }}
              >
                {item.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <Badge variant="secondary" className="font-normal">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.id}</span>
                  <Badge variant={item.status === "available" ? "success" : "secondary"}>
                    {item.status === "available" ? (
                      <>
                        <Eye size={14} strokeWidth={2} /> Available
                      </>
                    ) : (
                      <>
                        <EyeOff size={14} strokeWidth={2} /> Unavailable
                      </>
                    )}
                  </Badge>
                </div>
                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                )}
              </div>
            </div>
            <Button variant="outline" render={<Link to="/menu/$id/edit" params={{ id }} />}>
              <Pencil size={18} strokeWidth={1.5} />
              Edit Item
            </Button>
          </div>
        </CardPanel>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingCart size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">{formatCurrency(item.price)}</div>
                <div className="mt-1 text-sm text-muted-foreground">Unit Price</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">{item.orders}</div>
                <div className="mt-1 text-sm text-muted-foreground">Orders</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-none">{item.prepTime} min</div>
                <div className="mt-1 text-sm text-muted-foreground">Prep Time</div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <Card>
          <CardPanel>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
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
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Popularity</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Orders vs Top Item</span>
                <span className="text-sm font-medium">{item.orders} / 420</span>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${(item.orders / 420) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardPanel>
      </Card>
    </div>
  );
}
