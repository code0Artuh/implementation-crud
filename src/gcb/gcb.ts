import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsEmpty,
  IsObject,
} from 'class-validator';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Gcb extends Document {
  @Prop()
  @IsString()
  uuid: string;

  @Prop()
  @IsString()
  status: string;

  @Prop()
  @IsString()
  paymentMethod: string;

  @Prop()
  @IsString()
  dueDate: string;

  @Prop()
  @IsInt()
  value: number;

  @Prop()
  @IsInt()
  discountValue: number;

  @Prop()
  @IsString()
  discountType: string;

  @Prop()
  @IsInt()
  abatementValue: number;

  @Prop()
  @IsInt()
  applicableFine: number;

  @Prop({ type: MongooseSchema.Types.Array })
  @IsObject()
  payer: {
    name: string;
    documentNumber: number;
    email: string;
    phone: {
      countryCode: number;
      areaCode: number;
      number: number;
    };
    address: {
      street: string;
      number: string;
      complement: string;
      zipCode: number;
      neighborhood: string;
      city: string;
      state: string;
    };
    boleto: {
      registrationMethod: string;
      pdf: string;
    };
    origin: string;
    grantor: Record<string, any>;
    payments: [];
    fees: [];
  };
}

export const GcbSchema = SchemaFactory.createForClass(Gcb);
