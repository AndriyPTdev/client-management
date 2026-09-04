-- db_scripts/07_payments.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/07_payments.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/07_payments.sql


DROP TABLE IF EXISTS payments CASCADE;

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    amount NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO payments (client_id, amount)
VALUES
(1, 39.00),
(2, 25.00);