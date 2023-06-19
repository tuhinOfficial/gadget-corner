import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItems from "../MenuItems/MenuItems";

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <React.Fragment>
        <Button variant="outlined" onClick={openDrawer}><AiOutlineMenu size={20} color="white"></AiOutlineMenu></Button>
        <Drawer open={open} onClose={closeDrawer} className=" w-[258px]">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="ml-5">
              Gadget Corner
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>
          <MenuItems></MenuItems>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Menu;
