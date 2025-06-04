'use client';
interface IShowCategories {
  categories: Category[];
  className?: string;
}
import { Category } from '@/types/type';
import Link from 'next/link';
import { Button } from './ui/button';

const ShowCategories = ({ categories, className }: IShowCategories) => {
  return categories.map((category: Category) => (
    <Link className={`${className}`} key={category.id} href={`/categories/${category.slug}`}>
      <Button variant="outline">{category.name}</Button>
    </Link>
  ));
};

export default ShowCategories;
