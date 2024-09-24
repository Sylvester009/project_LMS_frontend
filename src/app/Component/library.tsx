interface Book {
  title: string;
  author: string;
  image: string
}

const Library = ({ param }: { param: Book[] }) => {
  return (
    <div>
      <h1>Books List</h1>
      <div>
        {param.map((book, index) => (
          <div key={index}>
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author:</strong> {book.author}
            <br/>
            {book.image && <img src={book.image} alt='book cover' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
