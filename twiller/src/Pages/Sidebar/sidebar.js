import React, { useState } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Sidebar.css";
import Customlink from "./Customlink";
import SidebarOption from "./Sidebaroption";
import { useNavigate } from "react-router-dom";
import useLoggedinuser from "../../hooks/useLoggedinuser";

const Sidebar = ({handlelogout, user}) => {
  const [anchorE1, setancharE1] = useState(null);
  const openmenu = Boolean(anchorE1);
  const [loggedinuser] = useLoggedinuser();
  const navigate = useNavigate();
  const handleclick = (e) => {
    setancharE1(e.currentTarget);
  };
   const handleClose = () => {
    setancharE1(null);
  };
  const result = user?.email?.split("@")[0];

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twiterIcon" />
      <Customlink to="/home/feed">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Customlink>
      <Customlink to='/home/explore'>
        <SidebarOption Icon={SearchIcon} text="Explore" />
      </Customlink>
      <Customlink to='/home/notification'>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      </Customlink>
      <Customlink to="/home/messages">
        <SidebarOption active Icon={MailOutlineIcon} text="Messages" />
      </Customlink>
      <Customlink to='/home/bookmarks'>
        <SidebarOption active Icon={BookmarkBorderIcon} text="Bookmarks" />
      </Customlink>
      <Customlink to='/home/lists'>
        <SidebarOption active Icon={ListAltIcon} text="Lists" />
      </Customlink>
      <Customlink to='/home/profile'>
        <SidebarOption active Icon={PermIdentityIcon} text="Profile" />
      </Customlink>
      <Customlink to='/home/more'>
        <SidebarOption active Icon={MoreIcon} text="More" />
      </Customlink>

      <Button
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
      >
        Tweet
      </Button>
      <div className="Profile__info">
        <Avatar
          src={
            loggedinuser[0]?.profileImage
              ? loggedinuser[0].profileImage
              : user && user.photoURL
            // : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
        />
        <div className="user__info">
          <h4>
            {loggedinuser[0]?.name
              ? loggedinuser[0].name
              : user && user.displayname}
          </h4>
          <h5>@{result}</h5>
        </div>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openmenu ? "basic-menu" : undefined}
          aria-haspopup="true "
          aria-valuetext={openmenu ? "true" : undefined}
          onClick={handleclick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorE1}
          open={openmenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem
            className="Profile__info1"
            onClick={() => navigate("/home/profile")}
          >
            <Avatar
              src={
                loggedinuser[0]?.profileImage
                  ? loggedinuser[0].profileImage
                  : user && user.photoURL
                //:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
            />
            <div className="user__info subUser__info">
              <div>
                <h4>
                  {" "}
                  {loggedinuser[0]?.name
                    ? loggedinuser[0].name
                    : user && user.displayname}
                </h4>
                <h5>@{result}</h5>
              </div>
              <ListItemIcon className="done__icon">
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}> Add an esisting account</MenuItem>
          <MenuItem onClick={handlelogout}> Log out @ {result}</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default Sidebar;
