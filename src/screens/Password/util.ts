export function isEightChars(text: string) {
  if (text.length === 0) {
    return false;
  }

  return text.length >= 8;
}

export function isUpperCase(text: string) {
  if (text.length === 0) {
    return false;
  }

  for (let c of text) {
    if (isUpperChar(c)) {
      return true;
    }
  }
  return false;
}

export function isCharSpecial(text: string) {
  if (text.length === 0) {
    return false;
  }

  const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  return regex.test(text);
}

function isUpperChar(str: string) {
  return str.length === 1 && str.match(/[A-Z]/);
}

export const validPassword = (password: string) =>
  isEightChars(password) && isUpperCase(password) && isCharSpecial(password);
