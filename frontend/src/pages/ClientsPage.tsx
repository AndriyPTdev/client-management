
import { useState, useEffect } from "react";
import { fetchClients } from "@/features/clients/api/clients.api";

import { Client } from '@/features/clients/types/client.types'

export default function ClientsPage() {

  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => {
    fetchClients().then(setClients)
  }, []);

  return (
    <div>
      <h1>Clients Page</h1>
      <p>This is the clients page content.</p>
      <div>
        {
          clients.map(item => (
            <p key={item.id}>{item.name} </p>
          ))
        }
      </div>
    </div>
  );
}
