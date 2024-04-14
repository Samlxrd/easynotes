"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const dbconnection_service_1 = require("../dbconnection/dbconnection.service");
let UserService = class UserService {
    constructor(execute) {
        this.execute = execute;
    }
    create(createUserDto) {
        let query = `INSERT INTO user (username, password) VALUES (${createUserDto.username}, ${createUserDto.password});`;
        return this.execute.executeQuery(query);
    }
    findAll() {
        let query = "SELECT * FROM users;";
        return this.execute.executeQuery(query);
    }
    findOne(id) {
        let query = `SELECT * FROM users WHERE id = ${id}`;
        return this.execute.executeQuery(query);
    }
    updateAll(id, updateUserDto) {
        if (updateUserDto.username && updateUserDto.password) {
            let query = `UPDATE users SET username = ${updateUserDto.username}, password = ${updateUserDto.password}`;
            return this.execute.executeQuery(query);
        }
        else if (updateUserDto.username) {
            let query = `UPDATE users SET username = ${updateUserDto.username}`;
            return this.execute.executeQuery(query);
        }
        else if (updateUserDto.password) {
            let query = `UPDATE users SET password = ${updateUserDto.password}`;
            return this.execute.executeQuery(query);
        }
    }
    remove(id) {
        let query = `DELETE FROM users WHERE id = ${id}`;
        return this.execute.executeQuery(query);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dbconnection_service_1.DbconnectionService])
], UserService);
//# sourceMappingURL=user.service.js.map