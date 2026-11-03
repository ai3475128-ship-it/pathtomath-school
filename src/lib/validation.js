export function text(value, max = 500, min = 1) {
  if (typeof value !== "string") throw Error("Некорректное значение");
  const result = value.trim();
  if (result.length < min || result.length > max)
    throw Error("Некорректная длина значения");
  return result;
}
export function emailAddress(value) {
  const email = text(value, 254).toLowerCase();
  if (
    !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?\.[a-z]{2,}$/i.test(
      email,
    ) ||
    /[\r\n,;<>]/.test(email)
  )
    throw Error("Некорректный email");
  return email;
}
export function passwordValue(value) {
  if (
    typeof value !== "string" ||
    value.length < 8 ||
    Buffer.byteLength(value, "utf8") > 72
  )
    throw Error("Пароль: от 8 символов до 72 байт");
  return value;
}
export function calendarDate(value) {
  const date = text(value, 10);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    new Date(date + "T00:00:00Z").toISOString().slice(0, 10) !== date
  )
    throw Error("Некорректная дата");
  return date;
}
