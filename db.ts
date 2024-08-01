export const pessoas = [
    {
      email: "Ted@gmail.com",
      password: "1",
      acesso: "ADMIN"
    },
    {
      email: "Tom@gmail.com",
      password: "12",
      acesso: "USER"
    },
    {
      email: "Frida@gmail.com",
      password: "123",
      acesso: "USER"
    },
    {
      email: "Pluto@gmail.com",
      password: "1234",
      acesso: "ADMIN"
    },
    {
      email: "Paco@gmail.com",
      password: "12345",
      acesso: "USER"
    },
  ]

  export  class AcessType {

    public static allAcess: "ADMIN" |"USER"| "null" | string = "null";

  }

  enum Types{
    "USER",
    "ADMIN",
    "null",
  }
