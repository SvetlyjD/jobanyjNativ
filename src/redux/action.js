import { actionLinks } from "./actionTypes";

export function setLink(link) {
  return {
    type: actionLinks,
    payload: link,
  }
}