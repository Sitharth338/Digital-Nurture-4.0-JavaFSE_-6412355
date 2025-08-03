function BookDetails() {
  const books = [
    {
      id: 1,
      bname: "Deep Dive into React",
      price: 670,
    },
    {
      id: 2,
      bname: "Mastering JavaScript",
      price: 800,
    },
    {
      id: 3,
      bname: "Understanding CSS",
      price: 450,
    },
  ];
  return (
    <div>
      <h1>Book Details</h1>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <br />${book.price}
          </div>
        ))}
      </ul>
    </div>
  );
}
export default BookDetails;
