import { Fragment } from "react";
import "./style.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo App" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Facts List</section>;
}

export default App;
