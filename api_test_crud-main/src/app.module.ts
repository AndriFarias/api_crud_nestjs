import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './alunos/shared/alunos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://andry:CnTrFR7gkqguDJ5S@cluster0.vtwo9ta.mongodb.net/alunos?retryWrites=true&w=majority',
    ),
    AlunoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
