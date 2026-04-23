"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const eureka_service_1 = require("./eureka/eureka.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = Number(process.env.PORT) || 3001;
    await app.listen(port);
    const eureka = app.get(eureka_service_1.EurekaRegistryService);
    eureka.register(port);
    console.log(`transplant-service running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map