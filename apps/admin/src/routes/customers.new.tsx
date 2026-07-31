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

export const Route = createFileRoute("/customers/new")({
  component: CustomerNewPage,
  pendingComponent: PageSkeleton,
});

function CustomerNewPage() {
  return (
    <div className="space-y-6">
      <Link
        to="/customers"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to Customers
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Add New Customer</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Full Name</Label>
                <Input placeholder="Enter name…" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select defaultValue="new">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone</Label>
                <Input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Notes / Preferences</Label>
              <Textarea rows={3} placeholder="Dietary restrictions, preferences…" />
            </div>
          </div>
        </CardPanel>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" render={<Link to="/customers" />}>
            Cancel
          </Button>
          <Button>
            <Plus size={18} strokeWidth={1.5} />
            Add Customer
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
