import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserAvatar() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar className="rounded-lg">
        <AvatarImage src="/images/bus-img1.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
