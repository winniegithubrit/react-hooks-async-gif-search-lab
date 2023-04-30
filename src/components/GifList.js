import React from "react";
function GifList({gifs}){
  return(
    <div>
<ul className="gif-container">
  {gifs.map((gif)=>(
    <li className="gif-li" key={gif.url}>
       <img className='gif-img' src={gif.url} alt="gif" />
    </li>
  ))}
</ul>
    </div>
  )
}
export default GifList