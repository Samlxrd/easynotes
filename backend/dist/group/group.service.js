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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const dbconnection_service_1 = require("../dbconnection/dbconnection.service");
let GroupService = class GroupService {
    constructor(execute) {
        this.execute = execute;
    }
    create(createGroupDto) {
        let query = `INSERT INTO grupo (title, fixed) VALUES ('${createGroupDto.title}', ${createGroupDto.fixed})`;
        return this.execute.executeQuery(query);
    }
    findAll() {
        let query = "SELECT * FROM grupo;";
        return this.execute.executeQuery(query);
    }
    findOne(id) {
        let query = `SELECT * FROM grupo WHERE id = ${id};`;
        return this.execute.executeQuery(query);
    }
    update(id, updateGroupDto) {
        if (updateGroupDto.title) {
            let query = `UPDATE grupo SET title = '${updateGroupDto.title}' WHERE id = ${id};`;
            return this.execute.executeQuery(query);
        }
        if (updateGroupDto.fixed) {
            let query = `UPDATE grupo SET fixed = '${updateGroupDto.fixed}' WHERE id = ${id};`;
            return this.execute.executeQuery(query);
        }
    }
    remove(id) {
        let query = `DELETE FROM grupo WHERE id = ${id};`;
        return this.execute.executeQuery(query);
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dbconnection_service_1.DbconnectionService])
], GroupService);
//# sourceMappingURL=group.service.js.map