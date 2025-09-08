import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

type DynamicButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  backgroundColor?: any;
  disabled?: boolean;
  hoverColor?: any;
  textColor?: any;
  sx?: SxProps;
  variant?: "text" | "outlined" | "contained";
};

const DynamicButton: React.FC<DynamicButtonProps & { label?: any }> = ({
  label,
  children,
  onClick,
  size = "medium",
  backgroundColor = "#1f489f",
  hoverColor = "#18387f",
  textColor = "#fff",
  sx = {},
  disabled,
  variant = "contained",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        backgroundColor,
        color: textColor,
        "&:hover": {
          backgroundColor: hoverColor,
        },
        cursor: "pointer",
        ...sx,
      }}
    >
      {children ?? label}
    </Button>
  );
};

export default DynamicButton;
