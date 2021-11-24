import "./Pagination.css";
import React from "react";

export function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number, id) => (
            <button key={id} onClick={() => paginate(number)} className="paginate">
              {number}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}


