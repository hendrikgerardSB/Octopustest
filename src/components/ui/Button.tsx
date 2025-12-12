import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-7 py-3.5
    text-[0.95rem] font-medium
    rounded
    cursor-pointer
    transition-all duration-300
  `;

  const variants = {
    primary: `
      bg-[#1F1F1F] text-[#F5F2EE]
      hover:bg-[#2d2d2d] hover:translate-x-[3px]
      border-none
    `,
    secondary: `
      bg-transparent text-[#0D5C63]
      border border-[#0D5C63]
      hover:bg-[#0D5C63] hover:text-[#F5F2EE]
    `,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {children}
    </button>
  );
}
