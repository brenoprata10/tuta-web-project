import clsx from "clsx";

export const Loader = ({ className }: { className?: string }) => {
  return <span className={clsx("loader", className)}></span>;
};
