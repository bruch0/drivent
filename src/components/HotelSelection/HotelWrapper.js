import RoomDetails from "./RoomDetails";
import { RoomMsg } from "./RoomMsg";

export default function HotelWrapper() {
  return (
    <>
      <RoomMsg>Ótima pedida! Agora escolha seu quarto:</RoomMsg>
      <RoomDetails />
    </>
  );
}
