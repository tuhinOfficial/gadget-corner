import React from "react";
import logo from "../../assets/logo.png";
import { Badge, Button, Input } from "@material-tailwind/react";
import { BsCartCheck } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="bg-[#0E2954] py-5 px-5 flex justify-between items-center">
      <div>
        <img src={logo} className="w-48" alt="logo" />
      </div>
      <div>
        <Input size="md" label="Search Product" />
      </div>
      <div>
        <Badge content="5" color="blue">
          <span className="text-white">
            <BsCartCheck size={30}></BsCartCheck>
          </span>
        </Badge>
      </div>

      <div className="flex gap-x-5">
        <Button size="md" className="rounded-none">Login</Button>
        <Button size="md" variant="outlined" className="rounded-none">
        Get In Touch
      </Button>
      </div>
    </div>
  );
};

export default TopBar;
