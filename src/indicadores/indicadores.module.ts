import { Module } from '@nestjs/common';
import { IndicadoresController } from './indicadores.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { INDICADORES_SERVICE } from 'src/config/services';
import { envs } from 'src/config/env';

@Module({
  controllers: [IndicadoresController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: INDICADORES_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.indicadoresMicroserviceHost,
          port: envs.indicadoresMicroservicePort
        }
      }
    ])
  ]
})
export class IndicadoresModule {}
