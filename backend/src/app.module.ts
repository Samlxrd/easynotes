import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbconnectionService } from './dbconnection/dbconnection.service';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [NoteModule, UserModule],
  controllers: [AppController],
  providers: [AppService, DbconnectionService],
})
export class AppModule {}
