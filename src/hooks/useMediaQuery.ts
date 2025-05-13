import MuiUseMediaQuery from "@mui/material/useMediaQuery";
import { IUseMediaQuery } from "./interface";
import { Theme } from "@mui/material";

const useMediaQuery = (): IUseMediaQuery => {
  const isSm = MuiUseMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return { isSm };
};

export default useMediaQuery;
