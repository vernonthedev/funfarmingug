import {
    Bell,
    CreditCard,
    Key,
    LogOut,
    MessageSquare,
    Settings,
} from 'lucide-react';
import { Button } from '@/admin/components/ui/button';
import { CardFooter } from '@/admin/components/ui/card';
import { Checkbox } from '@/admin/components/ui/checkbox';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';
import { Separator } from '@/admin/components/ui/separator';

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Account Settings</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Manage your restaurant profile, preferences, and team.
                </p>
            </div>

            <div className="rounded-2xl border bg-card not-dark:bg-clip-padding text-card-foreground shadow-xs/5">
                <div className="grid lg:grid-cols-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-3 border-e p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            Business settings
                        </p>
                        <nav className="flex flex-col gap-1">
                            {[
                                {
                                    icon: Settings,
                                    label: 'My Account',
                                    active: true,
                                },
                                { icon: Bell, label: 'My Notifications' },
                                { icon: Key, label: 'Connected Apps' },
                                { icon: CreditCard, label: 'Plans' },
                                {
                                    icon: MessageSquare,
                                    label: 'Billing & Invoices',
                                },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Button
                                        key={item.label}
                                        variant="ghost"
                                        className={`justify-start w-full ${
                                            item.active
                                                ? 'bg-accent font-medium'
                                                : ''
                                        }`}
                                    >
                                        <Icon size={18} strokeWidth={1.5} />
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </nav>
                        <Separator className="my-4" />
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            Experience
                        </p>
                        <nav className="flex flex-col gap-1">
                            <Button
                                variant="ghost"
                                className="justify-start w-full text-muted-foreground"
                            >
                                <LogOut size={18} strokeWidth={1.5} />
                                Give Feedback
                            </Button>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 flex flex-col">
                        <div className="p-6 space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold mb-4">
                                    My Account
                                </h2>

                                <div className="space-y-4">
                                    {/* Profile */}
                                    <div>
                                        <h3 className="text-sm font-medium mb-2">
                                            Profile Details
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="size-16 rounded-full bg-cover bg-center"
                                                style={{
                                                    backgroundImage:
                                                        'url(https://ui-avatars.com/api/?name=Restaurant+Owner&background=0054a6&color=fff&size=128)',
                                                }}
                                            />
                                            <div className="flex gap-2">
                                                <Button size="sm">
                                                    Change avatar
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-destructive hover:text-destructive"
                                                >
                                                    Delete avatar
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* Business Profile */}
                            <div>
                                <h3 className="text-sm font-medium mb-3">
                                    Business Profile
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="flex flex-col gap-2">
                                        <Label>Business Name</Label>
                                        <Input defaultValue="Serva Bistro" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Business ID</Label>
                                        <Input defaultValue="560afc32" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Location</Label>
                                        <Input defaultValue="New York, USA" />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* Email */}
                            <div>
                                <h3 className="text-sm font-medium mb-1">
                                    Email
                                </h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    This contact will be shown to others
                                    publicly, so choose it carefully.
                                </p>
                                <div className="flex items-center gap-2">
                                    <Input
                                        className="max-w-xs"
                                        defaultValue="hello@servabistro.com"
                                    />
                                    <Button variant="outline" size="sm">
                                        Change
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            {/* Password */}
                            <div>
                                <h3 className="text-sm font-medium mb-1">
                                    Password
                                </h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    You can set a permanent password if you
                                    don't want to use temporary login codes.
                                </p>
                                <Button variant="outline" size="sm">
                                    Set new password
                                </Button>
                            </div>

                            <Separator />

                            {/* Public profile */}
                            <div>
                                <h3 className="text-sm font-medium mb-1">
                                    Public profile
                                </h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    Making your profile public means that anyone
                                    on the Serva network will be able to find
                                    you.
                                </p>
                                <Label className="flex items-center gap-3 cursor-pointer">
                                    <Checkbox
                                        defaultChecked
                                        id="public-profile"
                                    />
                                    <span className="text-sm font-medium">
                                        You're currently visible
                                    </span>
                                </Label>
                            </div>
                        </div>

                        <CardFooter className="justify-end gap-2 border-t">
                            <Button variant="outline">Cancel</Button>
                            <Button>Submit</Button>
                        </CardFooter>
                    </div>
                </div>
            </div>
        </div>
    );
}
