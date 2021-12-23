import React, {useState} from 'react'

function SearchButton(props){

    const [click, setClick] = useState(false);
    
    const handleClick = () => {setClick(!click);}

    const changeOtherState = () => {

        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', afterLoaded);
        } else {
            afterLoaded();
        }
        
    }

    const afterLoaded = () => {

        handleClick();
        
        var element = document.getElementById(props.elem)
        var cont = document.getElementById("filter-wrapper")

        console.log("CURRENT STATE: ", element.className)
        if(element.className === "slide-right"){
            //document.getElementById(props.elem).style.display = "none";
            element.className = "slide-left";

            cont.className = "deactive-container"

        }
        else{
            //document.getElementById(props.elem).style.display = "block";
            element.className = "slide-right";

            cont.className = "active-container"
        }
        console.log("NEXT STATE: ", element.className)

    }

    return (
        <button onClick = {changeOtherState} id="search" className={click ? "fas fa-times fa-2x" : "fa fa-search fa-2x"} width="200%" height="100%" ></button>
    )
}

export default SearchButton
