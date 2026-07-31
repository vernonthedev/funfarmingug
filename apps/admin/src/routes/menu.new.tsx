import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageSkeleton } from "../components/page-skeleton";
import { sampleCategories } from "../lib/menu-data";

export const Route = createFileRoute("/menu/new")({
  component: MenuItemNewPage,
  pendingComponent: PageSkeleton,
});

function MenuItemNewPage() {
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
        <CardHeader>
          <CardTitle>Add New Menu Item</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Item Name</Label>
                <Input placeholder="Enter item name…" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {sampleCategories.map((c) => (
                      <SelectItem key={c} value={c.toLowerCase()}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Price</Label>
                <Input type="number" placeholder="0.00" step="0.01" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Prep Time (min)</Label>
                <Input type="number" placeholder="5" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select defaultValue="available">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="unavailable">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Textarea placeholder="Item description…" rows={3} />
            </div>
          </div>
        </CardPanel>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" render={<Link to="/menu" />}>
            Cancel
          </Button>
          <Button>
            <Plus size={18} strokeWidth={1.5} />
            Add Item
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
