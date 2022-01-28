import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function convertDateToEventFormat(date) {
  return dayjs(date).locale("pt-br").format("ddd, DD/MM");
}
