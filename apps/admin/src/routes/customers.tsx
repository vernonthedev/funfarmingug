import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ExternalLink, Mail, Pencil, Phone, Plus, Search, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { customers } from "../lib/customers-data";
import { formatCurrency } from "../lib/format";

export const Route = createFileRoute("/customers")({
  component: CustomersPage,
  pendingComponent: PageSkeleton,
});

const statusBadge: Record<string, { color: string; label: string }> = {
  vip: { color: "bg-amber-500", label: "VIP" },
  regular: { color: "bg-sky-500", label: "Regular" },
  new: { color: "bg-emerald-500", label: "New" },
};

function CustomersPage() {
  const location = useLocation();

  if (location.pathname !== "/customers") {
    return <Outlet />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Guest Relations</p>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-muted-foreground mt-1">
            View and manage your restaurant's customer relationships.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FilterDrawer title="Customer Filters">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search by name or email…" className="ps-8" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Sort By</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="spent">Highest Spent</SelectItem>
                    <SelectItem value="visits">Most Visits</SelectItem>
                    <SelectItem value="recent">Recent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Min. Total Spent</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">$100+</SelectItem>
                    <SelectItem value="500">$500+</SelectItem>
                    <SelectItem value="1000">$1,000+</SelectItem>
                    <SelectItem value="5000">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Visit Frequency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frequent">Frequent (10+ visits)</SelectItem>
                    <SelectItem value="regular">Regular (5-9 visits)</SelectItem>
                    <SelectItem value="occasional">Occasional (2-4 visits)</SelectItem>
                    <SelectItem value="first">First Visit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Last Visit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">Past Week</SelectItem>
                    <SelectItem value="month">Past Month</SelectItem>
                    <SelectItem value="quarter">Past Quarter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FilterDrawer>
          <Button render={<Link to="/customers/new" />}>
            <Plus size={20} strokeWidth={1.5} />
            Add Customer
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
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-10">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => {
              const sb = statusBadge[customer.status] || statusBadge.new;
              return (
                <TableRow key={customer.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Link
                      to="/customers/$id"
                      params={{ id: customer.id }}
                      className="flex items-center gap-2 no-underline text-foreground"
                    >
                      <div className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {customer.avatar}
                        {customer.status === "vip" && (
                          <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-warning" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-xs text-muted-foreground">{customer.id}</div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail size={14} strokeWidth={1.5} />
                        {customer.email}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Phone size={14} strokeWidth={1.5} />
                        {customer.phone}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(customer.totalSpent)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-12 rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${(customer.visits / 52) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{customer.visits}</span>
                    </div>
                  </TableCell>
                  <TableCell>{customer.lastVisit}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="gap-1">
                      <span aria-hidden="true" className={`size-1.5 rounded-full ${sb.color}`} />
                      {sb.label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon-xs"
                              render={<Link to="/customers/$id" params={{ id: customer.id }} />}
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
                              size="icon-xs"
                              render={
                                <Link to="/customers/$id/edit" params={{ id: customer.id }} />
                              }
                            >
                              <Pencil size={16} strokeWidth={1.5} />
                            </Button>
                          }
                        />
                        <TooltipContent>Edit</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <Dialog>
                          <TooltipTrigger
                            render={
                              <DialogTrigger
                                render={
                                  <Button
                                    variant="ghost"
                                    size="icon-xs"
                                    className="text-destructive hover:text-destructive"
                                  >
                                    <Trash2 size={16} strokeWidth={1.5} />
                                  </Button>
                                }
                              />
                            }
                          />
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Remove {customer.name}?</DialogTitle>
                            </DialogHeader>
                            <div className="p-6 pt-2 text-center">
                              <div className="mb-4">
                                <Trash2
                                  size={48}
                                  strokeWidth={1.5}
                                  className="mx-auto text-destructive"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {customer.status === "vip" && (
                                  <span className="text-amber-600 block mb-1">
                                    <strong>{customer.name}</strong> is a <strong>VIP</strong>{" "}
                                    customer.
                                  </span>
                                )}
                                This will permanently delete <strong>{customer.name}</strong>'s
                                profile and order history.
                              </p>
                            </div>
                            <DialogFooter>
                              <DialogClose render={<Button variant="outline">Cancel</Button>} />
                              <Button variant="destructive">Delete</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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
          Showing <strong>{customers.length}</strong> customers
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
