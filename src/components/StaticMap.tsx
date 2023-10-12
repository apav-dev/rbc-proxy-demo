export interface StaticMapProps {
  lat: number;
  lng: number;
}

export const initialProps: StaticMapProps = {
  lat: 40.7128,
  lng: 74.006,
};

const StaticMap = ({ lat, lng }: StaticMapProps) => {
  return (
    <img
      // src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${lng},${lat},10,0/300x200?access_token=pk.eyJ1IjoiYXBhdmxpY2siLCJhIjoiY2t5NHJiYXB1MGEzaTJ2b2FwajdmZDYwbiJ9.0KfKPwlk8hhgQymUjUBfdA`}
      src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/-122.4447,37.823,9,0/500x300?access_token=pk.eyJ1IjoiYXBhdmxpY2siLCJhIjoiY2t5NHJiYXB1MGEzaTJ2b2FwajdmZDYwbiJ9.0KfKPwlk8hhgQymUjUBfdA"
    />
  );
};

export default StaticMap;
