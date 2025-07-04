import { authenticateClient } from "@/lib/auth";

export async function loginClient(loginId, password) {
  try {
    const client = await authenticateClient(loginId, password);
    console.log("clientINLOGin", client);
    return client;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}
