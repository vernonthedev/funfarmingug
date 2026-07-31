import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import {
  CalendarDays,
  CheckCircle2,
  CircleDot,
  CircleMinus,
  Clock,
  Grid3x3,
  Pencil,
  Plus,
  RefreshCw,
  Trash2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FilterDrawer } from "../components/filter-drawer";
import { PageSkeleton } from "../components/page-skeleton";

export const Route = createFileRoute("/tables")({
  component: TablesPage,
  pendingComponent: PageSkeleton,
});

type TableStatus = "available" | "occupied" | "reserved" | "cleaning";

interface RestaurantTable {
  readonly id: string;
  readonly label: string;
  readonly capacity: number;
  readonly status: TableStatus;
  readonly server?: string;
  readonly posX: number;
  readonly posY: number;
  readonly shape: "round" | "rect";
  readonly location?: string;
}

interface Reservation {
  readonly id: string;
  readonly customer: string;
  readonly partySize: number;
  readonly table: string;
  readonly time: string;
  readonly notes?: string;
}

const tables: RestaurantTable[] = [
  {
    id: "T1",
    label: "Table 1",
    capacity: 2,
    status: "occupied",
    server: "Alice",
    posX: 5,
    posY: 10,
    shape: "round",
    location: "Window",
  },
  {
    id: "T2",
    label: "Table 2",
    capacity: 2,
    status: "available",
    posX: 20,
    posY: 10,
    shape: "round",
    location: "Window",
  },
  {
    id: "T3",
    label: "Table 3",
    capacity: 4,
    status: "occupied",
    server: "Alice",
    posX: 5,
    posY: 40,
    shape: "rect",
    location: "Main Floor",
  },
  {
    id: "T4",
    label: "Table 4",
    capacity: 4,
    status: "reserved",
    posX: 20,
    posY: 40,
    shape: "rect",
    location: "Main Floor",
  },
  {
    id: "T5",
    label: "Table 5",
    capacity: 6,
    status: "occupied",
    server: "Bob",
    posX: 5,
    posY: 70,
    shape: "rect",
    location: "Patio",
  },
  {
    id: "T6",
    label: "Table 6",
    capacity: 4,
    status: "available",
    posX: 20,
    posY: 70,
    shape: "rect",
    location: "Patio",
  },
  {
    id: "T7",
    label: "Table 7",
    capacity: 2,
    status: "cleaning",
    posX: 40,
    posY: 10,
    shape: "round",
    location: "Window",
  },
  {
    id: "T8",
    label: "Table 8",
    capacity: 8,
    status: "occupied",
    server: "Bob",
    posX: 40,
    posY: 40,
    shape: "rect",
    location: "VIP",
  },
  {
    id: "T9",
    label: "Table 9",
    capacity: 4,
    status: "available",
    posX: 40,
    posY: 70,
    shape: "rect",
    location: "Main Floor",
  },
  {
    id: "T10",
    label: "Table 10",
    capacity: 6,
    status: "reserved",
    posX: 60,
    posY: 10,
    shape: "rect",
    location: "Patio",
  },
  {
    id: "T11",
    label: "Table 11",
    capacity: 4,
    status: "available",
    posX: 60,
    posY: 40,
    shape: "rect",
    location: "Main Floor",
  },
  {
    id: "T12",
    label: "Table 12",
    capacity: 2,
    status: "available",
    posX: 60,
    posY: 70,
    shape: "round",
    location: "Bar",
  },
];

const reservations: Reservation[] = [
  {
    id: "RSV-001",
    customer: "Michael Brown",
    partySize: 4,
    table: "Table 4",
    time: "7:00 PM",
    notes: "Anniversary dinner",
  },
  {
    id: "RSV-002",
    customer: "Sarah Wilson",
    partySize: 6,
    table: "Table 10",
    time: "7:30 PM",
    notes: "Prefers outdoor",
  },
  { id: "RSV-003", customer: "David Lee", partySize: 2, table: "Table 2", time: "8:00 PM" },
  {
    id: "RSV-004",
    customer: "Emma Garcia",
    partySize: 4,
    table: "Table 9",
    time: "8:30 PM",
    notes: "Allergies: nuts",
  },
];

const statusConfig: Record<
  TableStatus,
  { color: string; label: string; icon: typeof CheckCircle2 }
> = {
  available: { color: "text-emerald-600", label: "Available", icon: CheckCircle2 },
  occupied: { color: "text-red-600", label: "Occupied", icon: CircleMinus },
  reserved: { color: "text-amber-600", label: "Reserved", icon: CircleDot },
  cleaning: { color: "text-muted-foreground", label: "Cleaning", icon: CircleMinus },
};

function FloorPlanView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Grid3x3 size={20} strokeWidth={1.5} />
          Floor Layout
        </CardTitle>
        <CardAction className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {tables.filter((t) => t.status === "occupied").length} / {tables.length} occupied
          </span>
          <Dialog>
            <DialogTrigger
              render={
                <Button size="sm">
                  <Plus size={16} /> Add Table
                </Button>
              }
            />
            <TableFormDialog />
          </Dialog>
        </CardAction>
      </CardHeader>
      <CardPanel>
        <div
          className="relative w-full"
          style={{
            height: 520,
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px), repeating-linear-gradient(0deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          {tables.map((table) => {
            const s = statusConfig[table.status];
            const Icon = s.icon;
            const isRound = table.shape === "round";
            return (
              <Dialog key={table.id}>
                <DialogTrigger
                  render={
                    <button
                      type="button"
                      className={`absolute flex flex-col items-center justify-center border-0 shadow-sm transition-transform hover:scale-105 ${isRound ? "rounded-full" : "rounded-lg"}`}
                      style={{
                        left: `${table.posX}%`,
                        top: `${table.posY}%`,
                        width: isRound ? 100 : 110,
                        height: isRound ? 100 : 80,
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                        backgroundColor:
                          table.status === "available"
                            ? "var(--color-emerald-50)"
                            : table.status === "occupied"
                              ? "var(--color-red-50)"
                              : table.status === "reserved"
                                ? "var(--color-amber-50)"
                                : "var(--color-gray-50)",
                        color: "inherit",
                      }}
                      title={`${table.label} — ${s.label}${table.server ? ` (Server: ${table.server})` : ""}`}
                    >
                      <Icon size={isRound ? 22 : 18} strokeWidth={2} className={s.color} />
                      <span className="font-bold mt-1 text-sm">{table.label}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users size={10} strokeWidth={2} />
                        {table.capacity}
                      </span>
                    </button>
                  }
                />
                <TableDetailDialog table={table} />
              </Dialog>
            );
          })}
        </div>
      </CardPanel>
    </Card>
  );
}

function TableDetailDialog({ table }: { table: RestaurantTable }) {
  const s = statusConfig[table.status];
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <span className={s.color}>
            <s.icon size={20} strokeWidth={1.5} />
          </span>
          {table.label}
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-muted-foreground">Capacity</div>
            <div className="font-medium">{table.capacity} seats</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Location</div>
            <div className="font-medium">{table.location || "Main Floor"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Shape</div>
            <div className="font-medium">{table.shape === "round" ? "Round" : "Rectangle"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Server</div>
            <div className="font-medium">{table.server || "Unassigned"}</div>
          </div>
        </div>
        <Badge variant="outline" className="gap-1">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${
              table.status === "available"
                ? "bg-emerald-500"
                : table.status === "occupied"
                  ? "bg-red-500"
                  : table.status === "reserved"
                    ? "bg-amber-500"
                    : "bg-muted-foreground/64"
            }`}
          />
          {s.label}
        </Badge>
        {table.status === "occupied" && (
          <>
            <Separator />
            <div>
              <p className="text-sm font-medium mb-2">Current Order</p>
              <div className="rounded-lg border p-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Steak Frites × 2</span>
                  <span>$68.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Caesar Salad × 1</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Craft Lemonade × 3</span>
                  <span>$15.00</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$95.00</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <DialogFooter>
        <div className="flex w-full gap-2 justify-between">
          <div className="flex gap-2">
            {table.status === "available" && (
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                Seat Guests
              </Button>
            )}
            {table.status === "occupied" && (
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                Process Payment
              </Button>
            )}
            {table.status === "cleaning" && (
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                Mark Available
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="outline" size="sm">
                    <Pencil size={14} /> Edit
                  </Button>
                }
              />
              <TableEditDialog table={table} />
            </Dialog>
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="destructive-outline" size="sm">
                    <Trash2 size={14} /> Delete
                  </Button>
                }
              />
              <TableDeleteDialog table={table} />
            </Dialog>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}

function TableEditDialog({ table }: { table: RestaurantTable }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit {table.label}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="flex flex-col gap-2">
          <Label>Table Label</Label>
          <Input defaultValue={table.label} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Capacity</Label>
          <Select defaultValue={String(table.capacity)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
              <SelectItem value="6">6 People</SelectItem>
              <SelectItem value="8">8 People</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Status</Label>
          <Select defaultValue={table.status}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Location</Label>
          <Select defaultValue={table.location || "Main Floor"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["Window", "Main Floor", "Patio", "VIP", "Bar"].map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Assign Server</Label>
          <Select defaultValue={table.server || ""}>
            <SelectTrigger>
              <SelectValue placeholder="Unassigned" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Unassigned</SelectItem>
              <SelectItem value="Alice">Alice</SelectItem>
              <SelectItem value="Bob">Bob</SelectItem>
              <SelectItem value="Charlie">Charlie</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline">Cancel</Button>} />
        <Button>Save Changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function TableDeleteDialog({ table }: { table: RestaurantTable }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Remove {table.label}?</DialogTitle>
      </DialogHeader>
      <div className="p-6 pt-2 text-center">
        <div className="mb-4">
          <Trash2 size={48} strokeWidth={1.5} className="mx-auto text-destructive" />
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          This will permanently remove <strong>{table.label}</strong> from the floor plan.
          {table.status === "occupied" && (
            <span className="block text-destructive mt-1">
              This table is currently occupied — proceed with caution.
            </span>
          )}
        </p>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline">Cancel</Button>} />
        <Button variant="destructive">Remove</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function TableFormDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add New Table</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="flex flex-col gap-2">
          <Label>Table Label</Label>
          <Input placeholder="e.g. Table 13" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Capacity</Label>
          <Select defaultValue="4">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
              <SelectItem value="6">6 People</SelectItem>
              <SelectItem value="8">8 People</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Shape</Label>
          <Select defaultValue="rect">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="round">Round</SelectItem>
              <SelectItem value="rect">Rectangle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Location</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {["Window", "Main Floor", "Patio", "VIP", "Bar"].map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Status</Label>
          <Select defaultValue="available">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline">Cancel</Button>} />
        <Button>Add Table</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function ReservationDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Reservation</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="flex flex-col gap-2">
          <Label>Customer Name</Label>
          <Input placeholder="Enter name…" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <Label>Party Size</Label>
            <Input type="number" defaultValue={2} min={1} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Time</Label>
            <Input type="time" defaultValue="19:00" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Table Assignment</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Auto-assign" />
            </SelectTrigger>
            <SelectContent>
              {tables
                .filter((t) => t.status === "available")
                .map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.label} ({t.capacity} seats)
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Notes</Label>
          <Textarea rows={2} placeholder="Any special requests…" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline">Cancel</Button>} />
        <Button>Create Reservation</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function TablesPage() {
  const location = useLocation();

  if (location.pathname !== "/tables") {
    return <Outlet />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Floor Management</p>
          <h1 className="text-2xl font-bold">Tables & Floor Plan</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {tables.filter((t) => t.status === "occupied").length} of {tables.length} tables
            occupied
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FilterDrawer title="Table Filters">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Statuses</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="occupied">Occupied</SelectItem>
                    <SelectItem value="reserved">Reserved</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Capacity</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Size</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="6">6 People</SelectItem>
                    <SelectItem value="8">8+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {["Window", "Main Floor", "Patio", "VIP", "Bar"].map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FilterDrawer>
          <Button variant="outline">
            <RefreshCw size={20} strokeWidth={1.5} />
            Refresh
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="text-xs font-medium text-muted-foreground">Legend:</span>
        {(Object.keys(statusConfig) as TableStatus[]).map((key) => {
          const s = statusConfig[key];
          const Icon = s.icon;
          return (
            <div key={key} className={`flex items-center gap-1 ${s.color}`}>
              <Icon size={16} strokeWidth={2} />
              <span>{s.label}</span>
            </div>
          );
        })}
        <span className="ml-auto text-xs text-muted-foreground hidden md:flex items-center gap-1">
          <Users size={14} strokeWidth={1.5} />
          {tables.reduce((sum, t) => sum + t.capacity, 0)} total seats
        </span>
      </div>

      <FloorPlanView />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <CalendarDays size={20} strokeWidth={1.5} />
              Today's Reservations
            </h3>
            <Dialog>
              <DialogTrigger
                render={
                  <Button size="sm">
                    <Plus size={16} /> New Reservation
                  </Button>
                }
              />
              <ReservationDialog />
            </Dialog>
          </div>
          <Frame className="w-full">
            <Table variant="card">
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Party</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="w-1" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((rsv) => (
                  <TableRow key={rsv.id}>
                    <TableCell className="font-medium">{rsv.customer}</TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1">
                        <Users size={14} strokeWidth={1.5} />
                        {rsv.partySize}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{rsv.table}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={14} strokeWidth={1.5} />
                        {rsv.time}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {rsv.notes || "—"}
                    </TableCell>
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button variant="ghost" size="icon-sm">
                              <Pencil size={14} strokeWidth={1.5} />
                            </Button>
                          }
                        />
                        <TooltipContent>Edit reservation</TooltipContent>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Frame>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardPanel>
            <div className="space-y-3">
              {(
                [
                  {
                    label: "Available",
                    count: tables.filter((t) => t.status === "available").length,
                    color: "bg-emerald-500",
                  },
                  {
                    label: "Occupied",
                    count: tables.filter((t) => t.status === "occupied").length,
                    color: "bg-red-500",
                  },
                  {
                    label: "Reserved",
                    count: tables.filter((t) => t.status === "reserved").length,
                    color: "bg-amber-500",
                  },
                  {
                    label: "Cleaning",
                    count: tables.filter((t) => t.status === "cleaning").length,
                    color: "bg-muted-foreground",
                  },
                ] as const
              ).map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`size-2.5 rounded-full shrink-0 ${stat.color}`} />
                  <span className="flex-1 text-sm text-muted-foreground">{stat.label}</span>
                  <span className="font-bold text-sm">{stat.count}</span>
                </div>
              ))}
            </div>
            <Separator className="my-3" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Capacity</span>
                <span className="font-bold">{tables.reduce((sum, t) => sum + t.capacity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Servers</span>
                <span className="font-bold">
                  {new Set(tables.filter((t) => t.server).map((t) => t.server)).size}
                </span>
              </div>
            </div>
          </CardPanel>
        </Card>
      </div>
    </div>
  );
}
