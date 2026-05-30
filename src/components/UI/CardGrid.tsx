import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function CardGrid({ title, children, className = '' }: Props) {
  return (
    <section className={`mb-8 ${ className }`}>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {children}
      </div>
    </section>
  );
}
