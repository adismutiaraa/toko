import { useEffect, useState } from "react";
import Router from "next/router";
import _Lang from "../../../_lang_en.json";
import Layout from "../../../components/layout/user";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function MyPage() {
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    pageControll();
  }, []); //[] untuk melakukan hanya 1x

  const pageControll = async () => {
    //ambil session _pi

    //ambil data backend
    await axios
      .post(_Lang._DOMAIN + "/pget")
      .then((_JSON) => {
        //cek _JSON status
        setLoading(false);
      })
      .catch((err) => console.log("Err: " + err));
  };

  if (_loading) return <img src="/img/loading.gif" />;
  return (
    <>
      <Layout title="Home" module="User" menu="Home / Edit">
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/user/home");
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
                  <label>Nama</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_nama"
                    placeholder="Nama"
                  />
                </div>
                <button onClick={(e) => {
                  Router.push("/user/home");
                }} type="submit" className="btn btn-danger btn-sm">
                  Update
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
