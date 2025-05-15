import { defaultUsers } from '@/app/atomStorage';
import { User } from '@/app/types';
import { hashPassword } from '@/lib/auth';

// Хранилище пользователей в памяти
let users: User[] = [];

export default {
  async create(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    const hashedPassword = await hashPassword(userData.password, userData.salt);

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      ...userData,
      password: hashedPassword,
      salt: userData.salt,
      role: userData.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(newUser);
    return newUser;
  },

  async findByEmail(email: string): Promise<User | null> {
    return users.find((user) => user.email === email) || null;
  },

  async findById(id: string): Promise<User | null> {
    return users.find((user) => user.id === id) || null;
  },

  /* Обновление данных пользователя
   
  async update(id: string, updateData: Partial<Omit<User, 'id'>>): Promise<User | null> {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;

    const updatedUser = {
      ...users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    if (updateData.password) {
      updatedUser.password = await hashPassword(updateData.password);
    }

    users[userIndex] = updatedUser;
    return updatedUser;
  },*/

  /*
  async delete(id: string): Promise<boolean> {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length !== initialLength;
  },*/

  /* Получение всех пользователей
   
  async getAll(): Promise<Omit<User, 'password'>[]> {
    return users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }*/
};
