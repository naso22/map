import {useMapEvents,MapContainer, Marker, Popup, TileLayer, GeoJSON, FeatureGroup, Tooltip} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {useState, useEffect} from "react";
import axios from "axios";
import MapEvent from "@/pages/component/mapEvent/mapEvent";

const Map = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const shizuoka = await axios.get("./N03-23_13_230101.geojson");
        console.log(shizuoka.data)
        setData(shizuoka.data);
    };

    // function MyComponent() {
    //     const map = useMapEvents({
    //         click: () => {
    //             map.locate()
    //         },
    //         locationfound: (location) => {
    //             console.log('location found:', location)
    //         },
    //     })
    //     return null
    // }

    return (
        <>
            <MapContainer
                center={[35.686067, 139.760296]}
                zoom={13}
                scrollWheelZoom={true}
                style={{height: "100vh", width: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data &&
                    <GeoJSON data={data}></ GeoJSON>
                }
                <MapEvent />
                {/*<MyComponent />*/}
            </MapContainer>
        </>
    );

};

export default Map;