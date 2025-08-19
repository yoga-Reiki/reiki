import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Location() {
    const [position, setPosition] = useState([20.5937, 78.9629]);

    const handleMapClick = (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
    };

    return (
        <section className="py-9 sm:py-14 md:py-16 px-4 xl:px-0">
            <MapContainer
                center={position}
                zoom={4}
                style={{ height: "600px", width: "100%" }}
                className="rounded-2xl"
                whenCreated={(map) => {
                    map.on("click", handleMapClick);
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Latitude: {position[0].toFixed(4)} <br />
                        Longitude: {position[1].toFixed(4)}
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    );
}

export default Location;
