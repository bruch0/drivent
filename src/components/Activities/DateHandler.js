import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const updateLocale = require("dayjs/plugin/updateLocale");

dayjs.extend(updateLocale);

dayjs.updateLocale("pt-br", {
  weekdays: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
});

export function filterByDay(date) {
  const hashTable = {};

  for (let i = 0; i < date.length; i += 1) {
    const d = date[i].time.slice(0, 10);

    if (!hashTable[d]) {
      hashTable[d] = 1;
      date.splice(i, 1);
    }
  }

  date.sort((a, b) => new Date(a.time) - new Date(b.time));
}

export function convertDateToEventFormat(date) {
  return dayjs(date).locale("pt-br").format("dddd, DD/MM");
}
