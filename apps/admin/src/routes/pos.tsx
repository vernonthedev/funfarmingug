import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Banknote,
  Check,
  CreditCard,
  Delete,
  FileText,
  Minus,
  Percent,
  Plus,
  Printer,
  Receipt,
  Search,
  Smartphone,
  Trash2,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuItem,
  DrawerMenuSeparator,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";
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
import { PageSkeleton } from "../components/page-skeleton";
import { formatCurrency } from "../lib/format";

export const Route = createFileRoute("/pos")({
  component: POSPage,
  pendingComponent: PageSkeleton,
});

interface POSItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
}

interface CartItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  quantity: number;
  notes?: string;
}

const categories = ["All", "Appetizers", "Mains", "Sides", "Desserts", "Beverages"] as const;

const posItems: POSItem[] = [
  { id: "ITM-001", name: "Caesar Salad", category: "Appetizers", price: 12.0 },
  { id: "ITM-002", name: "Bruschetta", category: "Appetizers", price: 9.5 },
  { id: "ITM-003", name: "Shrimp Cocktail", category: "Appetizers", price: 16.0 },
  { id: "ITM-004", name: "French Onion Soup", category: "Appetizers", price: 10.0 },
  { id: "ITM-005", name: "Grilled Salmon", category: "Mains", price: 28.0 },
  { id: "ITM-006", name: "Steak Frites", category: "Mains", price: 34.0 },
  { id: "ITM-007", name: "Chicken Alfredo", category: "Mains", price: 22.0 },
  { id: "ITM-008", name: "BBQ Ribs", category: "Mains", price: 32.0 },
  { id: "ITM-009", name: "Vegetable Stir Fry", category: "Mains", price: 18.0 },
  { id: "ITM-010", name: "Lamb Chops", category: "Mains", price: 38.0 },
  { id: "ITM-011", name: "Mushroom Risotto", category: "Mains", price: 24.0 },
  { id: "ITM-012", name: "Truffle Fries", category: "Sides", price: 8.0 },
  { id: "ITM-013", name: "Garlic Bread", category: "Sides", price: 6.0 },
  { id: "ITM-014", name: "Seasonal Vegetables", category: "Sides", price: 7.0 },
  { id: "ITM-015", name: "Tiramisu", category: "Desserts", price: 11.0 },
  { id: "ITM-016", name: "Panna Cotta", category: "Desserts", price: 10.0 },
  { id: "ITM-017", name: "Chocolate Lava Cake", category: "Desserts", price: 13.0 },
  { id: "ITM-018", name: "Crème Brûlée", category: "Desserts", price: 12.0 },
  { id: "ITM-019", name: "Craft Lemonade", category: "Beverages", price: 5.0 },
  { id: "ITM-020", name: "Iced Tea", category: "Beverages", price: 4.0 },
  { id: "ITM-021", name: "Espresso", category: "Beverages", price: 3.5 },
  { id: "ITM-022", name: "Mango Smoothie", category: "Beverages", price: 6.5 },
];

function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTable, setSelectedTable] = useState("Table 5");
  const [orderType, setOrderType] = useState("dine-in");
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedServer, setSelectedServer] = useState("Alice");
  const [guests, setGuests] = useState(2);
  const [createOrderOpen, setCreateOrderOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);

  const filteredItems = useMemo(
    () =>
      posItems.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [selectedCategory, searchQuery],
  );

  const addToCart = (item: POSItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) => (ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => (ci.id === id ? { ...ci, quantity: Math.max(0, ci.quantity + delta) } : ci))
        .filter((ci) => ci.quantity > 0),
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartItemIds = useMemo(() => new Set(cart.map((ci) => ci.id)), [cart]);

  const subtotal = cart.reduce((sum, ci) => sum + ci.price * ci.quantity, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div
      className="flex overflow-hidden rounded-2xl"
      style={{ height: "calc(100svh - 16px)", margin: "calc(-1.5rem)" }}
    >
      {/* Left: Menu Grid */}
      <div className="flex flex-1 flex-col min-w-0 min-h-0 border-r">
        {/* Toolbar */}
        <div className="flex items-center gap-3 border-b bg-background px-4 py-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search menu items…"
              className="ps-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Drawer position="top" open={createOrderOpen} onOpenChange={setCreateOrderOpen}>
            <DrawerTrigger render={<span />} />
            <OrderDetailsDrawer
              selectedTable={selectedTable}
              orderType={orderType}
              guests={guests}
              selectedCustomer={selectedCustomer}
              selectedServer={selectedServer}
              onTableChange={setSelectedTable}
              onOrderTypeChange={setOrderType}
              onGuestsChange={setGuests}
              onCustomerChange={setSelectedCustomer}
              onServerChange={setSelectedServer}
            />
          </Drawer>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              clearCart();
              setSelectedTable("Table 5");
              setOrderType("dine-in");
              setSelectedCustomer(null);
              setSelectedServer("Alice");
              setGuests(2);
              setCreateOrderOpen(true);
            }}
          >
            <Plus size={18} strokeWidth={1.5} />
            New Order
          </Button>
          <Drawer position="right" open={receiptOpen} onOpenChange={setReceiptOpen}>
            <OrderDetailsSheet
              cart={cart}
              subtotal={subtotal}
              tax={tax}
              total={total}
              selectedTable={selectedTable}
              orderType={orderType}
              guests={guests}
              selectedCustomer={selectedCustomer}
              selectedServer={selectedServer}
            />
          </Drawer>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b bg-background px-4 py-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-auto bg-muted/20 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredItems.map((item) => {
              const inCart = cartItemIds.has(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  className={
                    "flex flex-col items-start gap-2 rounded-xl border p-3 text-left text-sm font-medium shadow-xs transition-all hover:shadow-sm " +
                    (inCart
                      ? "border-primary/50 bg-primary/[0.06] ring-1 ring-primary/20"
                      : "bg-card")
                  }
                  onClick={() => addToCart(item)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <div
                      className={
                        "flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold " +
                        (inCart
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary")
                      }
                    >
                      {inCart ? "+" : item.name.charAt(0)}
                    </div>
                    <span className="flex-1 truncate font-medium">{item.name}</span>
                    {inCart && (
                      <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-px text-[10px] font-semibold text-primary">
                        {cart.find((ci) => ci.id === item.id)?.quantity ?? 0}x
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-base">{formatCurrency(item.price)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Cart */}
      <div className="flex w-full max-w-sm flex-col min-h-0">
        {/* Cart Header */}
        <div className="border-b bg-background p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Receipt size={24} strokeWidth={1.5} />
              Current Order
            </h3>
            <Button variant="ghost" size="sm" className="text-destructive" onClick={clearCart}>
              <Trash2 size={18} strokeWidth={1.5} />
              Clear
            </Button>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setReceiptOpen(true)}>
              <FileText size={18} strokeWidth={1.5} />
              Order Details
            </Button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto px-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-muted-foreground/50 py-12">
              <Receipt size={48} strokeWidth={1} />
              <p className="text-sm mt-2">No items in order</p>
              <p className="text-xs">Click menu items to add them</p>
            </div>
          ) : (
            cart.map((ci) => (
              <div key={ci.id} className="border-b py-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0 me-2">
                    <div className="font-semibold">
                      {ci.name} × {ci.quantity}
                    </div>
                    {ci.notes && <div className="text-xs text-muted-foreground">{ci.notes}</div>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold">{formatCurrency(ci.price * ci.quantity)}</span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(ci.id)}
                    >
                      <X size={18} strokeWidth={1.5} />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon-xs"
                    onClick={() => updateQuantity(ci.id, -1)}
                  >
                    <Minus size={18} />
                  </Button>
                  <span className="flex items-center justify-center w-9 font-bold text-sm">
                    {ci.quantity}
                  </span>
                  <Button variant="outline" size="icon-xs" onClick={() => updateQuantity(ci.id, 1)}>
                    <Plus size={18} />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        <div className="border-t bg-background p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax (8%)</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              <Dialog>
                <DialogTrigger
                  render={
                    <Button variant="ghost" size="sm">
                      <Percent size={16} /> Discount
                    </Button>
                  }
                />
                <DiscountDialog />
              </Dialog>
            </span>
            <span className="text-emerald-600">−{formatCurrency(0)}</span>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-2xl">{formatCurrency(total)}</span>
          </div>
          <div className="space-y-2 pt-1">
            <Dialog>
              <DialogTrigger
                render={
                  <Button className="w-full h-11 text-base" disabled={cart.length === 0}>
                    <Receipt size={24} strokeWidth={1.5} />
                    Charge {formatCurrency(total)}
                  </Button>
                }
              />
              <PaymentDialog total={total} />
            </Dialog>
            <div className="flex gap-2">
              <Drawer position="bottom">
                <DrawerTrigger
                  render={
                    <Button variant="outline" className="flex-1">
                      <FileText size={20} /> Add Notes
                    </Button>
                  }
                />
                <NotesDrawer />
              </Drawer>
              <Button variant="outline" className="flex-1" disabled={cart.length === 0}>
                <Receipt size={20} />
                Send to Kitchen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tables = [
  "Table 1",
  "Table 2",
  "Table 3",
  "Table 4",
  "Table 5",
  "Table 6",
  "Table 7",
  "Table 8",
  "Table 9",
  "Table 10",
  "Table 11",
  "Table 12",
];

const servers = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah"];

const recentCustomers = [
  { name: "Jane Smith", phone: "+1 (555) 234-5678" },
  { name: "Michael Brown", phone: "+1 (555) 345-6789" },
  { name: "Emily Davis", phone: "+1 (555) 456-7890" },
  { name: "Robert Wilson", phone: "+1 (555) 567-8901" },
  { name: "Sarah Johnson", phone: "+1 (555) 678-9012" },
  { name: "David Lee", phone: "+1 (555) 789-0123" },
  { name: "Lisa Anderson", phone: "+1 (555) 890-1234" },
  { name: "James Taylor", phone: "+1 (555) 901-2345" },
  { name: "Maria Garcia", phone: "+1 (555) 012-3456" },
  { name: "Thomas Martinez", phone: "+1 (555) 123-4567" },
  { name: "Jennifer Robinson", phone: "+1 (555) 234-5679" },
  { name: "Christopher Clark", phone: "+1 (555) 345-6780" },
];

function OrderDetailsDrawer({
  selectedTable,
  orderType,
  guests,
  selectedCustomer,
  selectedServer,
  onTableChange,
  onOrderTypeChange,
  onGuestsChange,
  onCustomerChange,
  onServerChange,
}: {
  selectedTable: string;
  orderType: string;
  guests: number;
  selectedCustomer: string | null;
  selectedServer: string;
  onTableChange: (v: string) => void;
  onOrderTypeChange: (v: string) => void;
  onGuestsChange: (v: number) => void;
  onCustomerChange: (v: string | null) => void;
  onServerChange: (v: string) => void;
}) {
  const [step, setStep] = useState(1);
  const [customerSearch, setCustomerSearch] = useState("");
  const [showNewCustomer, setShowNewCustomer] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [serverSearch, setServerSearch] = useState("");

  const steps = [
    { label: "Table & Type", icon: User },
    { label: "Customer", icon: Users },
    { label: "Server", icon: User },
  ];

  const filteredCustomers = recentCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
      c.phone.includes(customerSearch),
  );

  const filteredServers = servers.filter((s) =>
    s.toLowerCase().includes(serverSearch.toLowerCase()),
  );

  const createAndSelectCustomer = () => {
    if (!newName.trim()) return;
    onCustomerChange(newName.trim());
    setShowNewCustomer(false);
    setNewName("");
    setNewPhone("");
  };

  return (
    <DrawerPopup showBar className="max-h-[85vh]">
      <DrawerHeader className="pb-2">
        <div className="flex items-center justify-between">
          <DrawerTitle>Order Details</DrawerTitle>
          <DrawerClose
            render={
              <Button variant="ghost" size="icon">
                <X size={20} />
              </Button>
            }
          />
        </div>
        {/* Step Tabs - Lined Stepper */}
        <div className="flex items-center justify-center gap-0 pt-3 pb-1">
          {steps.map((s, i) => {
            const stepNum = i + 1;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;
            return (
              <React.Fragment key={s.label}>
                <button
                  type="button"
                  className="flex flex-col items-center gap-1"
                  onClick={() => stepNum < step && setStep(stepNum)}
                  disabled={stepNum >= step}
                >
                  <div
                    className={`flex size-8 items-center justify-center rounded-full text-xs font-bold border-2 transition-colors ${
                      isActive || isComplete
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30 text-muted-foreground"
                    }`}
                  >
                    {isComplete ? (
                      <Check size={14} strokeWidth={3} />
                    ) : (
                      <span className="tabular-nums">{stepNum}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors ${
                      isActive
                        ? "text-primary"
                        : isComplete
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 h-px transition-colors ${
                      step > stepNum ? "bg-primary" : "bg-muted-foreground/20"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </DrawerHeader>

      <DrawerPanel scrollable={false}>
        <div className="mx-auto w-full max-w-sm space-y-4">
          {/* Step 1: Table & Type */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <Label>Table</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {tables.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                        selectedTable === t
                          ? "border-primary bg-primary text-primary-foreground shadow-xs"
                          : "bg-card hover:bg-accent border-border"
                      }`}
                      onClick={() => onTableChange(t)}
                    >
                      {t.replace("Table ", "T")}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Order Type</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { value: "dine-in", label: "Dine In" },
                    { value: "takeaway", label: "Takeaway" },
                    { value: "delivery", label: "Delivery" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`rounded-lg border px-2 py-3 text-center text-sm font-semibold transition-colors ${
                        orderType === opt.value
                          ? "border-primary bg-primary text-primary-foreground shadow-xs"
                          : "bg-card hover:bg-accent border-border"
                      }`}
                      onClick={() => onOrderTypeChange(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Number of Guests</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-12 rounded-xl"
                    onClick={() => onGuestsChange(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    <Minus size={20} strokeWidth={2} />
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-semibold tabular-nums">{guests}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-12 rounded-xl"
                    onClick={() => onGuestsChange(Math.min(20, guests + 1))}
                    disabled={guests >= 20}
                  >
                    <Plus size={20} strokeWidth={2} />
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Customer */}
          {step === 2 && (
            <>
              {showNewCustomer ? (
                <div className="space-y-3">
                  <p className="font-medium text-sm">New Customer</p>
                  <div className="flex flex-col gap-2">
                    <Label>Name</Label>
                    <Input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Customer name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Phone</Label>
                    <Input
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Press Continue to create and proceed
                  </p>
                </div>
              ) : (
                <>
                  {/* Walk-in Option */}
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                      selectedCustomer === "Walk-in"
                        ? "border-primary bg-primary/[0.06] ring-1 ring-primary/20"
                        : "bg-card hover:bg-accent"
                    }`}
                    onClick={() => onCustomerChange("Walk-in")}
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                      <User size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">Walk-in Customer</p>
                      <p className="text-xs text-muted-foreground">No details needed</p>
                    </div>
                    {selectedCustomer === "Walk-in" && (
                      <Check size={18} className="shrink-0 text-primary" strokeWidth={2.5} />
                    )}
                  </button>

                  {/* New Customer Option */}
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border bg-card p-3 text-left hover:bg-accent transition-colors"
                    onClick={() => setShowNewCustomer(true)}
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <UserPlus size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">New Customer</p>
                      <p className="text-xs text-muted-foreground">Create a new profile</p>
                    </div>
                  </button>

                  {/* Search / Recent Customers */}
                  <InputGroup>
                    <InputGroupAddon>
                      <Search size={18} />
                    </InputGroupAddon>
                    <Input
                      placeholder="Search customers…"
                      value={customerSearch}
                      onChange={(e) => setCustomerSearch(e.target.value)}
                    />
                  </InputGroup>

                  <div className="space-y-1 max-h-60 overflow-y-auto">
                    {(customerSearch ? filteredCustomers : recentCustomers.slice(0, 5)).map((c) => (
                      <button
                        key={c.phone}
                        type="button"
                        className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                          selectedCustomer === c.name
                            ? "border-primary bg-primary/[0.06] ring-1 ring-primary/20"
                            : "bg-card hover:bg-accent"
                        }`}
                        onClick={() => onCustomerChange(c.name)}
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm font-bold">
                          {c.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.phone}</p>
                        </div>
                        {selectedCustomer === c.name && (
                          <Check size={18} className="shrink-0 text-primary" strokeWidth={2.5} />
                        )}
                      </button>
                    ))}
                    {customerSearch && filteredCustomers.length === 0 && (
                      <p className="py-2 text-center text-xs text-muted-foreground">
                        No customers found
                      </p>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          {/* Step 3: Server */}
          {step === 3 && (
            <div className="space-y-3">
              <InputGroup>
                <InputGroupAddon>
                  <Search size={18} />
                </InputGroupAddon>
                <Input
                  placeholder="Search servers…"
                  value={serverSearch}
                  onChange={(e) => setServerSearch(e.target.value)}
                />
              </InputGroup>
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {(serverSearch ? filteredServers : servers).map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                      selectedServer === s
                        ? "border-primary bg-primary/[0.06] ring-1 ring-primary/20"
                        : "bg-card hover:bg-accent"
                    }`}
                    onClick={() => onServerChange(s)}
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-bold">
                      {s.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{s}</p>
                      <p className="text-xs text-muted-foreground">Server</p>
                    </div>
                    {selectedServer === s && (
                      <Check size={18} className="shrink-0 text-primary" strokeWidth={2.5} />
                    )}
                  </button>
                ))}
                {serverSearch && filteredServers.length === 0 && (
                  <p className="py-2 text-center text-xs text-muted-foreground">No servers found</p>
                )}
              </div>
            </div>
          )}
        </div>
      </DrawerPanel>

      <DrawerFooter variant="bare">
        <div className="mx-auto w-full max-w-sm flex gap-2">
          {step > 1 ? (
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                if (step === 2 && showNewCustomer) {
                  setShowNewCustomer(false);
                } else {
                  setStep(step - 1);
                }
              }}
            >
              Back
            </Button>
          ) : (
            <DrawerClose render={<Button variant="outline" className="flex-1" />}>
              Cancel
            </DrawerClose>
          )}
          {step < 3 ? (
            <Button
              className="flex-1"
              onClick={() => {
                if (step === 2 && showNewCustomer) {
                  createAndSelectCustomer();
                }
                setStep(step + 1);
              }}
            >
              {step === 2 && showNewCustomer ? "Create & Continue" : "Continue"}
            </Button>
          ) : (
            <DrawerClose render={<Button className="flex-1" />}>Done</DrawerClose>
          )}
        </div>
      </DrawerFooter>
    </DrawerPopup>
  );
}

function OrderDetailsSheet({
  cart,
  subtotal,
  tax,
  total,
  selectedTable,
  orderType,
  guests,
  selectedCustomer,
  selectedServer,
}: {
  cart: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  selectedTable: string;
  orderType: string;
  guests: number;
  selectedCustomer: string | null;
  selectedServer: string;
}) {
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  const orderTypeLabel =
    orderType === "dine-in" ? "Dine In" : orderType === "takeaway" ? "Takeaway" : "Delivery";

  return (
    <DrawerPopup showBar variant="straight" className="max-h-[90vh]">
      <DrawerHeader className="text-center pb-3">
        <DrawerClose
          render={
            <Button variant="ghost" size="icon" className="absolute end-4 top-4">
              <X size={20} />
            </Button>
          }
        />
        <div className="pt-2">
          <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Receipt size={22} strokeWidth={1.5} className="text-primary" />
          </div>
          <DrawerTitle className="text-lg">Order Details</DrawerTitle>
          <p className="text-xs text-muted-foreground mt-0.5">
            Order #ORD-{Date.now().toString(36).toUpperCase().slice(-6)}
          </p>
        </div>
      </DrawerHeader>

      <DrawerPanel scrollable={false}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Table
              </p>
              <p className="font-medium">{selectedTable}</p>
            </div>
            <div className="space-y-1 text-end">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Type
              </p>
              <p className="font-medium">{orderTypeLabel}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Guests
              </p>
              <p className="font-medium">{guests}</p>
            </div>
            <div className="space-y-1 text-end">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Items
              </p>
              <p className="font-medium">{itemCount}</p>
            </div>
          </div>

          {selectedCustomer && (
            <div className="space-y-1 text-sm">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Customer
              </p>
              <p className="font-medium">{selectedCustomer}</p>
            </div>
          )}

          {selectedServer && (
            <div className="space-y-1 text-sm">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Server
              </p>
              <p className="font-medium">{selectedServer}</p>
            </div>
          )}

          <div className="border-t border-dashed" />

          <div className="space-y-2">
            {cart.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">No items in order</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-2 text-sm">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="shrink-0 font-medium text-muted-foreground tabular-nums">
                      {item.quantity}x
                    </span>
                    <span className="truncate">{item.name}</span>
                  </div>
                  <span className="shrink-0 font-medium tabular-nums">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-dashed" />

          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="tabular-nums">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (8%)</span>
              <span className="tabular-nums">{formatCurrency(tax)}</span>
            </div>
            <div className="flex justify-between border-t pt-1.5 text-base font-semibold">
              <span>Total</span>
              <span className="tabular-nums">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </DrawerPanel>

      <DrawerFooter className="flex-col">
        <DrawerMenu>
          <DrawerMenuItem>Edit Items</DrawerMenuItem>
          <DrawerMenuSeparator />
          <DrawerMenuItem>Table</DrawerMenuItem>
          <DrawerMenuSeparator />
          <DrawerMenuItem>Customer</DrawerMenuItem>
          <DrawerMenuSeparator />
          <DrawerMenuItem>Server</DrawerMenuItem>
        </DrawerMenu>
      </DrawerFooter>
    </DrawerPopup>
  );
}

function PaymentDialog({ total }: { total: number }) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amountPaid, setAmountPaid] = useState("");

  const paidNum = parseFloat(amountPaid || "0");
  const changeDue = paidNum >= total ? paidNum - total : 0;

  const handleNumpad = (value: string) => {
    setAmountPaid((prev) => {
      if (value === "backspace") return prev.slice(0, -1);
      if (value === "clear") return "";
      if (value === "." && prev.includes(".")) return prev;
      const parts = prev.split(".");
      if (parts[1] && parts[1].length >= 2) return prev;
      return prev + value;
    });
  };

  const payMethods = [
    {
      id: "cash" as const,
      icon: Banknote,
      label: "Cash",
      desc: "Physical currency",
      action: () => setSelectedMethod("cash"),
    },
    { id: "card" as const, icon: CreditCard, label: "Card", desc: "Credit or debit" },
    { id: "mobile" as const, icon: Smartphone, label: "Mobile", desc: "Tap to pay" },
    { id: "split" as const, icon: Users, label: "Split", desc: "Divide between guests" },
  ];

  if (selectedMethod === "cash") {
    return (
      <DialogContent>
        <button
          type="button"
          className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent transition-colors"
          onClick={() => {
            setSelectedMethod(null);
            setAmountPaid("");
          }}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Back
        </button>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 justify-center">
            <Banknote size={20} strokeWidth={1.5} />
            Cash Payment
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6 pt-2">
          {/* Calculator Display */}
          <div className="mb-4 overflow-hidden rounded-2xl border bg-background shadow-xs/5">
            <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
              <span className="text-xs text-muted-foreground">
                Amount Due: <strong>{formatCurrency(total)}</strong>
              </span>
              {paidNum >= total && paidNum > 0 && (
                <span className="text-xs text-amber-600 font-medium">
                  Change: {formatCurrency(changeDue)}
                </span>
              )}
            </div>
            <div className="px-4 py-3">
              <input
                type="text"
                inputMode="decimal"
                className="w-full bg-transparent text-right text-4xl font-bold tabular-nums tracking-tight outline-none placeholder:text-muted-foreground/30"
                value={amountPaid || ""}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9.]/g, "");
                  const parts = raw.split(".");
                  if (parts.length > 2) return;
                  if (parts[1] && parts[1].length > 2) return;
                  setAmountPaid(raw);
                }}
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Numpad */}
          <div className="grid grid-cols-4 gap-2">
            {["1", "2", "3"].map((key) => (
              <button
                key={key}
                type="button"
                className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
                onClick={() => handleNumpad(key)}
              >
                {key}
              </button>
            ))}
            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl border bg-card text-sm font-semibold text-muted-foreground shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
              onClick={() => handleNumpad("clear")}
            >
              CLR
            </button>
            {["4", "5", "6"].map((key) => (
              <button
                key={key}
                type="button"
                className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
                onClick={() => handleNumpad(key)}
              >
                {key}
              </button>
            ))}
            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl border bg-card text-muted-foreground shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
              onClick={() => handleNumpad("backspace")}
            >
              <Delete size={22} strokeWidth={1.5} />
            </button>
            {["7", "8", "9"].map((key) => (
              <button
                key={key}
                type="button"
                className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
                onClick={() => handleNumpad(key)}
              >
                {key}
              </button>
            ))}
            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
              onClick={() => handleNumpad(".")}
            >
              .
            </button>
            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
              onClick={() => handleNumpad("0")}
            >
              0
            </button>
            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl border bg-card text-lg font-semibold shadow-xs/5 hover:bg-accent active:bg-accent transition-colors"
              onClick={() => handleNumpad("00")}
            >
              00
            </button>
            <div /> {/* spacer in 4th col */}
          </div>

          <button
            type="button"
            disabled={paidNum < total}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-bold text-white shadow-xs/5 hover:bg-emerald-700 disabled:opacity-40 transition-colors"
          >
            <Check size={22} strokeWidth={2} />
            {paidNum >= total
              ? `Complete — Change ${formatCurrency(changeDue)}`
              : `Need ${formatCurrency(Math.max(0, total - paidNum))} more`}
          </button>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 justify-center">
          <Receipt size={20} strokeWidth={1.5} />
          Payment
        </DialogTitle>
      </DialogHeader>
      <div className="px-6 pb-6 pt-2">
        <div className="text-center mb-5">
          <p className="text-3xl font-bold">{formatCurrency(total)}</p>
          <p className="text-sm text-muted-foreground">Table 5 · Dine In · 2 guests</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {payMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.id}
                className="cursor-pointer"
                render={<button type="button" onClick={method.action} />}
              >
                <CardHeader className="items-center text-center p-5 gap-1">
                  <Icon size={28} strokeWidth={1.5} className="text-muted-foreground" />
                  <CardTitle className="text-base">{method.label}</CardTitle>
                  <CardDescription className="text-xs">{method.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Printer size={18} strokeWidth={1.5} />
            Print Receipt
          </button>
        </div>
      </div>
    </DialogContent>
  );
}

function DiscountDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Percent size={20} strokeWidth={1.5} />
          Apply Discount
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 p-6 pt-2">
        <div className="flex flex-col gap-2">
          <Label>Discount Type</Label>
          <Select defaultValue="percentage">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="percentage">Percentage (%)</SelectItem>
              <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Value</Label>
          <Input type="number" placeholder="10" min={0} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Reason</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Select reason</SelectItem>
              <SelectItem value="loyalty">Loyalty Program</SelectItem>
              <SelectItem value="complaint">Service Recovery</SelectItem>
              <SelectItem value="promo">Promotion</SelectItem>
              <SelectItem value="employee">Employee Meal</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline">Cancel</Button>} />
        <Button>Apply</Button>
      </DialogFooter>
    </DialogContent>
  );
}

function NotesDrawer() {
  return (
    <DrawerPopup showBar>
      <DrawerHeader>
        <DrawerTitle className="flex items-center gap-2">
          <FileText size={20} strokeWidth={1.5} />
          Order Notes
        </DrawerTitle>
      </DrawerHeader>
      <DrawerPanel>
        <div className="mx-auto w-full max-w-md space-y-4">
          <div className="flex flex-col gap-2">
            <Label>Kitchen Notes</Label>
            <Textarea rows={3} placeholder="e.g. Allergies, plating instructions, substitutions…" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Service Notes</Label>
            <Textarea rows={2} placeholder="e.g. Birthday, special occasion, VIP guest…" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked id="note-print" />
            <Label htmlFor="note-print">Print notes on ticket</Label>
          </div>
        </div>
      </DrawerPanel>
      <DrawerFooter className="justify-center sm:justify-center">
        <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        <Button>Save Notes</Button>
      </DrawerFooter>
    </DrawerPopup>
  );
}
