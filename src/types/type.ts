export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Ticket = {
  id: string;
  category: 'Bus' | 'MiniBus' | 'Big Bus';
  title: string;
  image: string;
  caption: string;
  date: string | Date;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
  driver: string;
  slug: string;
};
