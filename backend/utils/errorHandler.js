// backend/utils/errorHandler.js

function errorHandler(err, req, res, next) {
  // 1. Логування помилки для дебагу на сервері
  console.error("Помилка API:", err.message);
  console.error(err.stack); // Логуємо повний стек виклику для деталізації

  // 2. Визначення статус-коду
  // Перевіряємо, чи має помилка власний статус-код (наприклад, встановлений нами)
  // Інакше використовуємо 500 Internal Server Error за замовчуванням
  const statusCode = err.statusCode || 500; 

  // 3. Формування повідомлення для клієнта
  let message = err.message;

  // У продакшн-середовищі, для 500 помилок краще приховувати деталі
  // if (statusCode === 500 && process.env.NODE_ENV === 'production') {
  //   message = 'Виникла внутрішня помилка сервера.';
  // }

  // Додаткова обробка для певних типів помилок
  // Наприклад, помилки підключення до БД або валідації
  if (err.name === 'JsonWebTokenError') { // Приклад для JWT помилок
    statusCode = 401;
    message = 'Недійсний токен авторизації.';
  }
  if (err.code === '23505') { // Помилка унікальності PostgreSQL (наприклад, дублікат email)
    statusCode = 409; // Conflict
    message = 'Запис з таким значенням вже існує.';
  }
  // Можна додати інші перевірки за err.code або err.name

  // 4. Відправка відповіді клієнту
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: message,
    // Можна додати інші поля, наприклад, `details: err.details`
  });
}

export default errorHandler;