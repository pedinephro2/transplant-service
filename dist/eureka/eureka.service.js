"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EurekaRegistryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EurekaRegistryService = void 0;
const common_1 = require("@nestjs/common");
const { Eureka } = require('eureka-js-client');
let EurekaRegistryService = EurekaRegistryService_1 = class EurekaRegistryService {
    constructor() {
        this.logger = new common_1.Logger(EurekaRegistryService_1.name);
    }
    register(port) {
        const appName = process.env.SERVICE_NAME || 'transplant-service';
        const host = process.env.INSTANCE_HOST || 'localhost';
        const eurekaHost = process.env.EUREKA_HOST || 'localhost';
        const eurekaPort = Number(process.env.EUREKA_PORT) || 8761;
        this.client = new Eureka({
            instance: {
                app: appName,
                instanceId: `${host}:${appName}:${port}`,
                hostName: host,
                ipAddr: '127.0.0.1',
                statusPageUrl: `http://${host}:${port}/`,
                healthCheckUrl: `http://${host}:${port}/`,
                port: { $: port, '@enabled': true },
                vipAddress: appName,
                dataCenterInfo: {
                    '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                    name: 'MyOwn',
                },
            },
            eureka: {
                host: eurekaHost,
                port: eurekaPort,
                servicePath: '/eureka/apps/',
            },
        });
        this.client.start((err) => {
            if (err) {
                this.logger.error('Eureka registration failed: ' + err.message);
            }
            else {
                this.logger.log(`Registered with Eureka as ${appName} on port ${port}`);
            }
        });
    }
    onModuleDestroy() {
        if (this.client) {
            this.client.stop();
        }
    }
};
exports.EurekaRegistryService = EurekaRegistryService;
exports.EurekaRegistryService = EurekaRegistryService = EurekaRegistryService_1 = __decorate([
    (0, common_1.Injectable)()
], EurekaRegistryService);
//# sourceMappingURL=eureka.service.js.map