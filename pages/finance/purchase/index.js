import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <Layout title="Purchase" module="Purchase" menu="Purchase">
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
                    <th width="75">&nbsp;</th>
                    <th className="th-code">Code</th>
                    <th className="th-date">Date</th>
                    <th className="th-date">Due Date</th>
                    <th>Supplier</th>
                    <th className="th-total">Total</th>
                    <th className="th-total">Payment</th>
                    <th className="th-total">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <button
                        onClick={(e) => {
                          Router.push("/finance/purchasepayment/add");
                        }}
                        className="btn btn-xs bg-olive pl-2 pr-2"
                      >
                        <i className="fa-sharp fas fa-dollar-sign"></i>
                      </button>
                    </td>
                    <td>F001</td>
                    <td>12-02-2022</td>
                    <td>12-02-2022</td>
                    <td>Supplier 1</td>
                    <td className="text-right">245,000</td>
                    <td className="text-right">0</td>
                    <td className="text-right">245,000</td>
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
