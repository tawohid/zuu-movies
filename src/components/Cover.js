import React from 'react';
import Header from './Header'

const Cover = () => {
    return (
        <div className="cover">
            <Header/>
            <h1>Watch Anything, Anywhere</h1>
            <span dangerouslySetInnerHTML={{__html: '<svg class="arrow bounce" width="65px" height="44px" viewBox="688 605 65 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc><defs><polygon id="path-1" points="745.084 614.24 740.842 610 720.042 630.764 699.242 610 695 614.24 720.01 639.205 720.042 639.174 720.074 639.205"></polygon><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="Shape" stroke="none" fill="none"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#26D2CC" fill-rule="evenodd" xlink:href="#path-1"></use></g></svg>'}} />
        </div>
    )
}

export default Cover;