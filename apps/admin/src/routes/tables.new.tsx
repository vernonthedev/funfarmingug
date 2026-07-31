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
import { PageSkeleton } from "../components/page-skeleton";

export const Route = createFileRoute("/tables/new")({
  component: TableNewPage,
  pendingComponent: PageSkeleton,
});

function TableNewPage() {
  return (
    <div className="space-y-6">
      <Link
        to="/tables"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to Tables
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Add New Table</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
        </CardPanel>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" render={<Link to="/tables" />}>
            Cancel
          </Button>
          <Button>
            <Plus size={18} strokeWidth={1.5} />
            Add Table
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
