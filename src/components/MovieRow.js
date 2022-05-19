import React, { useState } from 'react';
import './MovieRow.css';


export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.lenght * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }    


    return (

        <div className='movieRow'>
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <a href="/">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon" 
            style={{fill: "white",width: 48,height: 48,}}><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                   
                </a>
            </div>    
                <div className="movieRow--right" onClick={handleRightArrow}>
                <a href="/">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon"
                style={{fill: "white",width: 48,height: 48,}}><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    
                </a>
            </div>
        
            <div className="movieRow--listarea">
                    <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>
                      {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                          <img src={`https:image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                

                    ))}
                </div>
            </div>
        </div>
    );
}
                
                
