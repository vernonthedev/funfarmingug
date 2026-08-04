'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/auth-client';
import { Button } from '@/admin/components/ui/button';
import { Input } from '@/admin/components/ui/input';
import { Label } from '@/admin/components/ui/label';

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') ?? '/admin';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);

        const { error: signInError } = await signIn.email({
            email,
            password,
        });

        if (signInError) {
            setError(
                signInError.message ??
                    'Invalid email or password. Please try again.'
            );
            setPending(false);
            return;
        }

        router.push(callbackUrl);
        router.refresh();
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [pending, setPending] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-12">
            <div className="w-full max-w-sm space-y-6">
                <div className="space-y-2 text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-foreground">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Sign in to the Fun Farming admin panel to continue.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@funfarming.ug"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error ? (
                        <div
                            role="alert"
                            className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                        >
                            {error}
                        </div>
                    ) : null}

                    <Button type="submit" className="w-full" disabled={pending}>
                        {pending ? 'Signing in…' : 'Sign in'}
                    </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    <Link
                        href="/"
                        className="hover:text-foreground no-underline"
                    >
                        Back to website
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-dvh grid lg:grid-cols-2 bg-background">
            <div className="relative hidden lg:block overflow-hidden">
                <img
                    src="/images/funfarm/img3.jpg"
                    alt="Fun Farming Uganda"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold">
                            Fun Farming UG
                        </span>
                    </div>
                </div>
            </div>

            <Suspense fallback={null}>
                <LoginForm />
            </Suspense>
        </div>
    );
}
