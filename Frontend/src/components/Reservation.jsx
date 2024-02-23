import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();
  
  function validateData(){
    let err=false;
    
      if(firstName.length <3){
          toast.error("First Name Must Be  At Least 3 Characters Long!");
          err=true;
      } else if( firstName.length >25){
        toast.error("First Name  Can Not Contain More Than 25 Characters!");
        err=true;
      }
      if(lastName.length <3){
        toast.error("Last Name Must Be  At Least 3 Characters Long!");
        err=true;
      } else if( lastName.length >25){
      toast.error("Last Name  Can Not Contain More Than 25 Characters!");
      err=true;
    }
    if(phone.length!=10){
      toast.error("Phone Number Must Contains 10 Digits");
      err=true;
    }
    let emailexp=/^([a-z A-Z 0-9 \ . _]+)@([a-z A-Z 0-9]+)(\.[a-z A-Z]+)(\.[a-z A-Z]+)?$/;
    if(!(emailexp.test(email))){
      toast.error("Email is wrong");
      err=true;
    }

    let data=new Date();
    let date2= data.getYear()+1900;
    date2+="-"
    date2+=(data.getMonth()+1)<10?"0"+(data.getMonth()+1):data.getMonth()+1;
    date2+="-"
    date2+=data.getDate();
    
    if((date2>date)){
      toast.error("Select Future Dates Only");
      err=true;
    }else if(date2===date){
      let time2=(data.getHours())<10?"0"+(data.getHours()):(data.getHours());
      time2+="-";
      time2+=(data.getMinutes())<10?"0"+(data.getMinutes()):(data.getMinutes());
      
      if(time2>=time){
        toast.error("Please Select Time and Date For Future");
        err=true;
      }
      
    }

    return err;
}
  const handleReservation = async (e) => {
    e.preventDefault();

//VALIDATION
      if(!validateData()){
        try {
          const { data } = await axios.post(
            "http://localhost:4000/api/v1/reserve",
            { firstName, lastName, email, phone, date, time },
            {
              headers: {
                "Content-Type": "application/json",
              },
              
            }
          );
          toast.success(data.message);
          setFirstName("");
          setLastName("");
          setPhone(0);
          setEmail("");
          setTime("");
          setDate("");
          navigate("/success");
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }

    
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation} id="submitBtn">
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
