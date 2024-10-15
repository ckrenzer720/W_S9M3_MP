import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue = false) {
  const [dark, setDark] = useLocalStorage("darkmode", false);
  return [dark, setDark];
}
