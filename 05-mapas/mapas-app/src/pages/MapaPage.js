import React from 'react';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng: -122.4725,
    lat: 37.801,
    zoom: 13.5
}

export const MapaPage = () => {

    const { setRef, coords } = useMapbox(puntoInicial);

    return (
        <>

            <div className="info">
                Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>

            <div
                ref={ setRef }
                className="mapContainer"
            >

            </div>
        </>
    )
}
