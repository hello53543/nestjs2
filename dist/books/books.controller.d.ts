import { BooksService } from './books.service';
import { Book } from '@prisma/client';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Promise<Book[]>;
    createBook(bookData: Omit<Book, 'id'>): Promise<Book>;
    getBookById(id: number): Promise<Book | null>;
    updateBook(id: number, bookData: Partial<Omit<Book, 'id'>>): Promise<Book>;
    deleteBook(id: number): Promise<Book>;
}
