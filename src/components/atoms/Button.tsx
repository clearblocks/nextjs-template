import React from "react";

export interface ButtonProps {
  /**
   * Button label text
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  className: additionalClassName = "",
}) => {
  const baseStyles =
    "font-medium text-base text-white bg-blue-600 rounded-lg px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer hover:bg-blue-700";

  const className = `${baseStyles} ${disabledStyles} ${additionalClassName}`;

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
