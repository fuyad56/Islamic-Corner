import React from "react";
import books from "../../Data/BookData";

const Books = () => {
  const handleBook = (id) => {
    console.log(id);
  };

  return (
    <div className="mx-[200px] mt-10">
      <div className="grid grid-cols-5">
        {books.map((book, index) => {
          return (
            <div
              key={index}
              className="border w-[250px] my-4 rounded-xl shadow-xl hover:scale-[1.02] duration-500"
              onClick={() => handleBook(book.id)}
            >
              <img src={book.image} alt={index} className="rounded-t-xl" />
              <ul className="py-4 px-4 rounded-b-xl bg-[#183D3D] text-slate-300">
                <li>
                  <h3>{book.name}</h3>
                </li>
                <li>
                  <h3>{book.author}</h3>
                </li>
                <li>
                  <h3>{book.price}</h3>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
