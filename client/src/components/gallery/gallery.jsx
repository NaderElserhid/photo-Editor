import GalletyItem from "../galleryItem/galleryItem";
import "./gallery.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

TEMPORARY;
// const items = [
//   {
//     id: 1,
//     media: "/pins/pin1.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 2,
//     media: "/pins/pin2.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 3,
//     media: "/pins/pin3.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 4,
//     media: "/pins/pin4.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 5,
//     media: "/pins/pin5.jpeg",
//     width: 1260,
//     height: 1243,
//   },
//   {
//     id: 6,
//     media: "/pins/pin6.jpeg",
//     width: 1260,
//     height: 1568,
//   },
//   {
//     id: 7,
//     media: "/pins/pin7.jpeg",
//     width: 1260,
//     height: 1234,
//   },
//   {
//     id: 8,
//     media: "/pins/pin8.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 9,
//     media: "/pins/pin9.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 10,
//     media: "/pins/pin10.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 11,
//     media: "/pins/pin11.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 12,
//     media: "/pins/pin12.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 13,
//     media: "/pins/pin13.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 14,
//     media: "/pins/pin14.jpeg",
//     width: 1260,
//     height: 1600,
//   },
//   {
//     id: 15,
//     media: "/pins/pin15.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 16,
//     media: "/pins/pin16.jpeg",
//     width: 1260,
//     height: 1260,
//   },
//   {
//     id: 17,
//     media: "/pins/pin17.jpeg",
//     width: 1260,
//     height: 1000,
//   },
//   {
//     id: 18,
//     media: "/pins/pin18.jpeg",
//     width: 1260,
//     height: 1260,
//   },
//   {
//     id: 19,
//     media: "/pins/pin19.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 20,
//     media: "/pins/pin20.jpeg",
//     width: 1260,
//     height: 1260,
//   },
//   {
//     id: 21,
//     media: "/pins/pin21.jpeg",
//     width: 1260,
//     height: 1400,
//   },
//   {
//     id: 22,
//     media: "/pins/pin22.jpeg",
//     width: 1260,
//     height: 1890,
//   },
//   {
//     id: 23,
//     media: "/pins/pin23.jpeg",
//     width: 1260,
//     height: 1260,
//   },
//   {
//     id: 24,
//     media: "/pins/pin24.jpeg",
//     width: 1260,
//     height: 1260,
//   },


// ];

const fetchPins = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`);
  return response.data;
}

const Gallery = () => {

  const {isPending ,error, data} = useQuery ({queryKey: ["pins"],queryFn:fetchPins })


  if(error) return <div>Error: {error.message}</div>;
  if(isPending) return <div>Loading...</div>;
  if(!data) return <div>No data found</div>
  return (
    <div className="gallery">
      {data?.map((item) => (
        <GalletyItem key={item._id} item={item} />
      ))}
    </div>
  );
};
// this command for github
export default Gallery;
