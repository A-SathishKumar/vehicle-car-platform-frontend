import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AccountActivationAPI } from "../apis";

const fireAlert = (text,icontext) => {
    Swal.fire({
        title: text,
        showConfirmButton: true,
        confirmButtonText: "OK",
        icon: icontext
    }
    )
}

const AccountActivation = ()=>{
    const [params] = useSearchParams();
    const [loading,setLoading] = useState(false);
    const verifyAccount = async ()=>{
        const response = await AccountActivationAPI(params.get("token"));
        fireAlert(response.msg,'success');
    };
    useEffect(()=>{
        setLoading(true);
        verifyAccount();
        setLoading(false);
    },[]);
    return(
        <>
            <Navbar/>
            {loading ? <h1>Loading</h1>:<h2>Your Account Activated Successfully!!!</h2>}
            <Footer/>
        </>
    )
}
export default AccountActivation;