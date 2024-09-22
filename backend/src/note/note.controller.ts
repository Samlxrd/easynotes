import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  create(@Body() createNoteDto: CreateNoteDto, @Request() req ) {
    const id = req.user.id;
    createNoteDto.user_id = id;
    return this.noteService.create(createNoteDto);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthGuard)
  getNotesByUserId(@Request() req) {
    const id = req.user.id;
    return this.noteService.getNotesByUserId(+id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getNoteByUserId(@Request() req, @Param('id') id: string) {
    const userId = req.user.id;
    return this.noteService.getNoteByUserId(+userId, +id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    console.log(id, updateNoteDto)
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
