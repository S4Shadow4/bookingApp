import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Link from 'next/link';
import { CATEGORIES } from '@/utils/categories';
import { Category } from '@/types/type';

export function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <Link href="/dashboard" className="w-full">
            <Button className="text-xl" variant="ghost">
              Tableau de bord
            </Button>
          </Link>
          <Link href="/reservation" className="w-full">
            <Button className="text-xl" variant="ghost">
              Effectuez une réservation
            </Button>
          </Link>
          <p className="text-xl">Categories</p>
          {CATEGORIES.map((category: Category) => {
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="block px-2 py-1 text-lg"
              >
                <Button className="pr-28" variant="ghost">
                  {category.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
