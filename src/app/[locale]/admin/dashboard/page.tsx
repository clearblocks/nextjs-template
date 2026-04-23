"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { LanguageSwitcher } from "@/components/molecules";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, Link } from "@/i18n/routing";

export default function AdminDashboardPage(): React.ReactElement | null {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Need to set mounted state for client-side hydration check
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && mounted) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, mounted, router]);

  const handleLogout = async (): Promise<void> => {
    await logout();
    router.push("/");
  };

  if (isLoading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-light">
        <div className="text-center">
          <p className="font-family-sans text-base text-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-family-hero text-2xl text-primary">Next.js Template Admin</h1>
          <div className="flex gap-6 items-center">
            <Link href="/" className="font-family-sans text-base text-foreground hover:text-primary">
              Public Site
            </Link>
            <Link
              href="/admin/dashboard"
              className="font-family-sans text-base text-primary hover:text-primary/80"
            >
              Dashboard
            </Link>
            <LanguageSwitcher />
            <Button
              onClick={() => {
                void handleLogout();
              }}
              label="Logout"
            />
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="flex-1 bg-header-light">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="font-family-hero text-4xl text-primary mb-4">Admin Dashboard</h2>
            <p className="font-family-sans text-xl text-foreground">
              Welcome to the protected admin area.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-family-sans text-base">&copy; 2026 Next.js Template. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
