import React from "react";
import Input from "../../../Atoms/Input";
import Label from "../../../Atoms/Label";

import { useState, useEffect } from "react";
import axios from "axios";

import { StyledForm, StyledButton } from "./Form.style";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { StyledForm } from "./Form.style";

const Form = React.forwardRef((props, ref) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");

  let selectedTime = false;

  let selectedDateWithTime = selectedDate + "";

  const name = React.createRef();
  const email = React.createRef();
  const button = React.createRef();

  function addAppointment() {
    const nameValue = name.current.children[2].value;
    const emailValue = email.current.children[2].value;

    if (nameValue && emailValue && selectedDate && selectedTime) {
      setMessage("");
      try {
        axios.post("http://localhost:5000/users", {
          name: nameValue,
          email: emailValue,
          date: selectedDateWithTime,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setMessage("All fields must be filled");
    }
  }

  function handleTimeChange(e) {
    selectedTime = true;
    selectedDateWithTime =
      selectedDate.toString().substring(4, 15) + ` ${e.currentTarget.value}`;
  }

  function handleChange() {
    if (email.current.children[3].innerText) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div>
      <StyledForm>
        <div ref={name}>
          <Label id="name" name="Name:"></Label>
          <br />
          <Input id="name" type="name"></Input>
        </div>
        <div ref={email}>
          <Label id="email" name="Email:"></Label>
          <br />
          <Input id="email" type="email"></Input>
        </div>
        <div>
          <Label id="date" name="Date:"></Label>
          <DatePicker
            selected={selectedDate}
            onChange={async (date) => {
              setSelectedDate(date);
              const user = await axios.get("http://localhost:5000/users");
              console.log(user.date);
            }}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0}
          ></DatePicker>
        </div>
        <div>
          <Label htmlFor="time">Language</Label>
          <select name="languages" id="time" onChange={handleTimeChange}>
            <option value="-">Select time</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
          </select>
        </div>

        <p>{message && message}</p>

        <StyledButton
          ref={button}
          onClick={() => {
            addAppointment();
          }}
        >
          Make appointment
        </StyledButton>
      </StyledForm>
    </div>
  );
});

export default Form;
