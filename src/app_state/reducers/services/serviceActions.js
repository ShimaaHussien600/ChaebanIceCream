export const SET_DATE = "SET_DATE";
export const SET_MESSAGE = "SET_MESSAGE"

export const setDate = (date) => {
  console.log("jbjbjbjj",date)
  return{
  type: SET_DATE,
  payload: date
}}

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message
});