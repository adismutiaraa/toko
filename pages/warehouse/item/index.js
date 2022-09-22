import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <Layout title="Items" module="Warehouse" menu="Items">
      <section className="content">
        <div className="card">
          <div className="card-body p-2">
            <div className="row">
              <div className="col-12">
                <form className="form-horizontal">
                  <div className="input-group input-group-sm">
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
                    <th width="100">Kode</th>
                    <th>Items</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>F001</td>
                    <td>Indomie Goreng Original</td>
                    <td>Show</td>
                  </tr>
                  <tr>
                    <td>D025</td>
                    <td>Teh Kotak 300ml</td>
                    <td>Show</td>
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
