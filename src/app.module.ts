import { Module } from '@nestjs/common';
import { IndicadoresModule } from './indicadores/indicadores.module';

@Module({
  imports: [IndicadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
