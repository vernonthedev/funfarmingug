import { ConvexProvider as ConvexProviderBase, ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";

const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (!convexUrl) {
  throw new Error("VITE_CONVEX_URL is not set. Please configure your Convex deployment URL.");
}

export const convex = new ConvexReactClient(convexUrl);

interface ConvexProviderProps {
  readonly children: ReactNode;
}

export function ConvexProvider({ children }: ConvexProviderProps) {
  return <ConvexProviderBase client={convex}>{children}</ConvexProviderBase>;
}
