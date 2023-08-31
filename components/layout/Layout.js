import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM project</h2>
        <Link href={"/add-customer"}>New Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">crm project - next.js 2023</footer>
    </>
  );
}

export default Layout;
