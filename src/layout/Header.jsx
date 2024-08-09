import React from "react";
import logo from '../assets/images/logo.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Overview", "Courses", "Assignments", "Classmates", "Schedule", "Community"].map((item, index) => (
        <Typography
          as="li"
          variant="small"
          key={index}
          className="flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a
            href={`/${item.toLowerCase()}`}
            className={item=="Courses"?"relative flex items-center after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:w-full":"relative flex items-center after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"}
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="navbar_container">
        <Navbar className="navbar-color w-full border-none shadow-none mx-auto px-4 py-2 lg:px-4 lg:py-4">
          <div className="container shadow-none mx-auto flex items-center justify-between text-white-900">
            <Typography
              as="a"
              href="/overview"
              className="mr-4 cursor-pointer py-1.5 font-medium flex"
            >
            <img 
                src={logo} 
                alt="logo" 
                className="w-9 h-8 mb-1 mr-2 "
            />
              Skillsphere
            </Typography>
            <div className="hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-4">
              <CiCircleMore className="text-[20px]" />
              <IoMdHeartEmpty className="text-[20px]" />
              <IoIosNotificationsOutline className="text-[20px]" />
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src="https://media.istockphoto.com/id/1181175630/photo/close-up-photo-of-charming-guy-entrepreneur-feel-content-look-listen-have-fun-with-his-family.jpg?s=2048x2048&w=is&k=20&c=c014KxYwQwxwhDfv09W8OFYr-fzU8uy3UyMSczXs0f8="
              />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <MobileNav open={openNav}>
            <div className="container mx-auto">
              {navList}
              <div className="flex items-center gap-x-1">
                <Button fullWidth variant="text" size="sm" className="">
                  <span>Log In</span>
                </Button>
                <Button fullWidth variant="gradient" size="sm" className="">
                  <span>Sign in</span>
                </Button>
              </div>
            </div>  
          </MobileNav>
          <div className='navbar_container ml-[-100px] mr-[-100px]'></div>
        </Navbar>
      </div>  
      
  );
}

export default Header;