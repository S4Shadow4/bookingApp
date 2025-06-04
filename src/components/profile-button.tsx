import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const ProfileButton = () => {
  //user is connected --> avatar + menu
  // user is not connected --> button login
  return (
    <Link href="/signinAndUp">
      <Button>Login</Button>
    </Link>
  );
};

export default ProfileButton;
