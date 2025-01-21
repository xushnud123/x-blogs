'use client';
import { FC, useState } from 'react';
import { List } from './list';
import { Item } from './item';
import { AnimatePresence } from 'framer-motion';

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [id, setId] = useState('');
  return (
    <div className="block">
      <List selectedId={id} onId={setId} />
      <AnimatePresence>{id && <Item id={id} key="item" onId={setId} />}</AnimatePresence>
    </div>
  );
};

export default Main;
