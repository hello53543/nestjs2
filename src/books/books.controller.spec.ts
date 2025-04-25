//Test
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller'; // ✅ das ist korrekt
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController); // ✅ hier auch korrigiert
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
