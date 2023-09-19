import React from 'react';

interface MenuItemProps {
  label: string;
  href: string;
  id: number;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, onClick }) => (
  <a onClick={onClick} href={href}>
    {label}
  </a>
);

export default MenuItem;