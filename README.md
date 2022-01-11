# Narrative-task

A simple application to create, read, update and delete buy order. Built with Node.js and Vue.js.

## Backend Setup

The backend runs on a node/express server. MySQL is the database of choice and Sequilize ORM is used to interact with the database.

### - Navigate to the server folder and install the depencencies

```bash
yarn install
```

### - Create a .env file in the server folder (Sample)

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
   Endpoint - http://localhost:8081/api/v1/package-types

Sample Payload
{
  "name": "ID Mapping"
}

Sample Response
{
  "message": "Data package type created successfully.",
  "data": {
    "id": 3,
    "name": "ID Mapping",
    "updated_at": "2022-01-10T08:47:40.972Z",
    "created_at": "2022-01-10T08:47:40.972Z"
  }
}

2. GET - Get all data pakage types
   Endpoint - http://localhost:8081/api/v1/package-types

Sample Response
{
  "message": "Data package types retrieved created successfully.",
  "data": [
     {
      "id": 1,
      "name": "Device Location",
      "created_at": "2022-01-09T12:30:23.000Z",
      "updated_at": "2022-01-09T12:30:23.000Z"
    },
    {
      "id": 2,
      "name": "Device Dehaviour",
      "created_at": "2022-01-09T12:30:34.000Z",
      "updated_at": "2022-01-09T12:30:34.000Z"
    },
    {
      "id": 3,
      "name": "ID Mapping",
      "created_at": "2022-01-09T12:31:02.000Z",
      "updated_at": "2022-01-09T12:31:02.000Z"
    },
  ]
}

3. POST - Create buy order
   Endpoint - http://localhost:8081/api/v1/buy-orders

Sample Payload
{
  "max_bid_price": "70000",
  "name": "Order identity data",
  "data_package_type_id": 3
}

Sample Response
{
  "data": {
    "id": 6,
    "max_bid_price": "70000",
    "name": "Order identity data",
    "data_package_type_id": 3,
    "updated_at": "2022-01-10T08:53:32.552Z",
    "created_at": "2022-01-10T08:53:32.552Z"
  },
  "message": "Order created successfully."
}

4. GET - Get all buy order
   Endpoint - http://localhost:8081/api/v1/buy-orders

Sample Response
{
  "message": "Order retrieved successfully.",
  "data": [
    {
      "id": 2,
      "name": "Order map data 1",
      "max_bid_price": "6000.00",
      "created_at": "2022-01-09T12:32:09.000Z",
      "updated_at": "2022-01-09T12:32:09.000Z",
      "data_package_type_id": 1,
      "data_package_type": {
        "id": 1,
        "name": "Device Location",
        "created_at": "2022-01-09T12:30:23.000Z",
        "updated_at": "2022-01-09T12:30:23.000Z"
      }
    },
    {
      "id": 3,
      "name": "Order 100",
      "max_bid_price": "70000.00",
      "created_at": "2022-01-09T12:32:18.000Z",
      "updated_at": "2022-01-10T11:26:55.000Z",
      "data_package_type_id": 3,
      "data_package_type": {
        "id": 3,
        "name": "ID Mapping",
        "created_at": "2022-01-09T12:31:02.000Z",
        "updated_at": "2022-01-09T12:31:02.000Z"
      }
    },
    {
      "id": 4,
      "name": "Order map data 4",
      "max_bid_price": "7000.00",
      "created_at": "2022-01-09T12:32:44.000Z",
      "updated_at": "2022-01-09T12:32:44.000Z",
      "data_package_type_id": 2,
      "data_package_type": {
        "id": 2,
        "name": "Device Dehaviour",
        "created_at": "2022-01-09T12:30:34.000Z",
        "updated_at": "2022-01-09T12:30:34.000Z"
      }
    },
    {
      "id": 5,
      "name": "Order map data 6",
      "max_bid_price": "7000.00",
      "created_at": "2022-01-09T19:43:19.000Z",
      "updated_at": "2022-01-09T19:43:19.000Z",
      "data_package_type_id": 2,
      "data_package_type": {
        "id": 2,
        "name": "Device Dehaviour",
        "created_at": "2022-01-09T12:30:34.000Z",
        "updated_at": "2022-01-09T12:30:34.000Z"
      }
    },
    {
      "id": 6,
      "name": "Order identity data",
      "max_bid_price": "70000.00",
      "created_at": "2022-01-10T08:53:32.000Z",
      "updated_at": "2022-01-10T08:53:32.000Z",
      "data_package_type_id": 3,
      "data_package_type": {
        "id": 3,
        "name": "ID Mapping",
        "created_at": "2022-01-09T12:31:02.000Z",
        "updated_at": "2022-01-09T12:31:02.000Z"
      }
    },
    {
      "id": 7,
      "name": "Order Behaviour Data",
      "max_bid_price": "70000.00",
      "created_at": "2022-01-10T09:33:05.000Z",
      "updated_at": "2022-01-10T09:33:05.000Z",
      "data_package_type_id": 2,
      "data_package_type": {
        "id": 2,
        "name": "Device Dehaviour",
        "created_at": "2022-01-09T12:30:34.000Z",
        "updated_at": "2022-01-09T12:30:34.000Z"
      }
    },
    {
      "id": 8,
      "name": "Order Behaviour Data 2",
      "max_bid_price": "70000.00",
      "created_at": "2022-01-10T09:35:31.000Z",
      "updated_at": "2022-01-10T09:35:31.000Z",
      "data_package_type_id": 2,
      "data_package_type": {
        "id": 2,
        "name": "Device Dehaviour",
        "created_at": "2022-01-09T12:30:34.000Z",
        "updated_at": "2022-01-09T12:30:34.000Z"
      }
    }
  ]
}

5. PATCH - Update buy order
   Endpoint - http://localhost:8081/api/v1/buy-orders/2

Sample Payload
{
  "max_bid_price": 2000,
  "name": "Second Order",
  "data_package_type_id": 1
}

Sample Response
{
  "message": "Order updated successfully."
}

6. DELETE - Update buy order
   Endpoint - http://localhost:8081/api/v1/buy-orders/2


Sample Response
{
  "message": "Order deleted successfully."
}


```

## Frontend Setup

The frontend runs on Vue.js. It uses [Vuetify](https://vuetifyjs.com/en/) and [Tacklebox](https://docs.narrative.dev/tacklebox) as the component libraries of choice.

### - Navigate to the client folder and install the depencencies

```
yarn install
```

### - Create a .env in the client folder (Sample)

```bash
VUE_APP_API_URL=http://localhost:8081
```

`Note: Make sure this url corresponds to the url your backend is running on (The PORT variable in the backend .env file). Make sure your backend server is up.`

### - Compiles and hot-reloads for development

```
yarn serve
```

### - Compiles and minifies for production

```
yarn build
```
