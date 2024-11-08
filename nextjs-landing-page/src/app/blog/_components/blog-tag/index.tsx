// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BlogTagProps extends React.HTMLAttributes<HTMLDivElement> {}
export function BlogTag({ children }: BlogTagProps) {
  return (
    <span className="absolute bottom-6 left-6 rounded-full bg-black/50 px-3 py-0.5 font-semibold text-white lg:text-lg">
      {children}
    </span>
  );
}
