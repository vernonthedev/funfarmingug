"use client";

import { useNavigate } from "@tanstack/react-router";
import { CornerDownLeftIcon, LayoutDashboard, SearchIcon, Settings, ShoppingBag, ChefHat, Table2, TrendingUp, Users, UtensilsCrossed } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

interface PageItem {
  value: string;
  label: string;
  icon: typeof LayoutDashboard;
}

const pageItems: PageItem[] = [
  { label: "Dashboard", value: "/", icon: LayoutDashboard },
  { label: "Menu", value: "/menu", icon: UtensilsCrossed },
  { label: "Tables", value: "/tables", icon: Table2 },
  { label: "Kitchen", value: "/kitchen", icon: ChefHat },
  { label: "POS", value: "/pos", icon: ShoppingBag },
  { label: "Reports", value: "/reports", icon: TrendingUp },
  { label: "Customers", value: "/customers", icon: Users },
  { label: "Settings", value: "/settings", icon: Settings },
];

const searchGroups = [{ items: pageItems, value: "Pages" }];

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = useCallback(
    (item: PageItem) => {
      setOpen(false);
      navigate({ to: item.value });
    },
    [navigate],
  );

  return (
    <CommandDialog onOpenChange={setOpen} open={open}>
      <CommandDialogTrigger
        render={
          <button
            type="button"
            className="relative flex flex-1 items-center gap-2 rounded-lg border border-input bg-background px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            <SearchIcon className="size-4 shrink-0" />
            <span className="flex-1">Search pages…</span>
            <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
          </button>
        }
      />
      <CommandDialogPopup>
        <Command items={searchGroups}>
          <CommandInput placeholder="Search pages…" />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: typeof searchGroups[number]) => (
                <CommandGroup key={group.value} items={group.items}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection>
                    {(item: PageItem) => {
                      const Icon = item.icon;
                      return (
                        <CommandItem
                          key={item.value}
                          onClick={() => handleSelect(item)}
                          value={item.value}
                        >
                          <Icon className="size-4" />
                          <span>{item.label}</span>
                        </CommandItem>
                      );
                    }}
                  </CommandCollection>
                  <CommandSeparator />
                </CommandGroup>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <KbdGroup>
                  <Kbd>
                    <span>↑</span>
                  </Kbd>
                  <Kbd>
                    <span>↓</span>
                  </Kbd>
                </KbdGroup>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>
                  <CornerDownLeftIcon />
                </Kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Esc</Kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
