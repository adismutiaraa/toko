import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <>
      <Layout title="Supplier" module="Purchase" menu="Supplier">
        <section className="content">
          <div className="card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-12">
                  <form className="form-horizontal">
                    <div className="input-group input-group-sm">
                      <button
                        onClick={(e) => {
                          Router.push("/purchase/supplier/add");
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
                      <th>Code</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Address</th>
                      <th width="100">Phone</th>
                      <th width="100">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S-001</td>
                      <td>AA</td>
                      <td>Cirebon</td>
                      <td>Jalan Dr.Cipto Mangunkusumo No.1A</td>
                      <td>0123456789</td>
                      <td>
                        <button
                          onClick={(e) => {
                            Router.push("supplier/edit");
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
    </>
  );
}
