import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout
        title="Purchase Payment"
        module="Finance"
        menu="Purchase Payment / Add"
      >
        <div className="modal fade" id="modalsupplier">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body table-responsive">
                <table className="table table-border">
                  <thead>
                    <tr>
                      <th className="th-code">Code</th>
                      <th>Supplier</th>
                      <th className="th-action1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S-001</td>
                      <td>AA</td>
                      <td>
                        <button className="btn btn-sm btn-warning">
                          Choose
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalitem">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body table-responsive">
                <table className="table table-border">
                  <thead>
                    <tr>
                      <th className="th-code">Code</th>
                      <th>Item</th>
                      <th className="th-action1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S-001</td>
                      <td>AA</td>
                      <td>
                        <button className="btn btn-sm btn-warning">
                          Choose
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/finance/purchase");
                  }}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </div>
              <form className="small mt-3 p-0">
                <div className="row">
                  <div className="col-2">
                    <div className="form-group">
                      <label>Code</label>
                      <input
                        disabled
                        type="text"
                        className="form-control form-control-sm"
                        id="txt_code"
                        defaultValue="Auto"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        id="txt_date"
                        defaultValue="2022-09-30"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label>Supplier#</label>
                      <div className="input-group input-group-sm">
                        <input
                          disabled
                          type="text"
                          className="form-control form-control-sm"
                          id="txt_supplier_code"
                          placeholder="Supplier#"
                          defaultValue="S-001"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <label>Supplier</label>
                      <input
                        disabled
                        type="text"
                        className="form-control form-control-sm"
                        id="txt_supplier_name"
                        placeholder="Supplier"
                        defaultValue="AA"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" table-responsive col-12">
                    <table className="table table-sm table-bordered">
                      <thead className="bg-info">
                        <tr>
                          <th className="th2-code">Purchase#</th>
                          <th>Due Date</th>
                          <th className="th-total">Total</th>
                          <th className="th-total">Payment</th>
                          <th className="th-total">Balance</th>
                          <th className="th-action1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="input-group input-group-sm">
                              <input
                                disabled
                                type="text"
                                className="form-control form-control-sm"
                                id="txt_purchase_code"
                                placeholder="Purchase#"
                                defaultValue="S-001"
                              />
                              <span className="input-group-append">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-info btn-flat bg-dark"
                                  data-toggle="modal"
                                  data-target="#modalsupplier"
                                >
                                  ...
                                </button>
                              </span>
                            </div>
                          </td>
                          <td>
                            <input
                              disabled
                              type="text"
                              className="form-control form-control-sm"
                              id="txt_duedate"
                              placeholder="Due Date"
                              defaultValue="2022-11-30"
                            />
                          </td>
                          <td>
                            <input
                              disabled
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_totale"
                              placeholder="Total"
                              defaultValue="2,500,000"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_payment"
                              placeholder="Payment"
                              defaultValue="1,000,000"
                            />
                          </td>
                          <td>
                            <input
                              disabled
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_balance"
                              placeholder="Balance"
                              defaultValue="1,500,000"
                            />
                          </td>
                          <td className="text-center">
                            <button
                              onClick={(e) => {
                                Router.push("/finance/purchasepayment/add");
                              }}
                              className="btn btn-xs bg-warning pl-2 pr-2"
                            >
                              <i className="fa fa-plus fa-plus-sm"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>A002</td>
                          <td>2022-12-05</td>
                          <td className="text-right">3,000,000</td>
                          <td className="text-right">0</td>
                          <td className="text-right">3,000,00</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>A002</td>
                          <td>2022-12-05</td>
                          <td className="text-right">750,000</td>
                          <td className="text-right">0</td>
                          <td className="text-right">750,000</td>
                          <td></td>
                        </tr>
                        <tr className="bg-gray-light text-bold">
                          <td className="text-right">Notes</td>
                          <td>
                            <input
                              type="text"
                              id="txt_notes"
                              className="form-control form-control-sm"
                            />
                          </td>
                          <td colspan="2" className="text-right">
                            Total
                          </td>
                          <td className="text-right bg-gray">1,000,000</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
