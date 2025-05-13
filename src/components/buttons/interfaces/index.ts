import { ButtonProps, IconButtonProps } from "@mui/material";
import { buttonTypes } from "../constants/buttonTypes";

export interface IIconButton extends IconButtonProps {
  Icon: any;
  buttonType: buttonTypes;
  tooltipText?: string;
  active?: boolean;
  fontSize?: string;
  iconClassName?: any;
  tooltipClassName?: any;
  buttonClassName?: any;
}

export interface ButtonStyleProps {
  buttonType: buttonTypes;
  active?: boolean;
}

export interface IButton extends ButtonProps {
  Icon?: any;
  buttonType: buttonTypes;
  tooltipText?: string;
  active?: boolean;
}
