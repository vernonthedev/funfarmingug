import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChefHat,
  Clock,
  Flame,
  MessageSquare,
  Pencil,
  Play,
  RefreshCw,
  Square,
  X,
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { FilterDrawer } from "../components/filter-drawer";
import { PageSkeleton } from "../components/page-skeleton";

export const Route = createFileRoute("/kitchen")({
  component: KitchenPage,
  pendingComponent: PageSkeleton,
});

type TicketStatus = "pending" | "preparing" | "ready" | "completed";

interface KitchenTicket {
  readonly id: string;
  readonly orderId: string;
  readonly table: string;
  readonly items: readonly { name: string; qty: number; notes?: string }[];
  readonly status: TicketStatus;
  readonly station: string;
  readonly elapsed: string;
  readonly priority: "normal" | "rush";
  readonly server?: string;
}

interface KitchenStation {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
}

const stations: KitchenStation[] = [
  { id: "all", name: "All Stations", active: true },
  { id: "grill", name: "Grill", active: true },
  { id: "saute", name: "Sauté", active: true },
  { id: "cold", name: "Cold Prep", active: true },
  { id: "pastry", name: "Pastry", active: true },
];

const tickets: KitchenTicket[] = [
  {
    id: "TKT-0423",
    orderId: "ORD-0423",
    table: "Table 5",
    station: "grill",
    status: "pending",
    priority: "rush",
    elapsed: "2 min",
    server: "Alice",
    items: [
      { name: "Steak Frites", qty: 2, notes: "Medium rare" },
      { name: "Grilled Salmon", qty: 1, notes: "No asparagus" },
    ],
  },
  {
    id: "TKT-0422",
    orderId: "ORD-0422",
    table: "Table 3",
    station: "saute",
    status: "pending",
    priority: "normal",
    elapsed: "5 min",
    server: "Alice",
    items: [
      { name: "Chicken Alfredo", qty: 2 },
      { name: "Mushroom Risotto", qty: 1, notes: "Vegan" },
    ],
  },
  {
    id: "TKT-0421",
    orderId: "ORD-0421",
    table: "Table 8",
    station: "grill",
    status: "preparing",
    priority: "normal",
    elapsed: "12 min",
    server: "Bob",
    items: [
      { name: "BBQ Ribs", qty: 1 },
      { name: "Lamb Chops", qty: 2, notes: "Well done" },
    ],
  },
  {
    id: "TKT-0420",
    orderId: "ORD-0420",
    table: "Table 2",
    station: "cold",
    status: "preparing",
    priority: "rush",
    elapsed: "8 min",
    server: "Charlie",
    items: [
      { name: "Caesar Salad", qty: 2, notes: "No croutons" },
      { name: "Shrimp Cocktail", qty: 1 },
    ],
  },
  {
    id: "TKT-0419",
    orderId: "ORD-0419",
    table: "Table 12",
    station: "pastry",
    status: "ready",
    priority: "normal",
    elapsed: "18 min",
    server: "Alice",
    items: [
      { name: "Tiramisu", qty: 2 },
      { name: "Chocolate Lava Cake", qty: 1 },
    ],
  },
  {
    id: "TKT-0418",
    orderId: "ORD-0418",
    table: "Table 6",
    station: "grill",
    status: "ready",
    priority: "normal",
    elapsed: "22 min",
    server: "Bob",
    items: [{ name: "Steak Frites", qty: 1, notes: "Rare" }],
  },
  {
    id: "TKT-0417",
    orderId: "ORD-0417",
    table: "Table 4",
    station: "saute",
    status: "completed",
    priority: "normal",
    elapsed: "35 min",
    server: "Charlie",
    items: [
      { name: "Vegetable Stir Fry", qty: 1 },
      { name: "Garlic Bread", qty: 2 },
    ],
  },
  {
    id: "TKT-0416",
    orderId: "ORD-0416",
    table: "Table 9",
    station: "cold",
    status: "completed",
    priority: "normal",
    elapsed: "28 min",
    server: "Bob",
    items: [
      { name: "Bruschetta", qty: 3 },
      { name: "Calamari", qty: 1 },
    ],
  },
];

const columns: { id: TicketStatus; label: string; icon: typeof Clock; color: string }[] = [
  { id: "pending", label: "Pending", icon: Clock, color: "text-amber-600" },
  { id: "preparing", label: "Preparing", icon: Flame, color: "text-blue-600" },
  { id: "ready", label: "Ready", icon: Check, color: "text-emerald-600" },
  { id: "completed", label: "Completed", icon: Square, color: "text-muted-foreground" },
];

function TicketCard({ ticket }: { ticket: KitchenTicket }) {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={
          <div
            className={`rounded-lg border p-3 cursor-pointer mb-2 transition-shadow hover:shadow-sm ${ticket.status === "completed" ? "opacity-50" : ""} ${ticket.priority === "rush" ? "border-amber-400 border-2" : ""}`}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm">{ticket.table}</span>
                {ticket.priority === "rush" && (
                  <Badge variant="warning" size="sm" className="text-[0.6rem]">
                    <AlertCircle size={10} strokeWidth={2} />
                    RUSH
                  </Badge>
                )}
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} strokeWidth={1.5} />
                {ticket.elapsed}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {ticket.items.map((item, i) => (
                <Badge key={i} variant="secondary" size="sm" className="font-normal">
                  {item.qty}x {item.name}
                  {item.notes && (
                    <span className="text-destructive ms-1" title={item.notes}>
                      *
                    </span>
                  )}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between text-[0.6rem] text-muted-foreground">
              <span>
                <ChefHat size={10} strokeWidth={1.5} className="inline me-1" />
                {ticket.station}
                {ticket.server && ` · ${ticket.server}`}
              </span>
              <span>{ticket.id}</span>
            </div>
          </div>
        }
      />
      <TicketDetailDialog ticket={ticket} />
    </Dialog>
  );
}

function TicketDetailDialog({ ticket }: { ticket: KitchenTicket }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <ChefHat size={20} strokeWidth={1.5} />
          {ticket.table} · {ticket.id}
          {ticket.priority === "rush" && (
            <Badge variant="warning" size="sm">
              <AlertCircle size={12} strokeWidth={2} />
              RUSH
            </Badge>
          )}
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div>
            <div className="text-xs text-muted-foreground">Order ID</div>
            <div className="font-medium">{ticket.orderId}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Station</div>
            <div className="font-medium capitalize">{ticket.station}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Server</div>
            <div className="font-medium">{ticket.server || "—"}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Elapsed</div>
            <div className="font-medium">{ticket.elapsed}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Status</div>
            <div className="font-medium">
              {columns.find((c) => c.id === ticket.status)?.label || ticket.status}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Priority</div>
            <Badge variant={ticket.priority === "rush" ? "warning" : "secondary"} size="sm">
              {ticket.priority === "rush" ? "Rush" : "Normal"}
            </Badge>
          </div>
        </div>
        <Separator />
        <div>
          <p className="text-sm font-medium mb-2">Order Items</p>
          <div className="space-y-2">
            {ticket.items.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div>
                  <span className="font-medium">
                    {item.qty}× {item.name}
                  </span>
                  {item.notes && (
                    <p className="text-destructive text-xs mt-0.5">
                      <MessageSquare size={12} strokeWidth={1.5} className="inline me-1" />
                      {item.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <p className="text-sm font-medium mb-2 flex items-center gap-1">
            <Pencil size={16} strokeWidth={1.5} />
            Modifications & Notes
          </p>
          <Textarea rows={2} placeholder="Add a note for this ticket…" />
        </div>
      </div>
      <DialogFooter>
        {ticket.status === "pending" && (
          <div className="flex w-full gap-2">
            <DialogClose
              render={
                <Button variant="outline" className="flex-1">
                  <X size={16} /> Close
                </Button>
              }
            />
            <Button className="flex-1">
              <Play size={16} /> Start Preparing
            </Button>
          </div>
        )}
        {ticket.status === "preparing" && (
          <div className="flex w-full gap-2">
            <DialogClose
              render={
                <Button variant="outline" className="flex-1">
                  <X size={16} /> Close
                </Button>
              }
            />
            <Button className="flex-1">
              <Check size={16} /> Mark Ready
            </Button>
          </div>
        )}
        {ticket.status === "ready" && (
          <div className="flex w-full gap-2">
            <DialogClose
              render={
                <Button variant="outline" className="flex-1">
                  <X size={16} /> Close
                </Button>
              }
            />
            <Button className="flex-1">
              <ArrowRight size={16} /> Serve
            </Button>
          </div>
        )}
        {ticket.status === "completed" && (
          <DialogClose
            render={
              <Button variant="outline" className="flex-1">
                Close
              </Button>
            }
          />
        )}
      </DialogFooter>
    </DialogContent>
  );
}

function KitchenPage() {
  const activeTickets = tickets.filter((t) => t.status !== "completed");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Back of House</p>
          <h1 className="text-2xl font-bold">Kitchen Display</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {activeTickets.length} active tickets ·{" "}
            {tickets.filter((t) => t.status === "pending").length} pending
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FilterDrawer title="Kitchen Filters">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Station</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Stations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Stations</SelectItem>
                    {stations
                      .filter((s) => s.id !== "all")
                      .map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    <SelectItem value="rush">Rush</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Server</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Server" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Server</SelectItem>
                    <SelectItem value="Alice">Alice</SelectItem>
                    <SelectItem value="Bob">Bob</SelectItem>
                    <SelectItem value="Charlie">Charlie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FilterDrawer>
          <Button variant="outline">
            <RefreshCw size={20} strokeWidth={1.5} /> Refresh
          </Button>
          <Badge variant="success" className="gap-1 px-3 py-2">
            <span className="size-1.5 rounded-full bg-current" />
            Live
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ minHeight: "70vh" }}>
        {columns.map((col) => {
          const colTickets = tickets.filter((t) => t.status === col.id);
          const Icon = col.icon;
          return (
            <Card key={col.id} className="flex flex-col">
              <CardHeader className={`border-b ${col.color}`}>
                <CardTitle className="flex items-center gap-2">
                  <Icon size={20} strokeWidth={1.5} className={col.color} />
                  {col.label}
                </CardTitle>
                <CardAction>
                  <Badge variant={col.id === "completed" ? "secondary" : "default"}>
                    {colTickets.length}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardPanel
                className="flex-1 overflow-y-auto p-2"
                style={{ maxHeight: "calc(100vh - 300px)" }}
              >
                {colTickets.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-muted-foreground/50 py-8">
                    <Check size={32} strokeWidth={1} />
                    <span className="text-sm mt-2">All clear</span>
                  </div>
                ) : (
                  colTickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
                )}
              </CardPanel>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
