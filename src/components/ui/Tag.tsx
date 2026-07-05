type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex min-h-7 items-center rounded-md border border-ink-200 bg-white px-2.5 text-xs font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200">
      {children}
    </span>
  );
}
