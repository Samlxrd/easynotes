import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(createNoteDto: CreateNoteDto): Promise<any>;
    getNotesByUserId(id: string): Promise<any>;
    getNoteByUserId(userId: string, id: string): Promise<any>;
    update(id: string, updateNoteDto: UpdateNoteDto): void;
    remove(id: string): Promise<any>;
}
