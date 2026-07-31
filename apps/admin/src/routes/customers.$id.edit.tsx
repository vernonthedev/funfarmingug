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
import { getCustomer } from "../lib/customers-data";

export const Route = createFileRoute("/customers/$id/edit")({
  component: CustomerEditPage,
  pendingComponent: PageSkeleton,
});

function CustomerEditPage() {
  const { id } = useParams({ from: "/customers/$id/edit" });
  const customer = getCustomer(id);

  if (!customer) {
    throw notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        to="/customers/$id"
        params={{ id }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground no-underline"
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        Back to {customer.name}
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Edit: {customer.name}</CardTitle>
        </CardHeader>
        <CardPanel>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input defaultValue={customer.name} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Status</Label>
                <Select defaultValue={customer.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" defaultValue={customer.email} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone</Label>
                <Input type="tel" defaultValue={customer.phone} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Notes</Label>
              <Textarea
                defaultValue={customer.notes || ""}
                placeholder="Preferences, allergies, notes…"
                rows={3}
              />
            </div>
          </div>
        </CardPanel>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" render={<Link to="/customers/$id" params={{ id }} />}>
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
