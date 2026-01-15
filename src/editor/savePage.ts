export async function savePage(postId: number, schema: any) {
  await fetch(`/wp-json/vb/v1/page/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-WP-Nonce": (window as any).wpApiSettings?.nonce
    },
    body: JSON.stringify(schema)
  });
}
