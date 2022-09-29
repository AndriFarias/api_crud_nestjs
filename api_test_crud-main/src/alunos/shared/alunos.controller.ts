import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Controller('alunos')
export class AlunosController {
  constructor(private alunoService: AlunoService) {}

  @Get()
  async getAll(): Promise<Aluno[]> {
    return this.alunoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Aluno> {
    return this.alunoService.getById(id);
  }

  @Post()
  async create(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() aluno: Aluno): Promise<Aluno> {
    aluno.id = id;
    return this.alunoService.update(id, aluno);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.alunoService.delete(id);
  }
}
