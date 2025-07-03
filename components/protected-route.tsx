"use client";

import type React from "react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedClients?: string[];
}

export default function ProtectedRoute({
  children,
  allowedClients,
}: ProtectedRouteProps) {
  const { isLoggedIn, clientId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    if (allowedClients && clientId && !allowedClients.includes(clientId)) {
      router.push("/unauthorized");
    }
  }, [isLoggedIn, clientId, router, allowedClients]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  if (allowedClients && clientId && !allowedClients.includes(clientId)) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
