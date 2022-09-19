import Layout from "../../../components/layout/user";
import Router from "next/router";

export default function MyPage() {
  return (
    <>
      <Layout title="Staff" module="Setup" menu="Staff / Edit">
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
                  <label>Nama</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_nama"
                    placeholder="Nama"
                  />
                </div>
                <div className="form-group">
                  <label>Posisi</label>
                  <select className="form-control form-control-sm">
                    <option>&nbsp;</option>
                    <option>Admin</option>
                    <option>Kasir</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tanggal Masuk</label>
                  <div
                    className="input-group date input-group-sm"
                    id="reservationdate"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      data-target="#reservationdate"
                    />
                    <div
                      className="input-group-append"
                      data-target="#reservationdate"
                      data-toggle="datetimepicker"
                    >
                      <div className="input-group-text">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label>Kota</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="txt_kota"
                      placeholder="Kota"
                    />
                  </div>
                  <div className="form-group">
                    <label>Alamat</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="txt_alamat"
                      placeholder="Alamat"
                    />
                  </div>

                  <div className="form-group">
                    <label>No.HP</label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="txt_noHp"
                      placeholder="Nomor HP"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-danger btn-sm">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
