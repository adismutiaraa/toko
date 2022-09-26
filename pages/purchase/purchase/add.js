import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function () {
  return (
    <>
      <Layout title="Purchase" module="Purchase" menu="Purchase / Add">
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
                    Router.push("/purchase/purchase");
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
                          <th className="th2-code">Item#</th>
                          <th>Item</th>
                          <th className="th2-price">Price</th>
                          <th className="th2-qty">Qty</th>
                          <th className="th2-total">Sub total</th>
                          <th className="th2-plus"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="input-group input-group-sm">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txt_item_code"
                                placeholder="Item#"
                                defaultValue="A001"
                              />
                              <span className="input-group-append">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-info btn-flat bg-dark"
                                  data-toggle="modal"
                                  data-target="#modalitem"
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
                              id="txt_item_name"
                              placeholder="Item"
                              defaultValue="Barang1"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_price"
                              placeholder="Price"
                              defaultValue="12,000"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_qty"
                              placeholder="Qty"
                              defaultValue="12"
                            />
                          </td>
                          <td>
                            <input
                              disabled
                              type="text"
                              className="form-control form-control-sm text-right"
                              id="txt_subtotal"
                              placeholder="Subtotal"
                              defaultValue="144,000"
                            />
                          </td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-warning">
                              <i className="fa fa-plus fa-sm"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>A002</td>
                          <td>Barang 2</td>
                          <td className="text-right">13,000</td>
                          <td className="text-right">3</td>
                          <td className="text-right">39,000</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>A002</td>
                          <td>Barang 2</td>
                          <td className="text-right">13,000</td>
                          <td className="text-right">3</td>
                          <td className="text-right">39,000</td>
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
                          <td className="text-right bg-gray">39,000</td>
                          <td></td>
                        </tr>
                        <tr className="bg-gray-light text-bold">
                          <td className="text-right">Due Date </td>
                          <td>
                            <input
                              type="date"
                              id="txt_duedate"
                              className="form-control form-control-sm"
                              defaultValue="2022-09-30"
                            />
                          </td>
                          <td colspan="2" className="text-right">
                            Payment
                          </td>
                          <td className="text-right bg-gray">0</td>
                          <td></td>
                        </tr>
                        <tr className="bg-gray-light text-bold">
                          <td colspan="2"></td>
                          <td colspan="2" className="text-right">
                            Balance
                          </td>
                          <td className="text-right bg-gray">39,000</td>
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
