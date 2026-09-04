-- db_scripts/04_garment_types.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/04_garment_types.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/04_garment_types.sql


DROP TABLE IF EXISTS garment_types CASCADE;

CREATE TABLE garment_types (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO garment_types (name, price)
VALUES
('сорочка', 3.00),
('футболка', 2.00),
('штани', 4.00),
('куртка', 8.00),
('пальто', 10.00);