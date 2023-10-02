# Products App

This repository contains the code for a simple Products App. The app allows you to manage brands and products associated with those brands. It provides basic CRUD (Create, Read, Update, Delete) operations for both brands and products.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- Node.js and npm: You can download and install them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>

2. Install the required dependencies:
   ```sh
   npm install

3. Start the server:
   ```sh
   npm start

4. The server will start running at http://localhost:8000/.

## Database Schema
The app uses a MySQL database with two tables: brands and products. Here is the schema:

### Brands:
id (Primary Key)  
brand_name (String)

### Products:
id (Primary Key)  
product_name (String)  
description (Text)  
price (Decimal)  
stock (Integer)  
brands_id (Foreign Key referencing brands.id)  

## API Endpoints

### Brands
GET /brand: Get all brands.  
GET /brand/:id: Get a brand by ID.  
GET /brand/:id/brandproducts: Get products by brand ID.  
POST /brand: Create a new brand.  
PUT /brand/:id: Update a brand by ID.  
DELETE /brand/:id: Delete a brand by ID.  
### Products
GET /products: Get all products.  
GET /products/:id: Get a product by ID.  
POST /products: Create a new product.  
PUT /products/:id: Update a product by ID.  
DELETE /products/:id: Delete a product by ID.  

## Testing

The repository includes unit tests for the API endpoints. You can run the tests using the following command:  

     ```sh
    npm test
Happy coding!






