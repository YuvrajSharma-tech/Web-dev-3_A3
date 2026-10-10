# Inventory and Data Management System

Node.js + Express + MongoDB (Mongoose) REST API.

## Run
1. `npm install`
2. Start MongoDB, check `.env`
3. `npm run seed` (optional, adds 12 sample products)
4. `npm start`

## Endpoints
| Method | URL | Description |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | List (filter, sort, paginate) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update product |
| PATCH | /api/products/:id/stock | Body `{"change": 10}` restock, `{"change": -5}` sale |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products/low-stock | quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise summary |

Query params for list: `category, supplier, search, minPrice, maxPrice, sort (e.g. -price), page, limit`
