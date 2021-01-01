@-webkit-keyframes movimiento-diagonal {
   from {
      left: 0px;
   }
   
   to {
      left: 100px;
   }
}   

#anim {
   -webkit-animation-name: movimiento-diagonal;
   -webkit-animation-duration: 3s;
   -webkit-animation-iteration-count: infinite;
   -webkit-animation-direction: alternate;/*para que vuelva a su posicion inicial */
   width: 100px;
   background-color: Teal;
   color: #fff;
   position: relative; 
   padding: 2px;
}