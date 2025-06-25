import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  // Use a visible color for both light and dark mode
  // bg-gray-200 for light, bg-slate-700 for dark
  return (
    <div
      className={cn(
        "animate-pulse rounded-md",
        "bg-gray-200 dark:bg-slate-700",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
