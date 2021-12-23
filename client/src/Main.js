import React from "react"
import "./App.css" // Added some styling
import Filter from './components/Filter';
import AlbumList from './components/AlbumList';

function Main() {

    return (
      <>
        <Filter></Filter>
        <div className="global-container">
          <div className="container">
            <AlbumList></AlbumList>
          </div>
        </div>



      </>
    )
}
export default Main;