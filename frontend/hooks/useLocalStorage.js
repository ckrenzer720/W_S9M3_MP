import { useState } from "react";

export function useLocalStorage(key, value) {
  const [values, setValues] = useState(() => {
    const initial = localStorage.getItem(key)
    return initial ? JSON.parse(initial) : value
  });
  const setValueLS = value => {
    setValues(value)
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [values, setValueLS]
}
