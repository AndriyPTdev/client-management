-- db_scripts/03_client_plans.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/03_client_plans.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/03_client_plans.sql


DROP TABLE IF EXISTS client_plans CASCADE;

CREATE TABLE client_plans (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    plan_id INTEGER REFERENCES plans(id),
    start_date DATE NOT NULL,
    end_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO client_plans (client_id, plan_id, start_date, is_active)
VALUES
(1, 1, '2026-01-01', TRUE),
(2, 2, '2026-01-10', TRUE);