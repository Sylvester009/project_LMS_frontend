interface Book {
  title: string;
  author: string;
  publish_year: number | string;
  isbn: null | string;
}

const Library = ({ param }: { param: Book }) => {
  return (
    <div>
      <h1>Book Details</h1>
      <p>
        <strong>Title:</strong> {param.title}
      </p>
      <p>
        <strong>Author:</strong> {param.author}
      </p>
      <p>
        <strong>Publish Year:</strong> {param.publish_year}
      </p>
      <p>
        <strong>ISBN:</strong> {param.isbn}
      </p>
    </div>
  );
};

export default Library;
