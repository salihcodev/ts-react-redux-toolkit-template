// utils:
import APIHandler from "../base";

// setup <user> network requests
// >>>> SIGNIN, manage existed user to login
export const login = (userData: object) =>
  APIHandler.post("/user/signin", userData);

// >>>> SIGNUP, create new user
export const signup = (userData: object) =>
  APIHandler.post("/user/signup", userData);
