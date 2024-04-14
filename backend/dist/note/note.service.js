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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const dbconnection_service_1 = require("../dbconnection/dbconnection.service");
let NoteService = class NoteService {
    constructor(dbConnectionService) {
        this.dbConnectionService = dbConnectionService;
    }
    create(createNoteDto) {
        let query = `INSERT INTO notes (title, body, group_id, user_id) VALUES ('${createNoteDto.title}', '${createNoteDto.body}', ${createNoteDto.group_id || null}, ${createNoteDto.user_id});`;
        return this.dbConnectionService.executeQuery(query);
    }
    getNotesByUserId(id) {
        let query = `SELECT * FROM notes WHERE user_id = ${id};`;
        return this.dbConnectionService.executeQuery(query);
    }
    getNoteByUserId(user_id, id) {
        let query = `SELECT * FROM notes WHERE user_id = ${user_id} AND id = ${id};`;
        return this.dbConnectionService.executeQuery(query);
    }
    update(id, updateNoteDto) {
        if (updateNoteDto.title) {
            let query = `UPDATE notes SET title = '${updateNoteDto.title}' WHERE id = ${id};`;
            this.dbConnectionService.executeQuery(query);
        }
        if (updateNoteDto.body) {
            let query = `UPDATE notes SET body = '${updateNoteDto.body}' WHERE id = ${id};`;
            this.dbConnectionService.executeQuery(query);
        }
        if (updateNoteDto.group_id) {
            let query = `UPDATE notes SET group_id = ${updateNoteDto.group_id} WHERE id = ${id};`;
            this.dbConnectionService.executeQuery(query);
        }
        return;
    }
    remove(id) {
        let query = `DELETE from notes where id = ${id};`;
        return this.dbConnectionService.executeQuery(query);
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dbconnection_service_1.DbconnectionService])
], NoteService);
//# sourceMappingURL=note.service.js.map