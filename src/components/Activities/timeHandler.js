import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function convertTime(time){
  return dayjs(time).locale("pt-br").hour();
}