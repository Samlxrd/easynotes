import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Injectable()
export class GroupService {
  constructor(private readonly execute: DbconnectionService) { }
  create(createGroupDto: CreateGroupDto) {
    let query = `INSERT INTO grupo (title, fixed) VALUES ('${createGroupDto.title}', ${createGroupDto.fixed})`;
    return this.execute.executeQuery(query);
  }

  findAll() { 
    let query = "SELECT * FROM grupo;";
    return this.execute.executeQuery(query);
  }

  findOne(id: number) { 
    let query = `SELECT * FROM grupo WHERE id = ${id};`;
    return this.execute.executeQuery(query);
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    if (updateGroupDto.title) {
      let query = `UPDATE grupo SET title = '${updateGroupDto.title}' WHERE id = ${id};`;
      return this.execute.executeQuery(query);
    }if (updateGroupDto.fixed) {
      let query = `UPDATE grupo SET fixed = '${updateGroupDto.fixed}' WHERE id = ${id};`;
      return this.execute.executeQuery(query);
    }
  }

  remove(id: number) {
    let query = `DELETE FROM grupo WHERE id = ${id};`;
    return this.execute.executeQuery(query);
  }
}
