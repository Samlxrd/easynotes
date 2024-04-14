import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';
export declare class NoteService {
    private readonly dbConnectionService;
    constructor(dbConnectionService: DbconnectionService);
    create(createNoteDto: CreateNoteDto): Promise<any>;
    getNotesByUserId(id: number): Promise<any>;
    getNoteByUserId(user_id: number, id: number): Promise<any>;
    update(id: number, updateNoteDto: UpdateNoteDto): void;
    remove(id: number): Promise<any>;
}
