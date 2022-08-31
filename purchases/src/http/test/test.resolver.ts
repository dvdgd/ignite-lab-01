import { Controller, UseGuards } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AuthorizationGuard } from '../auth/authorization.guard';

@Controller('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello purchases';
  }
}
