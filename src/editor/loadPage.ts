export async function loadPage(postId: number) {
  const res = await fetch(`/wp-json/vb/v1/page/${postId}`);
  return res.json();
}
