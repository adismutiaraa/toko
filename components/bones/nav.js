import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="main-header navbar navbar-expand small navbar-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link text-bold">APP Toko</div>
          </li>
          <li className="nav-item">
            <div className="nav-link ">
              <a href="">
                <i className="fa fa-power-off"></i>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <a href="" className="text-white">
                <i className="fa fa-home"></i>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="User" className="nav-link" data-toggle="dropdown">
              <i className="fa fa-user"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">User</div>
              <div className="dropdown-divider"></div>
              <a href="" className="dropdown-item small">
                Profile
              </a>
              <a href="" className="dropdown-item small">
                Change password
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Setup" className="nav-link" data-toggle="dropdown">
              <i className="fa fa-atom"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Setup</div>
              <div className="dropdown-divider"></div>
              <Link href="/setup/position">
                <a className="dropdown-item small">Position</a>
              </Link>
              <Link href="/setup/staff">
                <a className="dropdown-item small">Staff</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Purchase" className="nav-link" data-toggle="dropdown">
              <i className="fa fa-atom"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Purchase</div>
              <div className="dropdown-divider"></div>
              <Link href="/purchase/supplier">
                <a className="dropdown-item small">Supplier</a>
              </Link>
              <Link href="/purchase/itemcategory">
                <a className="dropdown-item small">Item Category</a>
              </Link>
              <Link href="/purchase/item">
                <a className="dropdown-item small">Item</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Setup" className="nav-link" data-toggle="dropdown">
              <i className="fa fa-atom"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Warehouse</div>
              <div className="dropdown-divider"></div>
              <Link href="/warehouse/item">
                <a className="dropdown-item small">Item</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
