"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const env_1 = require("./config/env");
async function bootstrap() {
    const logger = new common_1.Logger('Supervisor-Gateway');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    await app.listen(env_1.envs.port);
    logger.log(`Gateway running in port ${env_1.envs.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map