-- db_scripts/06_order_items.sql

-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f db_scripts/06_order_items.sql

-- SUPABASE:
-- psql "postgresql://postgres:AlinkaEva2827@db.hephxkbzkmyrjsmydifq.supabase.co:5432/postgres" -f db_scripts/06_order_items.sql


DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    garment_type_id INTEGER REFERENCES garment_types(id),
    quantity INTEGER DEFAULT 1,
    is_included_in_plan BOOLEAN DEFAULT FALSE
);

INSERT INTO order_items (order_id, garment_type_id, quantity, is_included_in_plan)
VALUES
(1, 1, 2, TRUE),
(1, 3, 1, TRUE),
(2, 5, 1, FALSE);