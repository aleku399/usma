"use client";


import KeorapetseDocumentViewer from "@/components/keorapetse-document-viewer";
import ProtectedRoute from "@/components/protected-route";

export default function Page() {
  return (
    <ProtectedRoute allowedClients={["keorapetse"]}>
      <KeorapetseDocumentViewer />
    </ProtectedRoute>
  );
}
