import { forwardRef } from "react";

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

const spacings = {
  none: "",
  compact: "py-12 md:py-16",
  default: "py-20 md:py-28",
  loose: "py-28 md:py-36",
};

const Section = forwardRef(function Section(
  {
    as: Tag = "section",
    id,
    width = "default",
    spacing = "default",
    className = "",
    containerClassName = "",
    children,
  },
  ref,
) {
  return (
    <Tag
      id={id}
      ref={ref}
      className={`w-full px-5 sm:px-6 lg:px-8 ${spacings[spacing]} ${className}`}
    >
      <div className={`mx-auto w-full ${widths[width]} ${containerClassName}`}>
        {children}
      </div>
    </Tag>
  );
});

export default Section;
