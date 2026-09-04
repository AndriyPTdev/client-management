-- db_scripts/05_orders.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/05_orders.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/05_orders.sql


DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    client_plan_id INTEGER REFERENCES client_plans(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO orders (client_id, client_plan_id)
VALUES
(1, 1),
(2, 2);