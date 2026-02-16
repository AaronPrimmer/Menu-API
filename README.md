# Restaurant Menu System

A Node.js backend API built with Express, PostgreSQL, and Sequelize that manages restaurant menu items, tags, and sections. The system supports organizing menu items by sections and categorizing them with tags for easy filtering and display.

## Getting Started

### Installation

```bash
npm install
```

### Database Setup

Make sure you have PostgreSQL installed and running. Update your database configuration in the project's config file.

### Seeding the Database

```bash
npm run seed
```

### Starting the Server

```bash
npm run start
```

The server will start and listen on the configured port (default: 3001).

## Database Schema

The system uses four main tables:

- **menu_items** - Stores individual menu items (dishes, drinks, etc.)
- **menu_sections** - Organizes items into sections (Appetizers, Main Courses, etc.)
- **tags** - Contains tags for categorization (Vegetarian, Spicy, Gluten-Free, etc.)
- **menu_item_tags** - Junction table linking menu items to tags (many-to-many relationship)

## API Routes (CRUD)

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

## Technologies

- **Node.js** - Runtime environment
- **Express** - Web framework
- **PostgreSQL** - Database
- **Sequelize** - ORM for database management

## Contact

For questions or feedback, please email me at [Aaron Primmer](mailto:aaronmprimmer@gmail.com)
