import PageContainer from '@/components/page-container';
import { Separator } from '@/components/ui/separator';
import { TICKETS } from '@/utils/tickets';
import { notFound } from 'next/navigation';
import React from 'react';

const SingleTicketPage = ({ params }: { params: { slug: string } }) => {
  const Ticket = TICKETS.find((ticket) => ticket.slug === params.slug);
  if (!Ticket) return notFound();
  return (
    <PageContainer>
      <div className="p-8">
        <div className="bg-[url('/images/bg-bus-img2.jpg')] rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/50 p-4 rounded-lg">
              <h1 className="text-center font-bold text-3xl sm:text-5xl text-black dark:text-white">
                {Ticket.caption}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 mb-3">
          <p className="text-lg font-semibold">{Ticket.title}</p>
        </div>
        <Separator />
        <div className="mt-6">{Ticket.caption}</div>
      </div>
    </PageContainer>
  );
};

export default SingleTicketPage;
