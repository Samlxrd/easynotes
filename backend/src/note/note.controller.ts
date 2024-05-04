import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @Get(':id')
  @HttpCode(200)
  getNotesByUserId(@Param('id') id: string) {
    return this.noteService.getNotesByUserId(+id);
  }

  @Get(':user_id/:id')
  getNoteByUserId(@Param('user_id') userId: string, @Param('id') id: string) {
    return this.noteService.getNoteByUserId(+userId, +id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    console.log(id, updateNoteDto)
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
