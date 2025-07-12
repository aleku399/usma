"use client";

import HycromaxDocumentViewer from "@/components/hycromax-document-viewer";
import ProtectedRoute from "@/components/protected-route";

export default function Page() {
  return (
    <ProtectedRoute allowedClients={["hycromax"]}>
      <HycromaxDocumentViewer />
    </ProtectedRoute>
  );
}
