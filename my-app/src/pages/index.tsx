import dynamic from "next/dynamic";
import React from "react";
import {useMapEvents, Marker, Popup, TileLayer, GeoJSON, FeatureGroup, useMapEvent,Tooltip} from "react-leaflet";

function MapPage() {
    const Map = React.useMemo(
        () =>
            dynamic(() => import("./component/Map"), {
                loading: () => <p>A map is loading</p>,
                ssr: false,
            }),
        []
    );

    return (
    <Map/>
    )
}

export default MapPage;
