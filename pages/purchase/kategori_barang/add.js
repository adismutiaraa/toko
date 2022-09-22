import Layout from "../../../components/layout/user";
import Router from "next/router";


export default function () {
  return (
    <>
      <Layout
        title="Category Item"
        module="Purchase"
        menu="Category Item / Add"
      >
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/purchase/kategori_barang");
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
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_category"
                    placeholder="Category"
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
