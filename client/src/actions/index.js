import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handelToken = (token) => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const submitSurvey = (values,history) => async dispatch => {
  console.log("values",values)
  const res = await axios.post("/api/surveys", values)
  console.log("res",res)
  dispatch({ type: FETCH_USER, payload: res.data })
    history.push("/surveys")

}