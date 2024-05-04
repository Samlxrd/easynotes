import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly execute: DbconnectionService) { }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword =  await bcrypt.hash(createUserDto.password, 10);

    let query = `INSERT INTO users (username, password, email) VALUES ('${createUserDto.username}', '${hashedPassword}', '${createUserDto.email}');`
    return this.execute.executeQuery(query);
  }

  getUsers() {
    let query = "SELECT * FROM users;";
    return this.execute.executeQuery(query);
  }

  getUserById(id: number) {
    let query = `SELECT * FROM users WHERE id = ${id};`
    return this.execute.executeQuery(query);
  }

  async getUserByUsername(username: string): Promise<User>{
    let query = `SELECT * FROM users WHERE username = '${username}';`
    return this.execute.executeQuery(query);
  }

  updateAll(id: number, updateUserDto: UpdateUserDto) {

    if (updateUserDto.username) {
      let query = `UPDATE users SET username = ${updateUserDto.username} WHERE id = ${id}`;
      return this.execute.executeQuery(query);
    }

    if (updateUserDto.password) {
      let query = `UPDATE users SET password = ${updateUserDto.password} WHERE id = ${id}`;
      return this.execute.executeQuery(query);
    }
    
    if (updateUserDto.email) { 
      let query = `UPDATE users SET email = ${updateUserDto.email} WHERE id = ${id}`;
      return this.execute.executeQuery(query);
    }
  }

  remove(id: number) {
    let query = `DELETE FROM users WHERE id = ${id};`
    return this.execute.executeQuery(query);
  }

}
