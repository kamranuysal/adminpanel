import { styled } from "@mui/material";

export const ContentHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
