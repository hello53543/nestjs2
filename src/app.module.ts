import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    BooksModule,
    PrismaModule, // ❗ PrismaModule importieren
  ],
})
export class AppModule {}
