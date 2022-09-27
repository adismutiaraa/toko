import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <>
      <Layout title="Staff" module="Setup" menu="Staff / Add">
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/setup/staff");
                  }}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </div>
              <form className="small mt-3">
                <div className="form-group">
                  <label>Code</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_code"
                    placeholder="Code"
                  />
                </div>
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
                    placeholder="Adress"
                  />
                </div>
                <div className="form-group mt-3">
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
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control datetimepicker-input col-4"
                    data-target="#reservationdate"
                  />
                  <div className="form-group">
                    <label>Position</label>
                    <select
                      className="form-control form-control-sm"
                      id="txt_position_id"
                    >
                      <option>&nbsp;</option>
                      <option>Admin</option>
                      <option>Kasir</option>
                    </select>
                  </div>
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
