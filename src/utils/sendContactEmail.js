const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function sendContactEmail({ name, email, message }) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const serverMessage = data?.message ?? data?.errors?.email ?? data?.errors?.message;
    throw new Error(serverMessage ?? "Failed to send message");
  }

  if (!data?.success) {
    throw new Error(data?.message ?? "Failed to send message");
  }
}
