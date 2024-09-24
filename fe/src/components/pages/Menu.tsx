import React from 'react';
import MenuList from '../organisms/MenuList';
import BuddyInfoBar from '../organisms/BuddyInfoBar';

export default function Menu() {
  return (
    <div style={{ padding: '1rem' }}>
      <BuddyInfoBar />
      <MenuList />
    </div>
  );
}