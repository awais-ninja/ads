"use client";

import NextLink from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Link({
  href,
  children,
  className = "",
  showArrow = false,
  ...props
}) {
  const isExternal = href?.startsWith("http") || href?.startsWith("//");

  const baseClasses =
    "inline-flex items-center justify-center transition-colors duration-200";
  const finalClassName = `${baseClasses} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={finalClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        {showArrow && <FaArrowRight className="ml-2" />}
      </a>
    );
  }

  return (
    <NextLink href={href} className={finalClassName} {...props}>
      {children}
      {showArrow && <FaArrowRight className="ml-2" />}
    </NextLink>
  );
}
