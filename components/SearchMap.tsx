import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { SearchProps } from '../store';
import { getCenter } from 'geolib';

import 'mapbox-gl/dist/mapbox-gl.css';
import { resourceLimits } from 'worker_threads';

interface Coordinate {
    latitude: number, 
    longitude: number,
}

const SearchMap = ({searchResults}: SearchProps) => {

    const [selectedLocation, setSelectedLocation]: [any, any] = useState({});

    const coordinates = searchResults?.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center: any = getCenter(coordinates)


    const [viewState, setViewState] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });


    return (
        <Map
            onMove={evt => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/kingbunz/ckzbe8oe8001j14mg5a34kxjd"
            {...viewState}
        >

            {searchResults?.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offset={[-20, -10]}
                    >
                        <p
                            onClick={() => setSelectedLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'
                        >📌</p>
                    </Marker>

                    { /* Location Popup */}

                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            longitude={result.long}
                            latitude={result.lat}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}

                </div>

            ))}


        </Map>
    );
};

export default SearchMap;
