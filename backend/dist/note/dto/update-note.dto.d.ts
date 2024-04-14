import { CreateNoteDto } from './create-note.dto';
declare const UpdateNoteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNoteDto>>;
export declare class UpdateNoteDto extends UpdateNoteDto_base {
    title?: string;
    body?: string;
    group_id?: number;
}
export {};
