export const convertToDateTime = (date: Date) => {
   const currentdate = new Date(date);
   const hour = (currentdate.getHours() < 10 ? `0${currentdate.getHours()}` : `${currentdate.getHours()}`)

   const minute = (currentdate.getMinutes() < 10 ? `0${currentdate.getMinutes()}` : `${currentdate.getMinutes()}`)

   const second = (currentdate.getSeconds() < 10 ? `0${currentdate.getSeconds()}` : `${currentdate.getSeconds()}`)

   return currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " - "
      + hour + ":"
      + minute + ":"
      + second;
}