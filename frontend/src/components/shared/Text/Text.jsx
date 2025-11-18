import clsx from "clsx";

const tagByVariant = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
};

export function Text({
  as,
  variant = "body",
  className,
  children,
  ...rest
}) {
  const Tag = as || tagByVariant[variant] || "span";
  return (
    <Tag
      className={clsx("typo", `typo--${variant}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
