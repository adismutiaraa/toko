import { useEffect } from "react";
import "../styles/plugins/fontawesome-free/css/all.min.css";
import "../styles/dist/css/adminlte.min.css";
import "../styles/css/style.css";
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../styles/plugins/jquery/jquery.min.js");
    import("../styles/plugins/bootstrap/js/bootstrap.bundle.min.js");
    import("../styles/dist/js/adminlte.min.js");
  }, []);

  return <Component {...pageProps} />;
}
