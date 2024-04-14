import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Module({
  controllers: [NoteController],
  providers: [NoteService, DbconnectionService],
})
export class NoteModule {}
