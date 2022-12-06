const { DMY_HMS, DMY_HM, YMD, MDY, HMS, DMY } = require("./constant");

function dateToString(input, format) {
  if (!input) return "";

  const fullTime = new Date(input);
  const month = fullTime.getMonth() + 1;
  const date = fullTime.getDate();
  const year = fullTime.getFullYear();
  const hours = fullTime.getHours();
  const minutes = fullTime.getMinutes();
  const seconds = fullTime.getSeconds();

  const time = {
    year: year,
    date: date < 10 ? `0${date}` : date,
    month: month < 10 ? `0${month}` : month,
    hour: hours < 10 ? `0${hours}` : hours,
    minute: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };

  if (!format || format === DMY) return `${time.date}/${time.month}/${time.year}`;

  if (format === DMY_HMS)
    return `${time.date}/${time.month}/${time.year} ${time.hour}:${time.minute}:${time.seconds}`;
  if (format === DMY_HM)
    return `${time.date}/${time.month}/${time.year} ${time.hour}:${time.minute}`;
  if (format === YMD) return `${time.year}/${time.month}/${time.date}`;
  if (format === MDY) return `${time.month}/${time.date}/${time.year}`;
  if (format === HMS) return `${time.hour}/${time.minute}/${time.seconds}`;
}

module.exports = {
  dateToString,
};
