
export function style() {
  const leftMenuItems = document.getElementsByClassName("left-menu-items");
  const leftMenuItemLeft = document.getElementsByClassName("left-menu-item-left");
  const leftMenuParaagraph = document.getElementsByClassName("left-menu-paraagraph");
  

  Array.from(leftMenuItems).forEach((item,i) =>{item.addEventListener("mouseover", () =>{
    leftMenuItemLeft[i].style.background =`linear-gradient(153.48deg, #039DF3 16.64%, rgba(3, 157, 243, 0) 185.59%)`;
    leftMenuItemLeft[i].style.borderRadius = "0px 100px 100px 0px";
      leftMenuParaagraph[i].style.color = "#039DF3";
      
  })});
   Array.from(leftMenuItems).forEach((item,i) =>{item.addEventListener("mouseout", () =>{
    leftMenuItemLeft[i].style.background = "#F9F8FD";
    leftMenuItemLeft[i].style.borderRadius = "0px 100px 100px 0px";
       leftMenuParaagraph[i].style.color = "#716161";
      
   })});
  
  const upIcon = document.getElementsByClassName('up-icon')
   for (let i = 0; i < upIcon.length; i++){
     upIcon[i].addEventListener("click", function() {
       
            let special = document.getElementsByClassName("right-body-upper-container-body-cont-normal-bar-additional")[i];
           
            if(special.style.display === "none"){
              for(let x = 0; x < upIcon.length; x++){
                if(!(x===i)){
                  let opened = document.getElementsByClassName("right-body-upper-container-body-cont-normal-bar-additional")[x];
                  opened.style.display = "none";
                  upIcon[x].src="images/down-icon.png";
                  upIcon[x].style.transition ="2s";
  
                }
              }
              
              special.style.display = "unset";
              upIcon[i].src="images/up-icon.png";
              upIcon[i].style.transition ="2s";
              
            }   
            else{
              special.style.display = "none";
              upIcon[i].src="images/down-icon.png";
              upIcon[i].style.transition ="2s";
             
              
  
            }  
     })
   }
  
}

export function zoom (){
  const zoomIn = document.getElementById('zoom-in')
const zoomOut = document.getElementById('zoom-out')

zoomIn.addEventListener('click', () =>mapInfo.setZoom(mapInfo.getZoom() + 1));
zoomOut.addEventListener('click', () => mapInfo.setZoom(mapInfo.getZoom() - 1));
}
export function dynamic(){
  const droneID = document.getElementsByClassName("droneID")
const speed= document.getElementsByClassName("speeds")
const altitude= document.getElementsByClassName("altitudes")
const power=document.getElementsByClassName("powers")
const titleDrone=document.getElementsByClassName("right-upper-body-special-paragraph-4")
const drones=document.getElementsByClassName("numbers-of-drones")
const status = document.getElementsByClassName("change-color-span")
const x = fetch('./Data.json')
  .then(response => response.json())
  .then((data) => {

    for (let i = 0 ;i < droneID.length ; i++){
      if (data[i]['warning'] === "true"){
        status[i].innerHTML="NEED HELP"
        status[i].style.color="yellow"
     }
     else{
       status[i].innerHTML="In function"
       status[i].style.color="#1ECD25"
     }
      droneID[i].innerHTML = data[i]['id']
      speed[i].innerHTML = data[i]['speed'] + " m/s"
      altitude[i].innerHTML = data[i]['altitude'] +" m"
      power[i].innerHTML = data[i]['power'] + " %"
      titleDrone[i].innerHTML = "Drone " + [i+1]
      drones[i].innerHTML=droneID.length
      
    }

   })
  .catch(error => console.log(error));
}



export function menuButton(){
  const navbar = document.getElementById("left-menu-id")
  const menuBotton = document.getElementById("menu-button")
 menuBotton.addEventListener('click',()=>{
  if(navbar.style.display=="none"){
      navbar.style.display = "flex";
  } 
 else{
      navbar.style.display = "none";
 }
 })
}
