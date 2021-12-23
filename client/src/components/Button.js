import React, {useState} from 'react'
import { connect } from 'react-redux';
import {filter, deleter} from '../features/listReducer'
import "./Button.css"

function Button(props) {

    const [click] = useState(false);

    return (
        <button
            id={props.id}
            className={click ? 'disable-button' : 'filter-button'}
            onClick={props.filterAlbums}
        >
            {props.children}
        </button>
    );


}

const mapStateToProps = (state) => {
    return {
        albums: state.data,
        filtering: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        deleteAlbums: () => {
            dispatch(deleter())
        },

        filterAlbums: () => {
            dispatch(filter(props.source))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)