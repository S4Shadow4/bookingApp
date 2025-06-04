import { Ticket } from '@/types/type';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Clock, Clock8 } from 'lucide-react';

const TicketCard = ({ data }: { data: Ticket }) => {
  return (
    <Link className="transition-all duration-300 hover:scale-105" href={`/tickets/${data.slug}`}>
      <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
        <CardHeader>
          <div className="aspect-square relative">
            <Image
              src={data.image || '/images/bus-img1.jpg'}
              alt={data.title}
              fill
              className="rounded-lg aspect-square object-cover  "
            />
          </div>
          <p className="text-lg font-semibold mt-3">{data.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{data.category}</Badge>
          <div className="flex items-center justify-between pt-2">
            <p>
              Prix: <span className=" text-lg font-semibold italic">{data.price}</span> FCFA
            </p>
            <p>
              Places: <span className="text-lg font-semibold ">{data.availableSeats}</span>{' '}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex gap-2">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-slate-600" />
              <p className="text-slate-600">{data.departureTime}</p>
              <Clock8 size={20} className="text-slate-600" />
              <p className="text-slate-600">{data.arrivalTime}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TicketCard;
