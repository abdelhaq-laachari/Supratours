import React, { useEffect } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const DatePickers= ({ setDate }) => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const date = value.$d;
  const newDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  }).format(date);

useEffect(() =>{
  setDate(newDate.replaceAll("/","-"))
},[newDate])


  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Select date start"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          minDate={new Date()}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePickers;
