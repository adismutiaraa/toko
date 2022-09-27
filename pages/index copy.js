import { useEffect, useState } from "react";
import Router from "next/router";
import _Lang from "../_lang_en.json";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function MyPage() {
  const [_username, setUsername] = useState("");
  const [_msg, setMsg] = useState("");
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
        document.getElementById("txt_username").focus(); //untuk mengaktifkan kursor di inputan username
      })
      .catch((err) => console.log("Err: " + err));
  };

  const formSubmit = async (e) => {
    e.preventDefault(); //perintah untuk kirim hanya 1x
    setMsg(_username);

    await axios
      .post(_Lang._DOMAIN + "/pget")
      .then((_JSON) => {
        //cek _JSON status
        setTimeout(function () {
          //proses login
          setMsg("");

          Router.push("/login");
        }, _Lang._TIMER);
      })
      .catch((err) => console.log("Err: " + err));
  };

  if (_loading) return <img src="/img/loading.gif" />;
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">{_Lang._APPS}</div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">{_Lang._LOGIN}</p>
            <form onSubmit={(e) => formSubmit(e)}>
              <div className="input-group">
                <input
                  required //harus diisi artinya
                  type="text"
                  id="txt_username"
                  className="form-control"
                  placeholder={_Lang._USERNAME}
                  value={_username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="row mt-3">
                <div className="col-3">
                  <button type="submit" className="btn btn-dark btn-block">
                    {_Lang._NEXT}
                  </button>
                </div>
              </div>
            </form>
            <div className="row mt-3">
              <div className="col-12 text-red">{_msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
