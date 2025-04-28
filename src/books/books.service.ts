import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async createBook(data: Omit<Book, 'id'>): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  async updateBook(id: number, data: Partial<Omit<Book, 'id'>>): Promise<Book> {
    return this.prisma.book.update({
      where: { id },
      data,
    });
  }

  async deleteBook(id: number): Promise<Book> {
    return this.prisma.book.delete({
      where: { id },
    });
  }
}
