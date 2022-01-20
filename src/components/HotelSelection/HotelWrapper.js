import { RoomMsg } from "./RoomMsg";
import RoomWrapper from "./RoomWrapper";

export default function HotelWrapper() {
  return (
    <>
      <RoomMsg>Ótima pedida! Agora escolha seu quarto:</RoomMsg>
      <RoomWrapper />
    </>
  );
}
