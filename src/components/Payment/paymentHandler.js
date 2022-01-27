export default function checkDateNHotel({ expiry, hotel, number, cvc }) {
  let hotelBoolean;
  let expiryBoolean;
  let cardNumberBoolean;
  let cvcBoolean;
  if (hotel === "Com Hotel") {
    hotelBoolean = true;
  } else {
    hotelBoolean = false;
  }

  const expiryArr = expiry.split("/");

  if (Number(expiryArr[0]) < 1 || Number(expiryArr[0]) > 12 || Number(expiryArr[1]) < 22) {
    expiryBoolean = false;
  } else {
    expiryBoolean = true;
  }

  const numberArr = number.split(" ");

  for (let i = 0; i < numberArr.length; i += 1) {
    if (Number.isNaN(Number(numberArr[i]))) {
      cardNumberBoolean = false;
    } else {
      cardNumberBoolean = true;
    }
  }

  if (Number.isNaN(Number(cvc))) {
    cvcBoolean = false;
  } else {
    cvcBoolean = true;
  }

  return {
    hotel: hotelBoolean,
    expiry: expiryBoolean,
    number: cardNumberBoolean,
    cvc: cvcBoolean,
  };
}
