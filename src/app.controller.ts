import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('books')
export class BooksController {
  constructor(private readonly appService: AppService) {}

 // app.controller.ts
@Get()
getAllBooks(): string {
  return "Book";
}



}
