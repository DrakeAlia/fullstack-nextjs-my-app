import bcrypt from "bcrypt";

export const hashPassword = (password) => bcrypt.hash(password, 10);

export const comparePasswords = (plainTextPassword, hashPassword) =>
  bcrypt.compare(plainTextPassword, hashPassword);
