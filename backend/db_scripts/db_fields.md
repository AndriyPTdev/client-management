# DATABASE SCHEMA

## 1. clients
Клієнти системи

- id (PK)
- name
- email
- phone
- created_at

---

## 2. plans
Тарифні плани (місячні пакети)

- id (PK)
- name
- price
- items_included
- duration_days
- is_active
- created_at

---

## 3. client_plans
Підписки клієнтів на плани

- id (PK)
- client_id (FK → clients)
- plan_id (FK → plans)
- start_date
- end_date
- is_active
- created_at

---

## 4. garment_types
Типи одягу + ціни (разові замовлення)

- id (PK)
- name
- price
- created_at

---

## 5. orders
Замовлення клієнтів

- id (PK)
- client_id (FK → clients)
- client_plan_id (FK → client_plans, nullable)
- created_at

---

## 6. order_items
Елементи замовлення

- id (PK)
- order_id (FK → orders)
- garment_type_id (FK → garment_types)
- quantity
- is_included_in_plan

---

## 7. payments
Факти оплат

- id (PK)
- client_id (FK → clients)
- amount
- created_at