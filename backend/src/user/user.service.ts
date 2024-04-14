import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';

@Injectable()
export class UserService {
  constructor(private readonly execute: DbconnectionService) { }

  create(createUserDto: CreateUserDto) {
    let query = `INSERT INTO user (username, password) VALUES (${createUserDto.username}, ${createUserDto.password});`
    return this.execute.executeQuery(query);
  }

  findAll() {
    let query = "SELECT * FROM users;";
    return this.execute.executeQuery(query);
  }

  findOne(id: number) {
    let query = `SELECT * FROM users WHERE id = ${id}`
    return this.execute.executeQuery(query);
  }

  updateAll(id: number, updateUserDto: UpdateUserDto) {

    if (updateUserDto.username && updateUserDto.password) {
      let query = `UPDATE users SET username = ${updateUserDto.username}, password = ${updateUserDto.password}`;
      return this.execute.executeQuery(query);

    } else if (updateUserDto.username) {
      let query = `UPDATE users SET username = ${updateUserDto.username}`;
      return this.execute.executeQuery(query);

    } else if (updateUserDto.password) {
      let query = `UPDATE users SET password = ${updateUserDto.password}`;
      return this.execute.executeQuery(query);

    }
  }

  remove(id: number) {
    let query = `DELETE FROM users WHERE id = ${id}`
    return this.execute.executeQuery(query);
  }

}
