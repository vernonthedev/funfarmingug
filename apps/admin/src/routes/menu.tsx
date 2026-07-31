import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ExternalLink, Pencil, Plus, Search, Tag, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Frame } from "@/components/ui/frame";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FilterDrawer } from "../components/filter-drawer";
import { PageSkeleton } from "../components/page-skeleton";
import { formatCurrency } from "../lib/format";
import { categories, menuItems } from "../lib/menu-data";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  pendingComponent: PageSkeleton,
});

const statusVariant = {
  available: { color: "bg-emerald-500", label: "Available" },
  unavailable: { color: "bg-muted-foreground/64", label: "Unavailable" },
};

function MenuPage() {
  const location = useLocation();

  if (location.pathname !== "/menu") {
    return <Outlet />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Menu Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage your menu items, categories, and pricing.
          </p>
        </div>
        <div className="flex gap-2">
          <Button render={<Link to="/menu/new" />}>
            <Plus size={20} strokeWidth={1.5} />
            Add Item
          </Button>
          <FilterDrawer title="Menu Filters">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search menu items…" className="ps-8" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name} ({cat.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Price Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="Min" />
                  <Input type="number" placeholder="Max" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="unavailable">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Sort By</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FilterDrawer>
          <Button variant="outline">
            <Tag size={20} strokeWidth={1.5} />
            Categories
          </Button>
        </div>
      </div>

      <Frame className="w-full">
        <Table variant="card">
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox />
              </TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Prep Time</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuItems.map((item) => {
              const sv = statusVariant[item.status as keyof typeof statusVariant];
              return (
                <TableRow
                  key={item.id}
                  className={item.status === "unavailable" ? "opacity-50" : ""}
                >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Link
                      to="/menu/$id"
                      params={{ id: item.id }}
                      className="flex items-center gap-3 no-underline text-foreground hover:underline"
                    >
                      <div className="flex size-8 items-center justify-center rounded bg-primary/10 text-sm font-medium text-primary">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.id}</div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-normal">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{formatCurrency(item.price)}</TableCell>
                  <TableCell className="text-muted-foreground">{item.prepTime} min</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(item.orders / 420) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{item.orders}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="gap-1">
                      <span aria-hidden="true" className={`size-1.5 rounded-full ${sv.color}`} />
                      {sv.label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              render={<Link to="/menu/$id" params={{ id: item.id }} />}
                            >
                              <ExternalLink size={16} strokeWidth={1.5} />
                            </Button>
                          }
                        />
                        <TooltipContent>View details</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              render={<Link to="/menu/$id/edit" params={{ id: item.id }} />}
                            >
                              <Pencil size={16} strokeWidth={1.5} />
                            </Button>
                          }
                        />
                        <TooltipContent>Edit</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 size={16} strokeWidth={1.5} />
                            </Button>
                          }
                        />
                        <TooltipContent>Delete</TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Frame>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{menuItems.length}</strong> items
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>
            Prev
          </Button>
          <Button size="sm">1</Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
