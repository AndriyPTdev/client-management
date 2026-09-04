-- db_scripts/02_plans.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/02_plans.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/02_plans.sql


DROP TABLE IF EXISTS plans CASCADE;

CREATE TABLE plans (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    items_included INTEGER,
    duration_days INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO plans (name, price, items_included, duration_days)
VALUES
('40 речей', 39.00, 40, 30),
('20 речей', 25.00, 20, 30),
('60 речей', 55.00, 60, 30);