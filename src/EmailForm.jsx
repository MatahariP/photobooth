// import { useState } from "react"
import {useForm} from 'react-hook-form'

export default function EmailForm() {
    const{register, 
        handleSubmit,
        formState:{errors}
    } = useForm();
    function onSubmit(data){
        alert("tes")
        if (data.email.length===0 || data.email == "" || !data.email) {
            const isConfirmed = window.confirm("Email kamu kosong, yakin mau lanjut tanpa email?");
        if (isConfirmed) {
            alert("Terima kasih");
        } else {
            console.log("User membatalkan submit.");
            return; 
        }
        }else{
            alert("Email berhasil tersubmit! Terima kasih!")
            console.log(data.email);
        }
    }
    return (
        <div>
        <h2>Enter your email</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>
                Email
            </label>
            <input
            type="email" 
            placeholder="you@gmail.com"
            {...register("email", 
                {
                required : false,
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{5,}\.[A-Z]{2,}$/i,
                message: "Format email tidak valid"
                }
            })}
            />
        </div>
        <button type="submit">Submit</button>
        {errors.email && <p style={{color: "crimson"}}>{errors.email.message}</p>}
        </form>
        </div>
    )
}