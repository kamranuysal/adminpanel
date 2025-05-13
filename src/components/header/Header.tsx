import { AppBar, ToolbarContainer } from "components/header/styles";
import { IHeader } from "./interfaces";
import IconButton from "components/buttons/IconButton";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import { MenuIcon } from "assets/icons";
import SettingsMenu from "./SettingsMenu";

const Header = ({ open, handleDrawerOpen }: IHeader): React.ReactElement => {
  return (
    <AppBar position="fixed" open={open}>
      <ToolbarContainer open={open}>
        <IconButton
          buttonType={buttonTypes.inherit}
          Icon={MenuIcon}
          edge="start"
          sx={{
            ...(open && { display: "none" }),
          }}
          onClick={handleDrawerOpen}
        />
        <SettingsMenu />
      </ToolbarContainer>
    </AppBar>
  );
};

export default Header;
