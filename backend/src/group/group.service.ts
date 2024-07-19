import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Injectable()
export class GroupService {
  constructor(private readonly execute: DbconnectionService) { }
  create(createGroupDto: CreateGroupDto) {
    let query = `INSERT INTO grupo (title, fixed, user_id) VALUES ('${createGroupDto.title}', ${createGroupDto.fixed || 0}, ${createGroupDto.user_id});`;
    return this.execute.executeQuery(query);
  }

  getGroupsByUserId(id: number) { 
    let query = `SELECT * FROM grupo WHERE user_id = ${id};`;
    return this.execute.executeQuery(query);
  }

  getGroupByUserId(user_id: number, id: number) { 
    let query = `SELECT * FROM grupo WHERE user_id = ${user_id} AND id = ${id};`;
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
