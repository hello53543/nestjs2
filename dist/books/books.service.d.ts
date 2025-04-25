import { PrismaService } from '../prisma/prisma.service';
import { Book } from '@prisma/client';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBooks(): Promise<Book[]>;
    createBook(data: Omit<Book, 'id'>): Promise<Book>;
}
