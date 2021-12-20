import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { GcbModule } from './gcb/gcb.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://827581354455:827581354455@cluster0.svrkx.mongodb.net/gcb"), GcbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
