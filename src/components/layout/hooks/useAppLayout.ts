import { useState } from "react";

const useAppLayout = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
  };
};

export default useAppLayout;
