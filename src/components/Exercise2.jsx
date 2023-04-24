import React from "react";
import Header from ".Header";
import Main from "./Main";
import Footer from ".Footer";

const Exercise2 = () => {
  return (
    <div>
      <div className="container">
        <h1 className="ex-name">Components HH EX 2</h1>
        <header>
          <h1>Website Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ratione ullam impedit consectetur porro sed fuga ipsa sequi,
            accusamus quas debitis alias, et repellat architecto magnam optio
            dolores commodi ipsam.
          </p>
        </header>
        <main>
          <h1>Main Section</h1>
          <button>Click me</button>
        </main>
        <footer>
          <h1>Website Footer</h1>
          <a href="https://www.techupth.com">techupth.com</a>
        </footer>
      </div>
    </div>
  );
};

export default Exercise2;
