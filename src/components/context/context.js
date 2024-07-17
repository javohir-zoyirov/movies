import { createContext } from "react";
export const ApiContext = createContext({
  setSearch:"",
  search:"",
  setDropdown:'',
  dropdown:'',
  moviesData:[]
}) ;
export default ApiContext;