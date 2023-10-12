type TLoginApi = {
  username: string;
  password: string;
};

type TLoginApiResponse = {
  token: string;
};

export function loginApi(data: TLoginApi): Promise<TLoginApiResponse> {
  return new Promise((resolve, reject) => {
    console.log("data", data);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data: TLoginApiResponse) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
