
import './index.css'
// import { useState, useEffect } from "react";

export default function Payment() {
    return (
        <>
        {console.log("refresh")}
        <div>
            <button onClick={()=> window.location.reload()}>Refresh</button>
        </div>
        </>
    )
}

