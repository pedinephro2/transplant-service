import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Eureka } = require('eureka-js-client');

@Injectable()
export class EurekaRegistryService implements OnModuleDestroy {
  private readonly logger = new Logger(EurekaRegistryService.name);
  private client: any;

  register(port: number) {
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

    this.client.start((err: any) => {
      if (err) {
        this.logger.error('Eureka registration failed: ' + err.message);
      } else {
        this.logger.log(`Registered with Eureka as ${appName} on port ${port}`);
      }
    });
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.stop();
    }
  }
}
