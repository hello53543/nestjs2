import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() bookData: Omit<Book, 'id'>): Promise<Book> {
    return this.booksService.createBook(bookData);
  }

  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book | null> {
    return this.booksService.getBookById(id);
  }

  @Put(':id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() bookData: Partial<Omit<Book, 'id'>>,
  ): Promise<Book> {
    return this.booksService.updateBook(id, bookData);
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.booksService.deleteBook(id);
  }
}
