# Pens API

This is a simple Express.js REST API that manages pens.


## Endpoints

```
https://pens-api.vercel.app
```

### Get All Pens

```
GET /api/pens
```

Example: https://pens-api.vercel.app/api/pens

Returns a list of all pens.

### Get a Single Pens

```
GET /api/pens/{id}
```

Example: https://pens-api.vercel.app/api/pens/1

Returns a single pen by ID.

### Get pens by color

```
GET /api/pens/color/{color}
```

Example: https://pens-api.vercel.app/api/pens/color/red

Returns pens by given color.


### Usage

Make requests to the respective endpoints using your preferred HTTP client.

### Response Format

The API responses will be in JSON format and follow this structure:
```
{
  "id": 1,
  "name": "Pen 1",
  "color": "red"
}
```
