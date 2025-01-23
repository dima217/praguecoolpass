import { FC, ReactNode } from "react";

type VariantType = "title" | "subtitle";

interface TypographyProps {
  variant: VariantType;
  className?: string;
  children: ReactNode;
}

const TYPOGRAPHY_STYLES: Record<VariantType, string> = {
  title:
    "mx-2 mt-10 mb-4 font-bold text-lg uppercase text-bg lg:mt-[50px] lg:mb-[30px] lg:text-xl",
  subtitle: "mx-2 font-semibold text-sm uppercase text-bg",
};

const TYPOGRAPHY_ELEMENTS: Record<VariantType, keyof JSX.IntrinsicElements> = {
  title: "h3",
  subtitle: "h4",
};

export const Typography: FC<TypographyProps> = ({
  variant,
  className,
  children,
}) => {
  const Element = TYPOGRAPHY_ELEMENTS[variant] || "p";
  const baseStyles = TYPOGRAPHY_STYLES[variant] || "";
  const combinedStyles = className ? `${baseStyles} ${className}` : baseStyles;

  return <Element className={combinedStyles}>{children}</Element>;
};
