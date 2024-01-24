import { useMapEvent } from "react-leaflet";

function MapEvent() {
    const map = useMapEvent("click", (location) => {
        map.setView(location.latlng, map.getZoom(), {
            animate: true,
        });
        console.log(location)


        console.log(map.getCenter())

        console.log(map.getBounds())

        console.log(map.getSize())
    });

}

export default MapEvent;