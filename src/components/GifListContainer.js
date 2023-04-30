import React,{useState,useEffect} from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"
function GifListContainer(){
  const [gif,setGif]=useState([])
  const[search,setSearch]=useState("dolphins")
  //const apiKey='dc6zaTOxFJmzC'
  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search === ""? "dolphin":search}&api_key=saanLrcouTbMFfTg26rXD2MrLPGObE7A&rating=g }`)
    .then((response)=>response.json())
    .then(({data})=>{
      const gifs=data.slice(0,3).map((gif)=>({url:gif.images.original.url}))
      setGif(gifs)
    })
  },[search])
  return(
    <div>
<GifList gifs={gif}/>
<GifSearch onSubmitQuery={setSearch}/>
    </div>
  )
}
export default GifListContainer