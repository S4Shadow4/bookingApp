export type UserType = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  image: string;
  address: string;
  cp: number;
  city: string;
  country: string;
};

export type DbContextType = {
  users: UserType[];
};
