import { useNavigate } from "react-router-dom";
import './index.css'
import './css/template.css'
import { useState, useEffect } from "react";
// import frames from "../public/frames"


export default function Template() {
    // nanti ganti array jadi list jpg yg diambil dari server
    // const templates = ["1.jpg", "2.jpg", "3.jpg", ]
    const [selectedFrame, setSelectedFrame] = useState(null);
    const navigate = useNavigate()
    const [frames, setFrames] = useState([])

    useEffect(()=>{
        const fetchFrame = async () => {
            try {
                const response = await fetch('/dataFrames.json')
                const dataFrames = await response.json()
                setFrames(dataFrames)
            } catch (error) {
                console.log(`json tidak dapat diambil : \n ${error}`);
                
            }
        }
        fetchFrame()
    },[]);
    
    const validateData = (id)=>{
        id = selectedFrame
        navigate(`/photo/${id}`)
    }

    useEffect(() => {
        if (frames && frames.length > 0) {
            console.log("--- Testing Frames Data ---");
            frames.forEach((frame, index) => {
                console.log(`Frame ke-${index}: ${frame.name} tersedia di ${frame.url}`);
            });
        }
    }, [frames]); // Dependency array: jalankan setiap kali 'frames' berubah
        console.log("tes");

    
    
    return (
        <>
        <h1>Pilih Template</h1>
        <div className="frame_container">
        {frames.map((frame) => (
                <div key={frame.id} className={`frame_wrapper ${selectedFrame === frame.id ? "active" : ""}`} onClick={() => setSelectedFrame(frame.id)}>
                    <img src={frame.url} alt={frame.name} className="frame" />
                    {/* <p>{frame.name}</p> */}
                </div>
            ))}
        </div>
        <button type="button"  onClick={validateData}>Next</button>
        </>
    )
}

