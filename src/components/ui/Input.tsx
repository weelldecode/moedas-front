import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  ariaLabel?: string;
};

export function Input({ className = "", ariaLabel, ...props }: Props) {
  return (
    <input
      aria-label={ariaLabel}
      className={[
        "w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm",
        "placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
