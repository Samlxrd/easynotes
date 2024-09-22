import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Injectable()
export class NoteService {
  constructor(private readonly dbConnectionService: DbconnectionService) {}
  async create(createNoteDto: CreateNoteDto) {
    let query = `INSERT INTO notes (title, body, group_id, user_id) VALUES ('${createNoteDto.title}', '${createNoteDto.body}', ${createNoteDto.group_id || null}, ${createNoteDto.user_id});`;
    return await this.dbConnectionService.executeQuery(query);
  }

  getNotesByUserId(id: number) {
    let query = `SELECT * FROM notes WHERE user_id = ${id};`;
    return this.dbConnectionService.executeQuery(query);
  }

  getNoteByUserId(user_id: number, id: number) {
    let query = `SELECT * FROM notes WHERE user_id = ${user_id} AND id = ${id};`;
    return this.dbConnectionService.executeQuery(query);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    console.log(id, updateNoteDto)

    if (updateNoteDto.title) {
      let query = `UPDATE notes SET title = '${updateNoteDto.title}' WHERE id = ${id};`;
      await this.dbConnectionService.executeQuery(query);
    }
    
    if (updateNoteDto.body) {
      let query = `UPDATE notes SET body = '${updateNoteDto.body}' WHERE id = ${id};`;
      await this.dbConnectionService.executeQuery(query);
    }
    
    if (updateNoteDto.group_id) {
      let query = `UPDATE notes SET group_id = ${updateNoteDto.group_id} WHERE id = ${id};`;
      await this.dbConnectionService.executeQuery(query);
    }

    return ;
  }

  remove(id: number) {
    let query = `DELETE from notes where id = ${id};`;
    return this.dbConnectionService.executeQuery(query);
  }
}