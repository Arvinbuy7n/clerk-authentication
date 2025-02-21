"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@clerk/nextjs";

export default function Home() {
  const { session } = useSession();

  return (
    <div className="flex">
      <p>Hello</p>

      <Avatar>
        <AvatarImage src={session?.user.imageUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
