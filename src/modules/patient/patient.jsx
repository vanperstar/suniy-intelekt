import { FormControl, Button } from "@mui/material";
import { useRef } from "react";

export default function PatientFunc() {
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const fullNameRef = useRef();
  
  const patentAdd = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("last_name", lastNameRef.current.value);
      localStorage.setItem("first_name", firstNameRef.current.value);
      localStorage.setItem("full_name", fullNameRef.current.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl
      sx={{
        width: '100%    ',
        display: "flex",
        flexDirection: "revert-layer",
        gap: "20px",
        textAlign: "center",
        margin: "auto",
        flexWrap: 'wrap'
      }}
    >
      <label className="patinet_label">
        Имя пациента
        <br />
        <input className="patinet_info" ref={lastNameRef} />
      </label>
      <label className="patinet_label">
        Фамилия пациента
        <br />
        <input className="patinet_info" ref={firstNameRef} />
      </label>
      <label className="patinet_label">
        Фамилия пациента
        <br />
        <input className="patinet_info" ref={fullNameRef} />
      </label>
      <Button onClick={patentAdd}>Ждать</Button>
    </FormControl>
  );
}
