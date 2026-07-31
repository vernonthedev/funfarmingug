import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowLeft, Save } from "lucide-react";
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
import { getMenuItem, sampleCategories } from "../lib/menu-data";

export const Route = createFileRoute("/menu/$id/edit")({
  component: MenuItemEditPage,
  pendingComponent: PageSkeleton,
});

function MenuItemEditPage() {
  const { id } = useParams({ from: "/menu/$id/edit" });
  const item = getMenuItem(id);

  if (!item) {
    throw notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        to="/menu/$id"
        params={{ id }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to {item.name}
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Edit: {item.name}</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Item Name</Label>
                <Input defaultValue={item.name} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Category</Label>
                <Select defaultValue={item.category}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sampleCategories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Price</Label>
                <Input type="number" defaultValue={item.price} step="0.01" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Prep Time (min)</Label>
                <Input type="number" defaultValue={item.prepTime} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select defaultValue={item.status}>
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
              <Textarea
                defaultValue={item.description || ""}
                placeholder="Item description…"
                rows={3}
              />
            </div>
          </div>
        </CardPanel>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" render={<Link to="/menu/$id" params={{ id }} />}>
            Cancel
          </Button>
          <Button>
            <Save size={18} strokeWidth={1.5} />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
