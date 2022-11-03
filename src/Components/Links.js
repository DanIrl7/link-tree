import React from "react";

export default function Links() {
  return (
    <div className="links-btns">
      <div className="link-btn">
        <a id="zuri_btn" target="_blank" href='https://training.zuri.team/'>
          Zuri Team
        </a>
      </div>
      <div className="link-btn">
        <a id="books" target="_blank" href='http://books.zuri.team'>
          Zuri Books
        </a>
      </div>
      <div className="link-btn">
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<daniel-masona>'
          id="book_python"
          target="_blank">
          Python Book
        </a>
      </div>
      <div className="link-btn">
        <a id="pitch" target="_blank" href='https://background.zuri.team/'>
          High Quality assurance check for coders
        </a>
      </div>
      <div className="link-btn">
        <a
          id="book_design"
          target="_blank"
          href='https://books.zuri.team/design-rules'
        >
          Free Design Book
        </a>
      </div>
    </div>
  );
}
