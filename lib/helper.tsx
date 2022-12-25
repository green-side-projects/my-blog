//endpoint: url:port:api/posts
//endpoint: http://localhost:3000/api/posts

const baseUrl = "http://localhost:3000/api/posts";
export default async function getPost(id) {
  const res = await fetch(`${baseUrl}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == Number(id));
  }
  return posts;
}
