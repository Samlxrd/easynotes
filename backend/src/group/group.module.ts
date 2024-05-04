import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Module({
  controllers: [GroupController],
  providers: [GroupService, DbconnectionService],
})
export class GroupModule {}
