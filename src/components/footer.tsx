import { CATEGORIES } from '@/utils/categories';
import BlogLogo from './booking-app-logo';
import PageContainer from './page-container';
import Link from 'next/link';
import { Button } from './ui/button';
import ShowCategories from './show-categories';

const Footer = () => {
  return (
    <footer className="p-6 border-t">
      <PageContainer>
        <div className="flex flex-col lg:flex-row items-start md:items-center justify-between">
          <div className="">
            <BlogLogo />
          </div>
          <div className="flex flex-col md:justify-end md:flex-row gap-2 lg:gap-6">
            <ShowCategories categories={CATEGORIES} />
            <Link href="/reservation">
              <Button variant="ghost"></Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
