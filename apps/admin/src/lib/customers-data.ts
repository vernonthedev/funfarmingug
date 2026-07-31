export type CustomerStatus = "regular" | "vip" | "new";

export interface Customer {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly totalSpent: number;
  readonly visits: number;
  readonly lastVisit: string;
  readonly status: CustomerStatus;
  readonly avatar: string;
  readonly favoriteItems?: readonly string[];
  readonly birthday?: string;
  readonly notes?: string;
  readonly joined: string;
}

export const customers: Customer[] = [
  {
    id: "C-001",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    totalSpent: 2840,
    visits: 34,
    lastVisit: "2 days ago",
    status: "vip",
    avatar: "AJ",
    favoriteItems: ["Caesar Salad", "Grilled Salmon"],
    birthday: "Mar 15",
    notes: "Prefers window table",
    joined: "Jan 2024",
  },
  {
    id: "C-002",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+1 (555) 234-5678",
    totalSpent: 1250,
    visits: 18,
    lastVisit: "5 days ago",
    status: "regular",
    avatar: "BS",
    joined: "Mar 2024",
  },
  {
    id: "C-003",
    name: "Carol Williams",
    email: "carol@example.com",
    phone: "+1 (555) 345-6789",
    totalSpent: 420,
    visits: 5,
    lastVisit: "1 week ago",
    status: "regular",
    avatar: "CW",
    joined: "Aug 2024",
  },
  {
    id: "C-004",
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    totalSpent: 6800,
    visits: 52,
    lastVisit: "Today",
    status: "vip",
    avatar: "DB",
    favoriteItems: ["Steak Frites", "Espresso", "Tiramisu"],
    birthday: "Jul 22",
    notes: "Dairy allergy",
    joined: "Nov 2023",
  },
  {
    id: "C-005",
    name: "Eve Davis",
    email: "eve@example.com",
    phone: "+1 (555) 567-8901",
    totalSpent: 85,
    visits: 1,
    lastVisit: "3 weeks ago",
    status: "new",
    avatar: "ED",
    joined: "Oct 2024",
  },
  {
    id: "C-006",
    name: "Frank Miller",
    email: "frank@example.com",
    phone: "+1 (555) 678-9012",
    totalSpent: 2100,
    visits: 22,
    lastVisit: "4 days ago",
    status: "regular",
    avatar: "FM",
    favoriteItems: ["BBQ Ribs"],
    joined: "Feb 2024",
  },
  {
    id: "C-007",
    name: "Grace Wilson",
    email: "grace@example.com",
    phone: "+1 (555) 789-0123",
    totalSpent: 150,
    visits: 2,
    lastVisit: "2 weeks ago",
    status: "new",
    avatar: "GW",
    joined: "Nov 2024",
  },
  {
    id: "C-008",
    name: "Henry Taylor",
    email: "henry@example.com",
    phone: "+1 (555) 890-1234",
    totalSpent: 3950,
    visits: 41,
    lastVisit: "1 day ago",
    status: "vip",
    avatar: "HT",
    favoriteItems: ["Chicken Alfredo", "Garlic Bread"],
    birthday: "Dec 5",
    notes: "VIP - comp dessert on visits",
    joined: "Oct 2023",
  },
];

export function getCustomer(id: string): Customer | undefined {
  return customers.find((c) => c.id === id);
}
