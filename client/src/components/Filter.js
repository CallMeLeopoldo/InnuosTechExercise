import React from 'react'
import Button from './Button'
import "./Filter.css"
import SearchButton from './SearchButton';

function Filter(){

    return (
        <div className="filter-container" id="filter-container">
            <div className="filter-wrapper" id="filter-wrapper">
                <SearchButton elem="filter-options"></SearchButton>
                <div className="wrapper">
                    <div id="filter-options" className="filter-options">
                        <Button id="all" other="qubBut" source="ALL">All</Button>
                        <Button id="locBut" other="qubBut" source="LOCAL">Local</Button>
                        <Button id="qubBut" other="locBut" source="QOBUZ">Qobuz</Button>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default Filter;

