import React from 'react'
import { useNavigate } from "react-router";
import "./StartButton.css"

function StartButton() {

    const navigate = useNavigate();

    function handleClick() {
      navigate("/main");
    }
        return (
            <div className="startPage">
                <button className="getAlbum" type="button" onClick={handleClick}>GET ALBUM LIST</button>
            </div>
        )
    }

export default StartButton 