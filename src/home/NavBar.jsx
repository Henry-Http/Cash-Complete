import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const menuItems = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState("Home");

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white">
          MyApp
        </Typography>

        {/* Mobile Menu Button */}
        <IconButton onClick={toggleMobileMenu} className="text-white md:hidden">
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden"
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                className={`p-4 w-full text-center cursor-pointer ${
                  selected === item ? "bg-blue-100" : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  setSelected(item);
                  setMobileOpen(false);
                }}
              >
                {item}
              </Typography>
            ))}
          </motion.div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Typography
              key={item}
              className={`cursor-pointer text-white ${
                selected === item ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </Typography>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
