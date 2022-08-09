
export function style() {
  const leftMenuItems = document.getElementsByClassName("left-menu-items");
  const leftMenuItemLeft = document.getElementsByClassName("left-menu-item-left");
  const leftMenuParaagraph = document.getElementsByClassName("left-menu-paraagraph");
  
  // for (let i = 0; i < leftMenuItems.length; i++) {
  //   leftMenuItems[i].addEventListener("mouseover", function() {
  //     leftMenuItemLeft[i].style.background = `linear-gradient(153.48deg, #039DF3 16.64%, rgba(3, 157, 243, 0) 185.59%)`;
  //     leftMenuItemLeft[i].style.borderRadius = "0px 100px 100px 0px";
  //     leftMenuParaagraph[i].style.color = "#039DF3"; 
  
  //   })
  //  }
  //  for (let i = 0; i < leftMenuItems.length; i++) {
  //   leftMenuItems[i].addEventListener("mouseout", function() {
  //     leftMenuItemLeft[i].style.background = "#E5E5E5";
  //     leftMenuItemLeft[i].style.borderRadius = "0px 100px 100px 0px";
  //     leftMenuParaagraph[i].style.color = "#716161";
  //   })
  // }
  
  Array.from(leftMenuItems).forEach((item,i) =>{item.addEventListener("mouseover", () =>{
    leftMenuItemLeft[i].style.background =`linear-gradient(153.48deg, #039DF3 16.64%, rgba(3, 157, 243, 0) 185.59%)`;
    leftMenuItemLeft[i].style.borderRadius = "0px 100px 100px 0px";
      leftMenuParaagraph[i].style.color = "#039DF3";
      
  })});
   Array.from(leftMenuItems).forEach((item,i) =>{item.addEventListener("mouseout", () =>{
    leftMenuItemLeft[i].style.background = "#E5E5E5";
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
  //  const tabs = [];
  //  for (let i = 0; i < upIcon.length; i++) {
  //    tabs.push(['special-cont' + (i + 1), 'btn-' + (i + 1), 0]);
  //        upIcon[i].addEventListener("click", function() {
  //          for (let j = 0; j < upIcon.length; j++) {
  //            specialContJ = document.getElementById(tabs[j][0]);
  //            btnJ = document.getElementById(tabs[j][1]);
  //            specialContJ.style.display = "none";
  //            btnJ.src = "images/down-icon.png"
  //            tabs[j][2] = 0;
  //          }      
  //            if (tabs[i][2] === 1) {
  //              specialCont = document.getElementById(tabs[i][0]);
  //              btn = document.getElementById(tabs[i][1]);
  //              specialCont.style.display = "none";
  //              btn.src = "images/down-icon.png"
  //              tabs[i][2] = 0;
  //            } else {
  //              specialCont = document.getElementById(tabs[i][0]);
  //              btn = document.getElementById(tabs[i][1]);
  //              specialCont.style.display = 'unset';
  //              btn.src = "images/up-icon.png"
  //              tabs[i][2] = 1
  //            }
  //        })
  //  }
  
  
}

export function zoom (){
  const zoomIn = document.getElementById('zoom-in')
const zoomOut = document.getElementById('zoom-out')

zoomIn.addEventListener('click', () =>mapInfo.setZoom(mapInfo.getZoom() + 1));
zoomOut.addEventListener('click', () => mapInfo.setZoom(mapInfo.getZoom() - 1));
}

