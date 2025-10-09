import { ComponentProps, PropsWithChildren } from "react";

enum TextVariants {
  default = "",
  p = "leading-7 [&:not(:first-child)]:mt-6",
  quote = "mt-6 border-l-2 pl-6 italic",
  code = "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead = "text-muted-foreground text-xl",
  h4 = "scroll-m-20 text-xl font-semibold tracking-tight",
  h3 = "scroll-m-20 text-2xl font-semibold tracking-tight",
  h2 = "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h1 = "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
}

enum TextSize {
  default = "text-md",
  sm = "text-sm leading-none font-medium",
  lg = "text-lg font-semibold",
}

interface TextProps {
  variant?: keyof typeof TextVariants;
  size?: keyof typeof TextSize;
}

export default function Text({
  variant = "default",
  size = "default",
  children,
  className,
}: TextProps &
  PropsWithChildren &
  ComponentProps<
    "p" | "h1" | "h2" | "h3" | "h4" | "code" | "blockquote" | "small"
  >) {
  const sizeClasses = TextSize[size];
  const variantClasses = TextVariants[variant];
  const finalClasses = [variantClasses, sizeClasses, className].join(" ");

  switch (variant) {
    case "h1":
      return <h1 className={finalClasses}>{children}</h1>;
    case "h2":
      return <h2 className={finalClasses}>{children}</h2>;
    case "h3":
      return <h3 className={finalClasses}>{children}</h3>;
    case "h4":
      return <h4 className={finalClasses}>{children}</h4>;
    case "quote":
      return <blockquote className={finalClasses}>{children}</blockquote>;
    case "code":
      return <code className={finalClasses}>{children}</code>;
    default:
      return <p className={finalClasses}>{children}</p>;
  }
}
