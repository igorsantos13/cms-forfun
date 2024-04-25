export async function getDataHome() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/662824c5110003f9e3bf568b?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return response.json();
  } catch (err) {
    throw new Error("Failed to fetch menu data");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });

    if (!response.ok) {
      throw new Error("Failed get item by slug");
    }

    return response.json();
  } catch (err) {
    throw new Error("Failed get item by slug");
  }
}
