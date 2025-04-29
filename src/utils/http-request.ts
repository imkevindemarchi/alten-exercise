type TMethod = "GET";

export async function httpRequest(url: string, method: TMethod): Promise<any> {
  try {
    return await fetch(url, {
      mode: "cors",
      method: method,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    });
  } catch (error) {
    console.error("🚀 ~ error:", error);
  }
}
