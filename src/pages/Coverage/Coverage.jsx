import React, { useRef } from "react";
import { Search } from "lucide-react";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";

export default function Coverage() {
  const mapRef = useRef(null)
  const data = useLoaderData()
  console.log(data);

  const position = [23.6850, 90.3563]
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = data.find(d => d.district.toLowerCase().includes(location.toLowerCase()))
    if (district) {
      const coord = [district.latitude, district.longitude];
      // go to the location
      mapRef.current.flyTo(coord ,14)
    }
  }
  return (
    <section className="bg-gray-50 container mx-auto py-12 px-4 rounded-2xl shadow-sm my-20">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          We are available in <span className="text-accent">64 districts</span>
        </h2>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-2 mb-8">

          <form onSubmit={handleSearch} className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="w-full pl-10 pr-24 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-base-200"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-secondary hover:bg-green-400 text-black px-5 py-1.5 rounded-full transition-all">
              Search
            </button>
          </form>

        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          We deliver almost all over <span className="font-semibold text-accent">Bangladesh</span>
        </p>

        {/* Map */}
        <div className="w-full h-[650px] overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <MapContainer
          ref={mapRef}
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-[650px]">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              data.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                <Popup>
                  <b className="font-bold">{center.district}</b> <br /> <b>Service Area</b> :{center.covered_area.join(' , ')}
                </Popup>
              </Marker>)
            }
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
