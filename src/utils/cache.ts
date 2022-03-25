export const SetLocalStorage = function (key: string, value: string): void {
  localStorage.setItem(key, value);
}

export const GetLocalStorage = function (key: string): (string | null) {
  return localStorage.getItem(key)
}