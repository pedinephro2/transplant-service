# Transplant Service

Manages kidney transplant data including biopsy records, post-transplant complications, HLA typing, drug protocols, and rejection episodes for the Nephro Platform. Built with NestJS and MongoDB for flexible document-based storage.

## Tech Stack

- TypeScript, NestJS 10.3.0
- MongoDB 7 with Mongoose (database: `transplant-service`)
- Eureka JS client (service discovery)
- Node.js 18+

## Port

`3001`

## API Endpoints

All endpoints are reachable directly or via the gateway under `/transplant-mongo/`:

| Resource | Endpoints |
|---|---|
| Transplants | `GET/POST /api/transplants`, `GET/PUT/DELETE /api/transplants/:id` |
| Biopsies | `GET/POST /api/biopsies`, `GET/PUT/DELETE /api/biopsies/:id`, `GET /api/biopsies/transplant/:transplantId` |
| Complications | `GET/POST /api/complications`, `GET/PUT/DELETE /api/complications/:id` |
| HLA Typing | `GET/POST /api/hla`, `GET/PUT/DELETE /api/hla/:id` |
| Drug Protocols | `GET/POST /api/drugs`, `GET/PUT/DELETE /api/drugs/:id` |
| Rejections | `GET/POST /api/rejections`, `GET /api/rejections/transplant/:transplantId` |
| Surveillance | `GET/POST /api/surveillance` |

## Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string (e.g. `mongodb://mongo:27017/transplant-service`) |
| `PORT` | Service port (default: `3001`) |
| `EUREKA_HOST` | Eureka server hostname |
| `EUREKA_PORT` | Eureka server port |
| `SERVICE_NAME` | Service name registered in Eureka |
| `INSTANCE_HOST` | Hostname this instance advertises to Eureka |

## Features

- **Transplant lifecycle** — full tracking from donor matching to long-term follow-up
- **Biopsy records** — Banff classification scores and pathology findings
- **Complication tracking** — rejection episodes, infections, and other post-transplant events
- **HLA compatibility** — donor/recipient HLA typing and mismatch scoring
- **Drug protocols** — immunosuppression regimen tracking (tacrolimus, mycophenolate, etc.)
- **Rejection history** — timestamped rejection events linked to transplants
- **Surveillance** — scheduled follow-up visit records

## Running Locally

```bash
npm install
npm run start:dev
```

Requires MongoDB on `mongodb://localhost:27017` and Eureka on `http://localhost:8761`.

## Docker

```bash
docker build -t azizos07/transplant-service:latest .
docker run -p 3001:3001 \
  -e MONGODB_URI=mongodb://mongo:27017/transplant-service \
  -e EUREKA_HOST=eureka \
  -e EUREKA_PORT=8761 \
  -e SERVICE_NAME=transplant-service \
  -e INSTANCE_HOST=transplant-service \
  azizos07/transplant-service:latest
```
