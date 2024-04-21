import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Injectable()
export class GroupService {
  constructor(private readonly execute: DbconnectionService) { }

  create(createGroupDto: CreateGroupDto) {
    let query = `INSERT INTO group (title, fixed) VALUES (${createGroupDto.title}, 0);`;
    return this.execute.executeQuery(query);
  }

  findAll() { 
    let query = "SELECT * FROM group;";
    return this.execute.executeQuery(query);
  }

  findOne(id: number) { 
    let query = `SELECT * FROM group WHERE id = ${id};`;
    return this.execute.executeQuery(query);
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    if (updateGroupDto.title) {
      let query = `UPDATE group SET title = ${updateGroupDto.title} WHERE id = ${id};`;
      return this.execute.executeQuery(query);
    }if (updateGroupDto.fixed) {
      let query = `UPDATE group SET fixed = ${updateGroupDto.fixed} WHERE id = ${id};`;
      return this.execute.executeQuery(query);
    }
  }

  remove(id: number) {
    let query = `DELETE FROM group WHERE id = ${id};`;
    return this.execute.executeQuery(query);
  }
}
