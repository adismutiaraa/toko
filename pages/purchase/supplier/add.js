import Layout from "../../../components/layout/user";
import Router from "next/router";
import { useState, useEffect } from "react";
import _LANG from "../../../_lang_en.json";

export default function MyPage() {
  const [_loading, setLoading] = useState(true);
  const [_name, setName] = useState("");
  const [_city, setCity] = useState("");
  const [_address, setAddress] = useState("");
  const [_phone, setPhone] = useState("");
  const [_frm, setFrm] = useState("A");

  useEffect(() => {
    pageControll();
  }, []);

  const pageControll = async () => {
    setLoading(false);
  };
  const formSubmit = async (e) => {
    e.preventDefault();

    setFrm(_name + "-" + _city + "-" + _address + "-" + _phone);
  };

  if (_loading) return <img src="/img/loading.gif" />;
  return (
    <>
      <Layout
        title={_LANG._SUPPLIER}
        module={_LANG._PURCHASE}
        menu={_LANG._SUPPLIER + " / " + _LANG._ADD}
      >
        <section className="content">
          <div className="card">
            <div className="card-body p-3">
              <div className="float-right">
                <button
                  onClick={(e) => {
                    Router.push("/purchase/supplier");
                  }}
                  className="btn btn-sm btn-warning"
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </div>
              <form className="small mt-3" onSubmit={(e) => formSubmit(e)}>
                <div className="form-group">
                  <label>{_LANG._NAME}</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_name"
                    placeholder="Name"
                    value={_name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>{_LANG._CITY}</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_city"
                    placeholder="City"
                    value={_city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>{_LANG._ADDRESS}</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="txt_address"
                    placeholder="Address"
                    value={_address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>{_LANG._PHONE}</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="txt_phone"
                    placeholder="Phone"
                    value={_phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-danger btn-sm">
                  {_LANG._SAVE}
                </button>
              </form>
              <div>{_frm}</div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
