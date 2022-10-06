import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const ForecastSlider = ({ hours, isFahrenheit, localTime }) => {

    const dateHours = localTime.getHours()

    return (
        <>
        <h2 className="slider__title">Hourly Forecast</h2>
        <div className="slider__divider"></div>
        <div className="slider__wrapper">
            <ScrollContainer vertical={false} horizontal={true} className='forecast__slider'>
                {
                    hours.slice(dateHours, hours.length).map(item => (
                        <div className="forecast__slider--item">
                            <p className='forecast__slider--time'>{item.time.slice(item.time.length -5, item.time.length)}</p>
                            <img src={item.condition.icon} alt="" className="forecast__slider--icon" />
                            <h5 className="forecast__slider--temp">{isFahrenheit ? `${Math.round(item.temp_f)}°F` : `${Math.round(item.temp_c)}°C`}</h5>
                        </div>
                    ))
                }
            </ScrollContainer>
        </div>
        </>
    );
}

export default ForecastSlider;
