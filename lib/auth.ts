import clientsData from "@/data/clients.json";

export interface Client {
  id: string;
  loginId: string;
  password: string;
  name: string;
  route: string;
  role: string;
}

export function getClients(): Client[] {
  return clientsData as Client[];
}

export async function authenticateClient(
  loginId: string,
  password: string
): Promise<Omit<Client, "password"> | null> {
  const clients = getClients();
  console.log("loginId", loginId);
  console.log("password", password);

  const client = clients.find(
    (c) => c.loginId === loginId && c.password === password
  );
  console.log("cleientinDb", client);

  if (client) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...clientInfo } = client;
    return clientInfo;
  }

  return null;
}
