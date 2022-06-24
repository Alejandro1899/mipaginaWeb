
  AOS.init();

/*-----------------------------------------*/  
  let ubicaionPrincipal = window.pageYOffset;

   window.addEventListener("scroll", function () {

      console.log(window.pageYOffset);

      let desplazamientoActual = window.pageYOffset;
      if (ubicaionPrincipal >= desplazamientoActual) {

         document.getElementsByTagName("nav")[0].style.top = "0px";
      } else {
         document.getElementsByTagName("nav")[0].style.top = "-100px";
      }
      ubicaionPrincipal = desplazamientoActual;
   });

   //  M E N U

   let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
   let semaforo = true;
   document.querySelectorAll(".hamburger")[0].addEventListener("click", function () {
      if (semaforo) {
         document.querySelectorAll(".hamburger")[0].style.color ="#ffff";
         semaforo=false;
            }else{
               document.querySelectorAll(".hamburger")[0].style.color="#000";
            semaforo=true;
            }

      enlacesheader.classList.toggle("menudos");
   })


   //   E F E C T O   D E   S C R O L L
