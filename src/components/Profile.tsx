import { Avatar, TextField, MenuItem } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import dayjs from "dayjs";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { forwardRef, ReactElement, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {};

const Profile = (props: Props) => {
  const birth = new Date(2002, 4, 4);
  const bornOn = dayjs(birth);
  const gender = ["Male", "Female"];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <Avatar sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }}>
          N
        </Avatar>
      </div>
      <div className="grid grid-cols-2 px-36 mt-8">
        <div className="p-3 font-bold">Name</div>
        <div className="">
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            defaultValue={"Aung Thiha Tun"}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 px-36 mt-5">
        <div className="p-3 font-bold">Gender</div>
        <div>
          <TextField
            id="outlined-select-gender"
            select
            label="Select"
            defaultValue="Male"
            helperText="Please Select Your Gender"
            style={{
              width: "100%",
            }}
          >
            {gender.map((gen) => (
              <MenuItem key={gen} value={gen}>
                {gen}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="grid grid-cols-2 px-36 mt-5">
        <div className="p-3 font-bold">Birth</div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={bornOn}
              renderInput={(params) => <TextField {...params} />}
              onChange={() => {}}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="grid grid-cols-2 px-36 mt-5">
        <div className="p-3 font-bold">Contact Number</div>
        <div>
          <TextField
            id="outlined-number"
            label="Phone No."
            type="number"
            defaultValue={959958222263}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Please Input Your Contact Number"
            style={{
              width: "100%",
            }}
          >
            {gender.map((gen) => (
              <MenuItem key={gen} value={gen}>
                {gen}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="grid grid-cols-2 px-36 mt-5">
        <div className="p-3 font-bold">Detail</div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Summary About You"
            multiline
            rows={4}
            defaultValue="..."
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="px-36">
        <button
          className="p-2 rounded-md bg-green-400 shadow-md shadow-green-300
          text-white"
          onClick={handleClickOpen}
        >
          Edit Profile
        </button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Confirmation for Edit"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Do You Want To <b>Replace</b> Your Profile With exisiting profile
              information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Save Changes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
