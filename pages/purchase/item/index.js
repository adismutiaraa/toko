import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <Layout title="Item" module="Purchase" menu="Item">
      <section className="content">
        <div className="card">
          <div className="card-body p-2">
            <div className="row">
              <div className="col-12">
                <form className="form-horizontal">
                  <div className="input-group input-group-sm">
                    <button
                      onClick={(e) => {
                        Router.push("/purchase/item/add");
                      }}
                      className="btn btn-sm btn-dark"
                      type="button"
                    >
                      <i className="fa fa-plus fa-sm"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control form-control-sm col-sm-2 ml-1"
                      placeholder="Search"
                    />
                    <button type="submit" className="btn" />
                  </div>
                </form>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-sm small mt-2">
                <thead className="bg-gray">
                  <tr>
                    <th width="100">Code</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th width="75">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>F001</td>
                    <td>Food</td>
                    <td>Indomie Goreng Original</td>
                    <td>24500</td>
                    
                    <td>
                      <button
                        onClick={(e) => {
                          Router.push("/purchase/item/edit");
                        }}
                        className="btn btn-xs btn-warning pl-2 pr-2"
                      >
                        <i className="fa fa-pen fa-sm"></i>
                      </button>
                      <button className="btn btn-xs btn-danger ml-1 pl-2 pr-2">
                        <i className="fa fa-trash fa-sm"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="100" className="pt-3">
                      <div className="float-left">Rows: 1 - 10</div>
                      <div className="float-right">
                        <button className="btn btn-sm btn-dark pl-3 pr-3">
                          <i className="fa fa-chevron-left"></i>
                        </button>
                        <button className="btn btn-sm btn-dark ml-1 pl-3 pr-3">
                          <i className="fa fa-chevron-right"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
