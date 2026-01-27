# 13 Object-Relational Mapping (ORM): Menu API Back End

## Your Task

Restaurants and cafes need a reliable way to manage **menu data**—menu sections (like _Appetizers_ or _Drinks_), individual menu items, and tags (like _Vegan_ or _Gluten-Free_).

Your task is to build the back end for a **Menu API** by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a PostgreSQL database.

---

## User Story

```md
AS A manager at a restaurant
I WANT a back end for my menu system that uses modern database tools
SO THAT we can create, update, and organize menu items quickly
```

---

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I configure my PostgreSQL connection (hardcoded for this unit)
THEN I am able to connect to a database using Sequelize
WHEN I run the schema and seed commands
THEN a development database is created and seeded with test data
WHEN I start the application
THEN my server starts and Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for sections, items, or tags
THEN the data for each of these routes is displayed in formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I can successfully create, update, and delete data in my database
```

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Create the database

Use the `schema.sql` file in the `db` folder.

```bash
psql -U postgres -f db/schema.sql
```

### 3) Seed the database

```bash
npm run seed
```

### 4) Start the server

```bash
npm start
```

You should see a message like:

```text
Server listening on http://localhost:3001
```

---

## Database Models

Your database should contain the following four models:

### `MenuSection`

- `id`
  - Integer, primary key, auto-increment, not null
- `section_name`
  - String, not null (examples: "Appetizers", "Entrees", "Drinks")

### `MenuItem`

- `id`
  - Integer, primary key, auto-increment, not null
- `item_name`
  - String, not null
- `price`
  - Decimal, not null, validates as decimal
- `in_stock`
  - Boolean, not null, default `true`
- `section_id`
  - Integer, references `MenuSection.id`

### `Tag`

- `id`
  - Integer, primary key, auto-increment, not null
- `tag_name`
  - String (examples: "Vegan", "Spicy", "Gluten-Free")

### `MenuItemTag` (join table)

- `id`
  - Integer, primary key, auto-increment, not null
- `item_id`
  - Integer, references `MenuItem.id`
- `tag_id`
  - Integer, references `Tag.id`

---

## Associations

Set up these relationships:

- `MenuItem` belongs to `MenuSection`
- `MenuSection` has many `MenuItem`
- `MenuItem` belongs to many `Tag`
- `Tag` belongs to many `MenuItem`
- Use `MenuItemTag` as the through/join table

> **Hint:** Make sure your foreign keys match the columns defined in each model.

---

## API Routes (CRUD)

Fill out the unfinished routes to perform create, read, update, and delete operations using your Sequelize models.

### Sections

- `GET /api/sections`
- `GET /api/sections/:id`
- `POST /api/sections`
- `PUT /api/sections/:id`
- `DELETE /api/sections/:id`

### Items

- `GET /api/items`
- `GET /api/items/:id`
- `POST /api/items`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`

### Tags

- `GET /api/tags`
- `GET /api/tags/:id`
- `POST /api/tags`
- `PUT /api/tags/:id`
- `DELETE /api/tags/:id`

---

## Testing with Insomnia

Use Insomnia (or Postman) to verify your API works:

- Test **GET all** routes first
- Then test **GET by id**
- Then test **POST** (create)
- Then test **PUT** (update)
- Then test **DELETE** (remove)

---

## Deliverables

Submit BOTH of the following:

1. A GitHub repository containing your application code
2. A completed `README.md` describing:
   - What your Menu API does
   - How to install and run it
   - What routes exist

---

## Bonus (Optional)

If you finish early, try one or more:

- Add validations to all model fields
- Add a “specials” feature (e.g., `is_special` boolean on items)
- Add seed data for multiple menu sections and tags

---
