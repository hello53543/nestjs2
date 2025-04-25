import { AppService } from './app.service';
export declare class BooksController {
    private readonly appService;
    constructor(appService: AppService);
    getAllBooks(): string;
}
