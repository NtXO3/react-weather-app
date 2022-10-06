import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

const TopBar = ({ isFahrenheit, setIsFahrenheit, fetchData, search, setSearch}) => {

    const handleSearch = (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        fetchData()
    }
    return (
        <div className="app__top--bar">
          <div className="weather__search--wrapper">
            <button className="weather__search--btn" onClick={fetchData}><AiOutlineSearch/></button>
            <input type="text" className="weather__search--input" placeholder="Enter a location...." value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => handleSearch(e)}/>
          </div>
          <div className="degree__toggle--bar" onClick={() => setIsFahrenheit(prev => !prev)}>
            <div className="degree__toggle--icon" id={isFahrenheit && 'fahrenheit-toggle'}></div>
            <p className="degree__toggle--title">C°</p>
            <p className="degree__toggle--title" id="fahrenheit__toggle--title">F°</p>
          </div>
        </div>
    );
}

export default TopBar;
