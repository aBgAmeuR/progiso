import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import { ICard } from '../types';

import { Button } from '@/components/ui/button';

type TAddCardProps = {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
};

export const AddCard = ({ column, setCards }: TAddCardProps) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder:text-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <Button
              onClick={() => setAdding(false)}
              size="sm"
              variant="ghost"
              className="px-3 py-1.5 transition-colors"
            >
              Close
            </Button>
            <Button
              type="submit"
              size="sm"
              className="flex items-center gap-1.5"
            >
              <span>Add</span>
              <Plus className="size-4" />
            </Button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <Plus className="size-4" />
        </motion.button>
      )}
    </>
  );
};
