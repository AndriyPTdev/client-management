-- db_scripts/01_clients.sql
-- LOCAL:
-- psql -U client_mg -d client_management_db -h localhost -f clients.sql
-- SUPABASE:
-- psql "postgresql://postgres.hephxkbzkmyrjsmydifq:AlinkaEva2827@aws-1-eu-central-1.pooler.supabase.com:6543/postgres" -f clients.sql
DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE
    clients (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT,
        email TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW ()
    );




-- Тестові дані

-- psql "postgresql://postgres.hephxkbzkmyrjsmydifq:AlinkaEva2827@aws-1-eu-central-1.pooler.supabase.com:6543/postgres" -f clients.sql

INSERT INTO
    clients (name, phone, email)
VALUES
    ('Андрій', '+380987654321', 'andriy@test.com'),
    ('Василь', '+380501234567', 'vasyl@test.com'),
    ('Олег', '+380671112233', 'oleg@test.com'),
    ('Марія', '+380931112233', 'maria@test.com'),
    ('Іван', '+380671234567', 'ivan@test.com'),
    (
        'Олександр',
        '+380991234567',
        'oleksandr@test.com'
    ),
    ('Анна', '+380631112233', 'anna@test.com'),
    ('Петро', '+380731234567', 'petro@test.com'),
    ('Світлана', '+380951112233', 'svitlana@test.com'),
    (
        'Андрій Коваль',
        '+380981112244',
        'koval.andriy@test.com'
    ),
    (
        'Андрій Мельник',
        '+380971234567',
        'melnyk.andriy@test.com'
    ),
    ('Юлія', '+380661234567', 'yulia@test.com'),
    ('Михайло', '+380681234567', 'mykhailo@test.com'),
    ('Наталія', '+380691234567', 'natali@test.com'),
    ('Сергій', '+380701234567', 'sergiy@test.com'),
    ('Ірина', '+380711234567', 'iryna@test.com'),
    ('Віктор', '+380721234567', 'viktor@test.com'),
    ('Тетяна', '+380741234567', 'tetiana@test.com'),
    ('Роман', '+380751234567', 'roman@test.com'),
    (
        'Андрій Бондар',
        '+380761234567',
        'bondar.andriy@test.com'
    ),
    ('Катерина', '+380771234567', 'kateryna@test.com'),
    ('Богдан', '+380781234567', 'bohdan@test.com'),
    ('Дмитро', '+380791234567', 'dmytro@test.com'),
    ('Олена', '+380801234567', 'olena@test.com'),
    ('Максим', '+380811234567', 'maksym@test.com'),
    ('Людмила', '+380821234567', 'ludmila@test.com'),
    (
        'Володимир',
        '+380831234567',
        'volodymyr@test.com'
    ),
    (
        'Анастасія',
        '+380841234567',
        'anastasia@test.com'
    ),
    ('Євген', '+380851234567', 'yevhen@test.com'),
    (
        'Андрій Шевченко',
        '+380861234567',
        'shevchenko.andriy@test.com'
    ),
    ('Ігор', '+380871234567', 'igor@test.com'),
    ('Руслан', '+380881234567', 'ruslan@test.com'),
    ('Дарина', '+380891234567', 'daryna@test.com'),
    ('Оксана', '+380901234567', 'oksana@test.com'),
    ('Степан', '+380911234567', 'stepan@test.com'),
    ('Галина', '+380921234567', 'halyna@test.com'),
    ('Артур', '+380931234568', 'artur@test.com'),
    ('Зоряна', '+380941234567', 'zoriana@test.com'),
    ('Павло', '+380951234568', 'pavlo@test.com'),
    (
        'Андрій Ткаченко',
        '+380961234567',
        'tkachenko.andriy@test.com'
    ),
    ('Леся', '+380971234568', 'lesya@test.com'),
    ('Марко', '+380981234568', 'marko@test.com'),
    ('Софія', '+380991234568', 'sofia@test.com'),
    ('Ярослав', '+380981234569', 'yaroslav@test.com'),
    ('Ярослава', '+380971234569', 'vira@test.com'),
    ('Марта', '+380961234569', 'marta@test.com'),
    ('Аліна', '+380951234569', 'alina@test.com'),
    ('Петро', '+380941234569', 'taras@test.com'),
    (
        'Андрій Левченко',
        '+380931234569',
        'levchenko.andriy@test.com'
    ),
    (
        'Оксана Кравець',
        '+380921234569',
        'kravets.oksana@test.com'
    );