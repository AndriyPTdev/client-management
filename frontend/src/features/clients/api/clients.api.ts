import { Client }  from '../types/client.types'

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchClients = async (): Promise<Client[]> => {

    const res = await fetch(`${baseUrl}/clients`)
    const data = await res.json();

    return data.data || [];
}