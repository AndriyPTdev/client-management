import {
  getAllClients,
  getClientById,
  createClient as createClientService,
  updateClient as updateClientService,
  deleteClient as deleteClientService
} from "../services/clients.service.js";

const DEFAULT_PAGE = 1
const LIMIT_PER_PAGE = 10

export const getClients = async (req, res) => {
  try {
    const {
      page = DEFAULT_PAGE,
      limit = LIMIT_PER_PAGE,
      search = ''
    } = req.query;

    const clients = await getAllClients({
      page: Number(page),
      limit: Number(limit),
      search
    })

    res.json(clients)

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: error.message });
    // res.status(500).json({ error: "Server error" })
  }
}

export const getClient = async (req, res) => {

  try {
    const client = await getClientById(req.params.id)
    res.json(client)
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createClient = async (req, res) => {

  try {
    const client = await createClientService(req.body);

    res.status(201).json(client);

  } catch (error) {

    res.status(500).json({
      error: error
    });
  }
}

export const updateClient = async (req, res) => {
  try {
    const client = await updateClientService(
      req.params.id,
      req.body
    );

    res.json(client);

  } catch (error) {
    console.log(error);

    res.status(500).json(error);

  }
};

export const deleteClient = async (req, res) => {
  const id = req.params.id

  try {
    const client = await deleteClientService(id)

    if (!client) {
      return res.status(404).json({ 'error': 'client not found' })
    }

    res.json(client)

  } catch (error) {
    console.log(error);

    res.status(500).json({ 'error': 'Server error' })
  }


}