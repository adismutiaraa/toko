import { Children } from "react";
import Nav from "../bones/nav";

export default function Layout({ title, module, menu, children }) {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <h1>{title}</h1>
              </div>
              <div className="col-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">{module}</li>
                  <li className="breadcrumb-item">{menu}</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {children}
      </div>
    </>
  );
}
