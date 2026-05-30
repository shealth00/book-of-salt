interface Props {
  title: string;
  action?: { label: string; onClick: () => void };
}

export default function SectionHeader({ title, action }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {action && (
        <button
          onClick={action.onClick}
          className="text-xs font-bold text-text-subdued hover:text-white uppercase tracking-wider transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
