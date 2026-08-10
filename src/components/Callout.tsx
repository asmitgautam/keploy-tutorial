import { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warning";

const styles: Record<CalloutType, string> = {
  info: "border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5",
  tip: "border-[#2DD4BF] bg-[#2DD4BF]/10",
  warning: "border-[#F2A93C] bg-[#F2A93C]/10",
};

const labels: Record<CalloutType, string> = {
  info: "NOTE",
  tip: "TIP",
  warning: "WATCH OUT",
};

export function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  return (
    <div className={`border-l-4 rounded-r-md px-4 py-3 my-6 text-black dark:text-white ${styles[type]}`}>
      <p className="font-mono font-semibold mb-1 text-xs tracking-widest">
        {labels[type]}
      </p>
      <div className="text-sm leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
}