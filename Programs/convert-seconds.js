function convertSecs(secs) {
  const time = new Date(null);

  time.setSeconds(secs);

  const hour = time.getHours() - 1;
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}
