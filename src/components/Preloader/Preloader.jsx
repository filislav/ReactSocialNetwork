import React from 'react';

const Preloader = () =>{
    document.body.onload = function(){
        setTimeout(function(){
            let prel = document.getElementById("preloader");
            if(!prel.classList.contains('done')){
                    prel.classList.add('done');}
            },2000);
    }
    return(
    <div class="preloader" id="preloader">
      <div class="loader"></div>
    </div>
    )
}
export default Preloader;