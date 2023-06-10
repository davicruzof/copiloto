export function isEightChars(text: string) {
  return text.length >= 8;
}

export function isUpperCase(text: string) {
  for (let c of text) {
    if (isUpperChar(c)) {
      return true;
    }
  }
  return false;
}

export function isCharSpecial(text: string) {
  for (let c of text) {
    if (isUpperCase(c) || isLowerChar(c) || isDigit(c)) {
      return false;
    }
  }

  return true;
}

function isUpperChar(str: string) {
  return str.length === 1 && str.match(/[A-Z]/);
}

function isLowerChar(str: string) {
  return str.length === 1 && str.match(/[a-z]/);
}

function isDigit(str: string) {
  return str.length === 1 && str.match(/[0-9]/i);
}

export const validPassword = (password: string) =>
  isEightChars(password) && isCharSpecial(password) && isCharSpecial(password);
