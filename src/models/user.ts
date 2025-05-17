import { User } from '@/app/types';
import { hashPassword } from '@/lib/auth';

// Хранилище пользователей в памяти
let users: User[] = [
  {
    id: 'oyfefpq',
    email: 'admin@example.com',
    password:
      '84,254,193,207,176,74,70,230,64,94,237,212,169,207,252,83:17956d5bd99b6d33adf8151c8832b2ee9ac7a02ba0aef5f384cc7e14f70c0c31',
    name: 'Admin',
    role: 'admin',
    createdAt: new Date('2025-05-16T14:01:52.245Z'),
    updatedAt: new Date('2025-05-16T14:01:52.245Z'),
  },
];

export default {
  async create(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<User> {
    const salt = crypto.getRandomValues(new Uint8Array(16)).toString('hex');
    const hashedPassword = await hashPassword(userData.password, salt);
    const hashedPasswordWithSalt = salt + ':' + hashedPassword;

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      ...userData,
      password: hashedPasswordWithSalt,
      role: userData.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log(newUser);

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
