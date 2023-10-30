import { useState } from "react";
import mycontext from "./MyContext";

const Mystate = (props) => {
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch("http://localhost:8000/")
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item);
      })
  };

  return (
    <mycontext.Provider value={{ data,getdata,setData }}>
      {props.children}
    </mycontext.Provider>
  );
};

export default Mystate;
