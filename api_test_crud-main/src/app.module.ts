import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './alunos/shared/alunos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/alunos',
    ),
    AlunoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
