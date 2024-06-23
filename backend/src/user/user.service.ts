import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  public readonly service: Repository<User>;
  constructor(public dto: DataSource) {
    this.service = this.dto.getRepository(User);
  }
 
  async create(createUserDto: CreateUserDto) {
    
    return await this.service.save(createUserDto);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    console.log(`Searching for user with email: ${email}`);
    const user = await this.service.findOne({ where: { email } });
    console.log(`User found: ${JSON.stringify(user)}`);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
