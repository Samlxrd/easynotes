import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DbconnectionService],
  exports: [UserService, DbconnectionService]
})
export class UserModule {}
