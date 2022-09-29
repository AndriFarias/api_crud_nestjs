import { AlunoService } from './aluno.service';
import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunoSchema } from '../schemas/aluno.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }])],
  controllers: [AlunosController],
  providers: [AlunoService],
})
export class AlunoModule {}
