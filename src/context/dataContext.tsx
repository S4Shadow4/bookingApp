'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot /* doc */ } from 'firebase/firestore';
import { db } from '@/database/firebaseConfig';
import { UserType, DbContextType } from '@/types/useTypes';

const UsersContext = createContext<DbContextType | null>(null);

export const useFirebase = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('Erreur lors de la création du context');
  }
  return context;
};

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersData: UserType[] = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() } as UserType);
      });
      setUsers(usersData);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    users,
  };

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};
