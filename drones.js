import {style,dynamic,menuButton} from './style.js';


const button = document.getElementsByClassName("vetical-more")
const menuPopUp = document.getElementsByClassName("menu-pop-up")
function hover(){
 
    const rightBodyMaincontainerDivs = document.getElementsByClassName("right-body-main-container-divs")
    const plane = document.getElementsByClassName("right-body-main-container-divs-upper-left-icon-image")
    const leftbar = document.getElementsByClassName("right-body-main-container-divs-upper-left")
    const gps = document.getElementsByClassName("gps-image")
    const wifi = document.getElementsByClassName("wifi-image")
   

    Array.from(rightBodyMaincontainerDivs).forEach((item,i) =>{item.addEventListener("mouseover", () =>{
        
        rightBodyMaincontainerDivs[i].style.color="white";
        rightBodyMaincontainerDivs[i].style.background ="rgba(3, 157, 243, 1)";
        plane[i].src="images/whiteplane.svg";
        leftbar[i].style.borderLeft = "0.125rem solid #FFFFFF";
        wifi[i].src="images/whitewifi.svg";
        gps[i].src="images/whitegps.svg";
        button[i].style.backgroundImage="url('images/onhover-more-50.png')";
        menuPopUp[i].style.color="black";
          
      })});
       Array.from(rightBodyMaincontainerDivs).forEach((item,i) =>{item.addEventListener("mouseout", () =>{
        rightBodyMaincontainerDivs[i].style.color="unset";
        rightBodyMaincontainerDivs[i].style.background ="unset";
        plane[i].src="images/airplane.png";
        leftbar[i].style.borderLeft = "unset";
        wifi[i].src="images/wifi-svgrepo-com 1.svg";
        gps[i].src="images/Current-location.svg";
        button[i].style.backgroundImage="url('images/more-vertical.png')";

          
       })});
}

function menuPop(){
  Array.from(button).forEach((item,i) =>{item.addEventListener("click", () =>{
        
    if(menuPopUp[i].style.display === "none"){
      menuPopUp[i].style.display = "block";
  } 
  else{
      menuPopUp[i].style.display = "none";
  }
      
  })});


}

style();
dynamic();
menuPop();
menuButton();
hover();