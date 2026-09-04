import pool from "../config/db.js"


export const getAllClients = async ({
    page,
    limit,
    search
}) => {

    const offset = (page - 1) * limit;

    const clientsQuery = `
        SELECT *
        FROM clients
        WHERE
            $3 = ''
            OR name ILIKE '%' || $3 || '%'
        ORDER BY created_at DESC, id DESC
        LIMIT $1
        OFFSET $2
    `;

    const countQuery = `
        SELECT COUNT(*) AS total
        FROM clients
        WHERE
            $1 = ''
            OR name ILIKE '%' || $1 || '%'
    `;

    const [clientsResult, countResult] = await Promise.all([
        pool.query(clientsQuery, [
            limit,
            offset,
            search
        ]),
        pool.query(countQuery, [
            search
        ])
    ]);

    const totalItems = Number(countResult.rows[0].total);
    const totalPages = Math.ceil(totalItems / limit);

    const hasPreviousPage = page > 1;
    const hasNextPage = page < totalPages;


    return {
        data: clientsResult.rows,
        pagination: {
            currentPage: page,
            limit,
            totalItems,
            totalPages,
            hasPreviousPage,
            hasNextPage
        }
    };
};

export const getClientById = async (id) => {
    const result = await pool.query("SELECT * FROM clients WHERE id = $1", [id])

    return result.rows[0]
}

export const createClient = async (clientData) => {


    const { name, email, phone } = clientData;

    const result = await pool.query(`
    INSERT INTO clients (name, email, phone)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
        [name, email, phone]
    );

    return result.rows[0];
}

export const updateClient = async (id, clientData) => {

    const {
        name,
        email,
        phone
    } = clientData;


    const result = await pool.query(
        `
        UPDATE clients
        SET
            name = $1,
            email = $2,
            phone = $3
        WHERE id = $4
        RETURNING *
        `,
        [
            name,
            email,
            phone,
            id
        ]
    );


    return result.rows[0];
};

export const deleteClient = async (id) => {
    const result = await pool.query(`
        DELETE FROM clients
        WHERE id = $1
        RETURNING * 
        `,
        [id]
    )

    return result.rows[0]


}