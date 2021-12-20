import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {Gcb, GcbSchema} from './gcb';
import { GcbService } from './gcb.service';
import { GcbController } from './gcb.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Gcb.name,
                schema: GcbSchema
            }
        ])
    ],
    exports: [],
    controllers: [GcbController],
    providers: [GcbService]
})
export class GcbModule {}
