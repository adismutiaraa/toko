import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout title="Items" module="Purchase" menu="Items / Add">
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/purchase/items");
                  }}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </div>
              <form className="small mt-3">
                <div className="form-group">
                  <label>Kode</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_kode"
                    placeholder="Kode"
                  />
                </div>
                <div className="form-group">
                  <label>Items</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_items"
                    placeholder="Items"
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_price"
                    placeholder="Price"
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control form-control-sm">
                    <option>&nbsp;</option>
                    <option>Show</option>
                    <option>Hide</option>
                  </select>
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
