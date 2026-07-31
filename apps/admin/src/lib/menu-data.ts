export type MenuStatus = "available" | "unavailable";

export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly status: MenuStatus;
  readonly prepTime: number;
  readonly orders: number;
  readonly description?: string;
}

export interface MenuCategory {
  readonly id: string;
  readonly name: string;
  readonly count: number;
}

export const categories: MenuCategory[] = [
  { id: "all", name: "All Items", count: 24 },
  { id: "appetizers", name: "Appetizers", count: 6 },
  { id: "mains", name: "Main Courses", count: 8 },
  { id: "sides", name: "Sides", count: 4 },
  { id: "desserts", name: "Desserts", count: 3 },
  { id: "beverages", name: "Beverages", count: 3 },
];

export const menuItems: MenuItem[] = [
  {
    id: "ITM-001",
    name: "Caesar Salad",
    category: "Appetizers",
    price: 12.0,
    status: "available",
    prepTime: 8,
    orders: 142,
    description: "Classic Caesar with romaine, parmesan, croutons, and house dressing.",
  },
  {
    id: "ITM-002",
    name: "Bruschetta",
    category: "Appetizers",
    price: 9.5,
    status: "available",
    prepTime: 5,
    orders: 98,
  },
  {
    id: "ITM-003",
    name: "Calamari",
    category: "Appetizers",
    price: 14.0,
    status: "unavailable",
    prepTime: 10,
    orders: 67,
  },
  {
    id: "ITM-004",
    name: "Grilled Salmon",
    category: "Main Courses",
    price: 28.0,
    status: "available",
    prepTime: 18,
    orders: 156,
    description: "Atlantic salmon with lemon butter sauce and seasonal vegetables.",
  },
  {
    id: "ITM-005",
    name: "Steak Frites",
    category: "Main Courses",
    price: 34.0,
    status: "available",
    prepTime: 22,
    orders: 203,
    description: "8oz ribeye with hand-cut fries and peppercorn sauce.",
  },
  {
    id: "ITM-006",
    name: "Chicken Alfredo",
    category: "Main Courses",
    price: 22.0,
    status: "available",
    prepTime: 15,
    orders: 178,
  },
  {
    id: "ITM-007",
    name: "Vegetable Stir Fry",
    category: "Main Courses",
    price: 18.0,
    status: "available",
    prepTime: 12,
    orders: 89,
  },
  {
    id: "ITM-008",
    name: "Lamb Chops",
    category: "Main Courses",
    price: 38.0,
    status: "unavailable",
    prepTime: 25,
    orders: 45,
  },
  {
    id: "ITM-009",
    name: "Truffle Fries",
    category: "Sides",
    price: 8.0,
    status: "available",
    prepTime: 6,
    orders: 234,
  },
  {
    id: "ITM-010",
    name: "Garlic Bread",
    category: "Sides",
    price: 6.0,
    status: "available",
    prepTime: 4,
    orders: 312,
  },
  {
    id: "ITM-011",
    name: "Seasonal Vegetables",
    category: "Sides",
    price: 7.0,
    status: "available",
    prepTime: 7,
    orders: 76,
  },
  {
    id: "ITM-012",
    name: "Tiramisu",
    category: "Desserts",
    price: 11.0,
    status: "available",
    prepTime: 3,
    orders: 167,
  },
  {
    id: "ITM-013",
    name: "Panna Cotta",
    category: "Desserts",
    price: 10.0,
    status: "available",
    prepTime: 3,
    orders: 88,
  },
  {
    id: "ITM-014",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 13.0,
    status: "available",
    prepTime: 8,
    orders: 195,
  },
  {
    id: "ITM-015",
    name: "Craft Lemonade",
    category: "Beverages",
    price: 5.0,
    status: "available",
    prepTime: 2,
    orders: 420,
  },
  {
    id: "ITM-016",
    name: "Iced Tea",
    category: "Beverages",
    price: 4.0,
    status: "available",
    prepTime: 1,
    orders: 356,
  },
  {
    id: "ITM-017",
    name: "Espresso",
    category: "Beverages",
    price: 3.5,
    status: "available",
    prepTime: 2,
    orders: 289,
  },
  {
    id: "ITM-018",
    name: "Shrimp Cocktail",
    category: "Appetizers",
    price: 16.0,
    status: "available",
    prepTime: 6,
    orders: 54,
  },
  {
    id: "ITM-019",
    name: "BBQ Ribs",
    category: "Main Courses",
    price: 32.0,
    status: "available",
    prepTime: 20,
    orders: 134,
  },
  {
    id: "ITM-020",
    name: "Mushroom Risotto",
    category: "Main Courses",
    price: 24.0,
    status: "available",
    prepTime: 25,
    orders: 91,
  },
  {
    id: "ITM-021",
    name: "French Onion Soup",
    category: "Appetizers",
    price: 10.0,
    status: "available",
    prepTime: 10,
    orders: 112,
  },
  {
    id: "ITM-022",
    name: "Coleslaw",
    category: "Sides",
    price: 5.0,
    status: "unavailable",
    prepTime: 3,
    orders: 43,
  },
  {
    id: "ITM-023",
    name: "Crème Brûlée",
    category: "Desserts",
    price: 12.0,
    status: "available",
    prepTime: 4,
    orders: 143,
  },
  {
    id: "ITM-024",
    name: "Mango Smoothie",
    category: "Beverages",
    price: 6.5,
    status: "available",
    prepTime: 3,
    orders: 78,
  },
];

export const sampleCategories = ["Appetizers", "Main Courses", "Sides", "Desserts", "Beverages"];

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
