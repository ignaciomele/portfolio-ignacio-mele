import React from 'react';
import { MenuItemProps } from '../../../models/database-entities';

const MenuItem: React.FC<MenuItemProps> = ({ label, href, onClick }) => (
  <a onClick={onClick} href={href}>
    {label}
  </a>
);

export default MenuItem;