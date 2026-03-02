import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import './index.css';
import  './css/photo.css';

export default function Photo() {
    const videoRef = useRef(null);
    const navigate = useNavigate()
    const [seconds, setSeconds] = useState(500);
    const { id } = useParams();
    const [frame, setFrame] = useState([null])
    
    useEffect(()=>{
        const getSelectedFrame = async ()=>{
            try {
            const response = await fetch('/dataFrames.json')
            const dataFrames = await response.json()
            console.log(dataFrames);

                const result = dataFrames.find((dataFrame) => String(dataFrame.id) === id);
            //   console.log(selectedFrame.id);

                if (result) {
        
                    
                        setFrame(result);
                } else {
                    console.error("Frame tidak ditemukan di database!");
                }
                
            } catch (error) {
            console.error(error); 
            }
            }
            getSelectedFrame()
            
        },[id]);
    

    useEffect(() => {
        // 2. Fungsi untuk menyalakan kamera
        const enableCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true
                });
                
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Gagal akses kamera: ", err);
            }
        };

        enableCamera();

    }, []);

 
    
    useEffect(()=> {
        if (seconds <=0){
        const timeoutId = setTimeout(() => {
            navigate("/"); 
        }, 2000); // Delay 3000ms (3 detik)
        return () => clearTimeout(timeoutId);
        } 
            
        const id = setInterval(() => {
            setSeconds((prev)=>prev-1)
        }, 1000);
        return () => clearInterval(id)
    },[seconds, navigate])

    return (
        <>
            <div className="photo_container">
                <div className="camera_handler">

                <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    id="photo"
                />
                </div>
                <div className="sidebar">
                    <div className="timer">{seconds === 0 ? "waktu habis" : seconds}</div>
                    <img src= {frame?.url} alt={frame?.name} className="frame" />
                </div>
            </div>
        </>
    );
}