const blog = [
  {
    id: 1,
    title: "React Learning",
    author: "John Doe",
    content: "Welcome to learning React!",
  },
  {
    id: 2,
    title: 'Installation Guide',
    author: 'Jane Smith',
    content: 'You can install React from npm'
  },
];
function BlogDetails() {
  return (
    <div>
      <h1>Blog Details</h1>
      <ul>
        {blog.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>By: {post.author}</p>
                <p>{post.content}</p>
            </div>
        ))}
      </ul>
    </div>
  );
}
export default BlogDetails;
