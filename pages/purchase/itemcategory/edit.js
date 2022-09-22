import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout
        title="Item Category"
        module="Purchase"
        menu="Item Category / Edit"
      >
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/purchase/itemcategory");
                  }}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </div>
              <form className="small mt-3">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_name"
                    placeholder="Name"
                  />
                </div>

                <button type="submit" className="btn btn-danger btn-sm">
                  Save
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
