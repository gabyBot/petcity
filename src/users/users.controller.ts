import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  } 

  @Get(':ID')
  findOne(@Param('ID') ID: number) {
    
    return this.usersService.findOne(+ID);
  }
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createUserDto: CreateUserDto) { 
    return this.usersService.create(createUserDto);
  }
 @Put()
 update(@Body() updateUserDto: UpdateUserDto){
  return this.usersService.update(updateUserDto);
 }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
