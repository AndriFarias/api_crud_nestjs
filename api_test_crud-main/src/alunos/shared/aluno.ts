import { Document } from 'mongoose';

export class Aluno extends Document {
  nome: string;
  sobrenome: string;
  matricula: number;
  cpf: string;
  data_de_nascimento: Date;
  curso: string;
  status: boolean;
}
