import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createWordDto: CreateWordDto) {
    return this.create(createWordDto);
  }

  findAll() {
    return this.prisma.word.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return this.update(id, updateWordDto);
  }

  remove(id: number) {
    return this.remove(id);
  }
}
