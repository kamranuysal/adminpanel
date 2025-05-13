import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import useSettingsMenu from "./hooks/useSettingsMenu";

const SettingsMenu = (): React.ReactElement => {
  const { anchorEl, handleClick, handleClose } = useSettingsMenu();
  return (
    <>
      <IconButton size="large" onClick={handleClick} color="inherit">
        <Stack direction="row" spacing={2} alignItems="baseline">
          <Typography variant="body2" display="block" gutterBottom>
            Admin
          </Typography>
          <Avatar>K</Avatar>
        </Stack>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: -1,
              ml: -2,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default SettingsMenu;
