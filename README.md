# transplant-service (NestJS + MongoDB)

NestJS port of the original Spring Boot `transplant-service`. Registers with Eureka and is routed via Spring Cloud Gateway under `lb://transplant-service`.

## Prerequisites
- Node.js 18+
- MongoDB running on `mongodb://localhost:27017`
- Eureka server on `http://localhost:8761`

## Install & run
```bash
cd transplant-service
npm install
npm run start:dev
```

Service listens on port **3001** and registers with Eureka as `transplant-service`.

## Endpoints
All endpoints are reachable directly or via the gateway (`http://localhost:8085`):

- `/api/transplants`  (CRUD)
- `/api/biopsies` + `/api/biopsies/transplant/:transplantId`
- `/api/complications`
- `/api/hla`
- `/api/drugs`
- `/api/rejections` + `/api/rejections/transplant/:transplantId`
- `/api/surveillance`
