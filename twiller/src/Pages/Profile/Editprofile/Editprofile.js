import React, { useState } from "react";
import { Button, Box, Modal } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sidebar from "../../Sidebar/sidebar";
import "./Editprofile.css";
import { Height } from "@mui/icons-material";
import Mainprofile from "../Mainprofile/Mainprofile"; 
import useLoggedinuser from "../../../hooks/useLoggedinuser";
import { useUserAuth } from "../../../context/UserAuthContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 600,
  height: 600,
  bgcolor: "red",
  boxShadow: 24,
  borderRadius: 8,
};


function Editchild({ dob, setdob }) {
  const [open, setopen] = useState(false);
  const handleopen = () => {
    setopen(true);

  };
  const handleClose=()=>{
    setopen(false)
  }


  return (
    <React.Fragment>
      <div className="birthdate-section" onClick={handleopen}>
        <text>Edit</text>
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={Sidebar.handleClose}
        aria-labelledby=" child-modal-title"
        aria-describedby="  child-modal-description"
      >
        <Box sx={{ ...style, width: 300, height: 300 }}>
          <div className="text text-blue-400">
            <h2>Edit date if birth</h2>
            <p>
              This can only be changed a few times
              <br />
              Make sure you can enter the age of the <br /> person using the
              account.{""}
            </p>
            <input type="date" onChange={(e) => setdob(e.target.value)} />
            <button
              className="e-button"
              onClick={() => {
                setopen(false);
              }}
            >
              {" "}
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const Editprofile = ({user,loggedinuser} ) => {
 //const [loggedinuser, setLoggedinuser] = useLoggedinuser();
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");
  const [location, setlocation] = useState("");
  const [website, setwebsite] = useState(" ");
  const [open, setopen] = useState(false);
  const [dob, setdob] = useState("");
  const handlesave = () => {
    const editinfo = {
      name,
      bio,
      location,
      website,
      dob,
    };
    
      fetch(`http://localhost:5000/userupdate/${user?.email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body:JSON.stringify(editinfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("done", data);
        });
    

  };
  return (
    <div className="right">
      <button
        onClick={() => {
          setopen(true);
        }}
        className="Edit-profile-btn" >
        Edit
        profile
      </button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby=" modal-modal-description"
      >
        <Box fontStyle={style} className="modal">
          <div className="header">
            <IconButton onClick={() => setopen(false)}>
              <CloseIcon />
            </IconButton>
            <h2 className="header-title">Edit Profile</h2>
            <button className="save-btn" onClick={handlesave}>Save</button>
          </div> <TextField
              className="text-field"
              fullWidth
              label="Name"
              id="fullWidth"
              variant="filled"
              onChange={(e) => setname(e.target.value)}
              defaultValue={loggedinuser[0]?.name ? loggedinuser[0].name : ""}
            />

          <form className="fill-content">
            <TextField
              className="text-field"
              fullWidth
              label="Bio"
              id="fullWidth"
              variant="filled"
              onChange={(e) => setbio(e.target.value)}
              defaultValue={loggedinuser[0]?.bio ? loggedinuser[0].bio : ""}
            />
            <TextField
              className="text-field"
              fullWidth
              label="Location"
              id="fullWidth"
              variant="filled"
              onChange={(e) => setlocation(e.target.value)}
              defaultValue={
                loggedinuser[0]?.location ? loggedinuser[0].location : ""
              }
            />

            <TextField
              className="text-field"
              fullWidth
              label="Website"
              id="fullWidth"
              variant="filled"
              onChange={(e) => setwebsite(e.target.value)}
              defaultValue={loggedinuser[0]?.website ? loggedinuser[0].website : ""}
            />
          
          
          
          </form>
          <div className="birthdate-section">
            <p>Birth Date</p>
            <p>.</p>
            <Editchild dob={dob} setdob={setdob} />
            </div>

            <div className="last-section">
            {loggedinuser[0]?.dob ? (
              <h2>{loggedinuser[0]?.dob}</h2>
            ) : (
              <h2>{dob ? dob : "Add your date of birth"}</h2>
            )}
            <div className="last-btn">
              <h2>Switch to Professional</h2>
              <ChevronRightIcon />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Editprofile;
