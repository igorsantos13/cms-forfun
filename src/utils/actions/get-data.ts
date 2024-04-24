export async function getDataHome() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/662824c5110003f9e3bf568b?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
