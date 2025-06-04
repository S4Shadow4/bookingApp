import PageContainer from '@/components/page-container';
import React from 'react';
import { HeaderNavigation } from './header-navigation';
import ProfileButton from './profile-button';
import { ResponsiveMenu } from './responsive-menu';
import ToggleTheme from './toggle-theme';
import BlogLogo from './booking-app-logo';

const Header = () => {
  return (
    <header className="p-4 border-b ">
      <PageContainer>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-2">
            {/* Responsive menu */}
            <ResponsiveMenu />
            <BlogLogo />
          </div>

          {/* Navigation shadcn */}
          <HeaderNavigation />

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {/* Toggle */}
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
