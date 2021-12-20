import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gcb } from './gcb';
import axios from 'axios';

@Injectable()
export class GcbService {
  constructor(@InjectModel(Gcb.name) private gcbModel: Model<Gcb>) {}

  async listarTodos(): Promise<Gcb[]> {
    return this.gcbModel.find().exec();
  }

  async criar(gcb: Gcb): Promise<Gcb> {
    await axios.post(https://pagamentos.grafeno.be/api/v1/charges,{},{
      headers: {
        'Authorization': ``
    }
    const gcbCriado = new this.gcbModel(gcb);

    return gcbCriado.save();
  }

  async buscarPorId(id: string): Promise<Gcb> {
    return this.gcbModel.findById(id).exec();
  }

  async atualizar(id: string, gcb: Gcb): Promise<Gcb> {
    return this.gcbModel.findByIdAndUpdate(id, gcb).exec();
  }

  async remover(id: string) {
    const gcbApagado = this.gcbModel.findOneAndDelete({ _id: id }).exec();

    return (await gcbApagado).remove();
  }
}
