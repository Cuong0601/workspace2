import React from "react";
import video1 from "../../video/LOL.webm";
import video2 from "../../video/filmLHT.mp4";
function Container(props) {
  return (
    <div>
      <div>
        <div className="relative">
          <video autoPlay muted loop className="w-full h-[600px] relative object-cover">
            <source src={video1} type="video/mp4" />
          </video>
          
          <img className="absolute top-[150px] right-0 left-0 w-[600px] h-[260px] text-center mx-auto"
          src="https://www.leagueoflegends.com/static/logo-vi-vn-317e4bb4521de5b27ff8392f38d3853a.png" alt="LOL" />
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="relative">
          <video autoPlay muted loop className="w-full h-[800px] relative object-cover">
            <source src={video2} type="video/mp4" />
          </video>
          <p className="absolute right-0 left-0 top-[40px] text-center text-[20px] text-white p-5px">LỜI HIỆU TRIỆU</p>
          </div>
        </div>   
    </div>
    
    
  );
}

export default Container;
<h1>Container Here</h1>;
