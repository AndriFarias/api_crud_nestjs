import * as mongoose from 'mongoose';
export const AlunoSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  matricula: Number,
  cpf: String,
  data_de_nascimento: Date,
  curso: String,
  status : Boolean
})
