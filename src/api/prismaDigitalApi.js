import axios from "axios";

export const prismaDigitalApi = axios.create({
  baseURL: "https://prismatest.prismadigdev.repl.co",
});
