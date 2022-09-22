import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout title="Item" module="Purchase" menu="Item / Add">
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/purchase/item");
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
                    id="txt_kode"
                    placeholder="Kode"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control form-control-sm"
                    id="txt_category_id"
                  >
                    <option>&nbsp;</option>
                    <option>Food</option>
                    <option>Drink</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Name</label>
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
