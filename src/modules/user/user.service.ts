import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}

  async getUsers(query?):Promise<User[]>{
    const users = await this.userModel.find(query);
    if(!users) throw new NotFoundException('Not found Users');
    return users;
  }

  async getUserById(id: string):Promise<User>{
    const user = await this.userModel.findById(id);
    if(!user) throw new NotFoundException('Not found User');
    return user;
  }

  async createUser(payload: User[]):Promise<User[]>{
    let users: User[] = [];
    for (let index = 0; index < payload.length; index++) {
      const element = payload[index];
      const createUser = new this.userModel(element);
      users.push(await createUser.save());
    }
    return users;
  }

  async updateUser(id: string, payload: User):Promise<User>{
    if (!id && !payload) throw new NotFoundException('Resource no found');
    const userUpdated = await this.userModel.findByIdAndUpdate(id, payload);
    return userUpdated;
  }

  async deleteUser(id: string):Promise<void>{
    const user = await this.userModel.findById(id);
    if(!user) throw new NotFoundException('Resource not found');
    user.deleteOne();
    user.save();
  }
}
