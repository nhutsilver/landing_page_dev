import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`button ${disabled ? "disabled" : ""} ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
      <style jsx>{`
        .button {
          padding: 0.5rem 2rem;
          border-radius: 0.375rem;
          font-weight: bold;
          background: linear-gradient(to right, cyan, blue);
          color: white;
          transition: background-position 0.5s ease;
          background-size: 200%;
          background-position: left;
        }
        .button:hover:not(.disabled) {
          background-position: right;
        }
        .disabled {
          background: gray;
          cursor: not-allowed;
        }
        .sub-button {
          background: linear-gradient(to right, gray, black);
          color: white;
        }
        .sub-button:hover:not(.disabled) {
          background: black;
        }
      `}</style>
    </>
  );
};

export default Button;
