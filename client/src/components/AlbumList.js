import React from 'react'
import { connect } from 'react-redux';


function AlbumList(props) {
    const album = props.albums
    return (
        Object.keys(album).map((key) => {
            return (
                <div className="albumInfo">
                    <div className="image-container">
                    
                        <img 
                            src={album[key].cover ? window.location.origin +`/assets/covers/${album[key].cover}` : window.location.origin + '/assets/images/undefined_album_cover.png'} 
                            alt=""
                            className="cover">
                        
                        </img>
                    
                        <div className="icon">

                            <img
                                src={album[key].source !== "LOCAL" ? window.location.origin +`/assets/images/qobuz.png` : null} 
                                alt=""
                                className="source">
                            </img>             

                        </div>

                    </div>
                    
                    <h1 className="artistInfo">{album[key].artist}</h1>
                    <h1 className="albumInfo">{album[key].album}</h1>
                </div>
            )
        })
    );
}

const mapStateToProps = (state) => {
    return {
        albums: state.list.data
    }
}
export default connect(mapStateToProps)(AlbumList)
