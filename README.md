# Narrative-task

A simple application to create, read, update and delete buyer's order. Built with Node.js and Vue.js.

## Backend Setup

The backend runs on a node/express server. MySQL is the database of choice and Sequilize ORM is used to interact with the database.

### - Navigate to the server folder and install the depencencies

```bash
yarn install
```

### - Create a .env in the server folder (Sample)

```bash
PORT=8081
DB_HOST=localhost
DB_USER=XXXXXX
DB_PASSWORD=XXXXXX
DB_NAME=narrative_marketplace_db
DB_DIALECT=mysql
DB_POOL_MAX=5
DB_POOL_MIN=1
DB_POOL_ACQUIRE=30000
DB_POLL_IDLE=10000
```

### - Run the app (Locally)

```bash
yarn dev
```

### - Available Endpoints

```bash
1. POST - Create data package types
   Endpoint - http://localhost:8081/api/data-package-type/create

Sample Payload
{
  "name": "ID Mapping"
}

Sample Response
{
  "message": "Data package type created successfully",
  "data": {
    "id": 3,
    "name": "ID Mapping",
    "updatedAt": "2022-01-06T09:21:46.689Z",
    "createdAt": "2022-01-06T09:21:46.689Z"
  }
}

2. GET - Get all data pakage types

Sample Response
{
  "message": "Data package type created successfully",
  "data": [
    {
      "id": 1,
      "name": "Device Location",
      "createdAt": "2022-01-06T09:20:44.000Z",
      "updatedAt": "2022-01-06T09:20:44.000Z"
    },
    {
      "id": 2,
      "name": "Device Behavior",
      "createdAt": "2022-01-06T09:21:31.000Z",
      "updatedAt": "2022-01-06T09:21:31.000Z"
    },
    {
      "id": 3,
      "name": "ID Mapping",
      "createdAt": "2022-01-06T09:21:46.000Z",
      "updatedAt": "2022-01-06T09:21:46.000Z"
    }
  ]
}

3. POST - Create buyers order
   Endpoint - http://localhost:8081/api/buyer-order/create

Sample Payload
{
  "max_bid_price": 2000,
  "name": "Alex Anderson",
  "data_package_type_id": 1
}

Sample Response
{
  "message": "Data package type created successfully",
  "data": {
    "id": 3,
    "name": "ID Mapping",
    "updatedAt": "2022-01-06T09:21:46.689Z",
    "createdAt": "2022-01-06T09:21:46.689Z"
  }
}

4. GET - Get all buyers order

Sample Response
{
  "message": "order retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Monilola Oyeyinka",
      "max_bid_price": "50000.00",
      "createdAt": "2022-01-06T09:21:57.000Z",
      "updatedAt": "2022-01-06T09:21:57.000Z",
      "data_package_type_id": 3,
      "data_package_type": {
        "id": 3,
        "name": "ID Mapping",
        "createdAt": "2022-01-06T09:21:46.000Z",
        "updatedAt": "2022-01-06T09:21:46.000Z"
      }
    },
    {
      "id": 3,
      "name": "Max Otwell",
      "max_bid_price": "50000.00",
      "createdAt": "2022-01-06T10:42:19.000Z",
      "updatedAt": "2022-01-06T10:42:19.000Z",
      "data_package_type_id": 1,
      "data_package_type": {
        "id": 1,
        "name": "Device Location",
        "createdAt": "2022-01-06T09:20:44.000Z",
        "updatedAt": "2022-01-06T09:20:44.000Z"
      }
    },
    }
  ]
}

5. PATCH - Update buyers order
   Endpoint - http://localhost:8081/api/buyer-order/2

Sample Payload
{
  "max_bid_price": 2000,
  "name": "Alex Anderson",
  "data_package_type_id": 1
}

Sample Response
{
  "message": "Order updated successfully",
  "data": {
    "id": 3,
    "name": "ID Mapping",
    "updatedAt": "2022-01-06T09:21:46.689Z",
    "createdAt": "2022-01-06T09:21:46.689Z"
  }
}

6. DELETE - Update buyers order
   Endpoint - http://localhost:8081/api/buyer-order/2


Sample Response
{
  "message": "Order deleted successfully"
}


```

## Frontend Setup

The frontend runs on a Vue.js. It uses [Vuetify](https://vuetifyjs.com/en/) and [Tacklebox](https://docs.narrative.dev/tacklebox) as the component libraries of choice.

### - Navigate to client folder and install the depencencies

```
yarn install
```

### - Create a .env in the client folder (Sample)

```bash
VUE_APP_API_URL=http://localhost:8081
```

`Note: Make sure this url corresponds to the url your backend is running on (The PORT variable in the backend .env file). Make sure your backend server is also up.`

### - Compiles and hot-reloads for development

```
yarn serve
```

### - Compiles and minifies for production

```
yarn build
```
