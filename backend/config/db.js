// Завантажує змінні з файлу .env (типу DATABASE_URL, PORT і т.д.)
import "dotenv/config";

// Імпортуємо Pool з бібліотеки pg (PostgreSQL driver). Pool = “менеджер підключень до бази даних”
import { Pool } from "pg";

// Створюємо "пул підключень" до бази даних. Це об’єкт, через який ти будеш виконувати SQL запити
const pool = new Pool({
  
  // 🔑 Рядок підключення до БД (Supabase/Postgres), береться з .env файлу
  connectionString: process.env.DATABASE_URL,

  // 🔒 SSL = безпечне з’єднання з віддаленою базою (Supabase вимагає це)
  ssl: { rejectUnauthorized: false },
});


// Експортуємо pool щоб використовувати його в інших файлах (services, controllers і т.д.)
export default pool;