import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout title="Customer" module="Sales" menu="Customer / Edit">
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/sales/customer");
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
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_address"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_city"
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_phone"
                    placeholder="Phone"
                  />
                </div>

                <button type="submit" className="btn btn-danger btn-sm">
                  Add
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
