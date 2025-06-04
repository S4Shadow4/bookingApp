import PageContainer from '@/components/page-container';
import { TicketList } from '@/components/tickets-list';
import ShowCategories from '@/components/show-categories';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CATEGORIES } from '@/utils/categories';
import React from 'react';
import { TICKETS } from '@/utils/tickets';

const Home = () => {
  return (
    <PageContainer>
      <main className="py-10 px-4">
        <div className="flex flex-col gap-4">
          {/* First section */}
          <div className="bg-[url('/images/bg-bus-img2.jpg')] rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary-foreground/80 dark:bg-secondary/60 p-4 rounded-lg">
                <h1 className="text-center font-bold text-3xl sm:text-5xl text-white text-opacity-80">
                  Restez connecter pour suivre l&apos;actualité
                </h1>
                <Input
                  type="email"
                  required
                  placeholder="Email"
                  className=" text-white mt-4 dark:border-neutral-400"
                />
                <Button size="lg" className="w-full py-6 text-xl mt-4">
                  S&apos;enregistrer
                </Button>
              </div>
            </div>
          </div>

          {/* Catégories section */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-2 ">
            <ShowCategories categories={CATEGORIES} />
          </div>

          {/* Posts */}
          <TicketList Tickets={TICKETS} />
        </div>
      </main>
    </PageContainer>
  );
};

export default Home;
