import { useState } from 'react';
import { NavState, Page } from '../types';

export function useNav() {
  const [nav, setNav] = useState<NavState>({ page: 'home' });

  const navigate = (page: Page, id?: string) => setNav({ page, id });

  return { nav, navigate };
}
