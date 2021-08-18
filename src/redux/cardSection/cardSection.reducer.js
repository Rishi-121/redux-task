import { lt, ld, rt, rd, rst } from "./cardSection.types";

const initialCardState = {
  leftTopTech: "Left Top",
  leftDownTech: "Left Down",
  rightTopTech: "Right Top",
  rightDownTech: "Right Down",
};

export const cardReducer = (state = initialCardState, action) => {
  const data = action.payload;

  let value;

  switch (action.type) {
    case lt:
      value = {
        ...state,
        leftTopTech: data,
      };

      localStorage.setItem("data", JSON.stringify(value));

      return value;
    case ld:
      value = {
        ...state,
        leftTopTech: data,
        leftDownTech: data,
      };

      localStorage.setItem("data", JSON.stringify(value));

      return value;
    case rt:
      value = {
        ...state,
        leftTopTech: data,
        leftDownTech: data,
        rightTopTech: data,
      };

      localStorage.setItem("data", JSON.stringify(value));

      return value;
    case rd:
      value = {
        ...state,
        leftTopTech: data,
        leftDownTech: data,
        rightTopTech: data,
        rightDownTech: data,
      };

      localStorage.setItem("data", JSON.stringify(value));

      return value;
    case rst:
      value = {
        leftTopTech: "Left Top",
        leftDownTech: "Left Down",
        rightTopTech: "Right Top",
        rightDownTech: "Right Down",
      };

      localStorage.setItem("data", JSON.stringify(value));

      return value;
    default:
      const localStorageData = localStorage.getItem("data");

      if (localStorageData) {
        return JSON.parse(localStorageData);
      }

      return state;
  }
};
