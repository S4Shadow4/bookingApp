interface ICategoryBadge {
  slug: string;
  children: string;
}

import { badgeVariants } from '@/components/ui/badge';
import Link from 'next/link';

export function CategoryBadge({ slug, children }: ICategoryBadge) {
  return (
    <Link href={slug} className={badgeVariants({ variant: 'outline' })}>
      {children}
    </Link>
  );
}
