import React,{useState} from "react";
function GifSearch({onSubmitQuery}){
  const[querySearch,setQuerySearch]=useState("")
  function handleSearchChange(event){
    setQuerySearch(event.target.value)
  }
    function handleQuerySearch(e) {
    e.preventDefault();
    onSubmitQuery(querySearch);
  }

  return(
    <div>
<form onSubmit={handleQuerySearch}>
        <div className="form-group">
          <label htmlFor="search">Search here please...:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={querySearch}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className="btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  )
}
export default GifSearch