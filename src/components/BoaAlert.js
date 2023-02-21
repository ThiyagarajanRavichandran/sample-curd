import React,{useEffect} from "react";
import Alert from "react-bootstrap/Alert";

const BoaAlert = ({ variant, message,hideAlert }) => {

useEffect(()=>{

    setTimeout(()=>{
        hideAlert();
    },3000)

},[])

  return (
    <>
      <Alert key={variant} variant={variant} style={{marginLeft:'1%',marginRight:'1%'}} >
        {message}
      </Alert>
    </>
  );

};

export default BoaAlert;
