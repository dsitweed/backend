export const HOSTNAME = process.env.HOSTNAME ?? "localhost";

export const BACKEND_PORT = Number.parseInt(process.env.BACKEND_PORT ?? "3000");

export const JWT_SECRET = process.env.JWT_SECRET ?? "abcadh82gcwe7fg2b32yd";

export const BCRYPT_SALT = Number.parseInt(process.env.BCRYPT_SALT ?? "10");
