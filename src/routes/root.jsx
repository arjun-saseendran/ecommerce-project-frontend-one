import React from "react";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div className="container">
      <header>
        <h1>Header</h1>
        <div>
          <Link className="link-style" to="/cart">
            Cart(2)
          </Link >
          <Link className="link-style" to="/login">Login</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Root;
