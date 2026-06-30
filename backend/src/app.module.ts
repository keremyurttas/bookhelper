import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { WordsModule } from './words/words.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), PrismaModule, WordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
