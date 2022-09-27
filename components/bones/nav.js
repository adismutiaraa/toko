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
              <Link href="/logout">
                <a>
                  <i className="fa fa-power-off"></i>
                </a>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link href="/user/home">
                <a className="text-white">
                  <i className="fa fa-home"></i>
                </a>
              </Link>
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
              <i className="fas fa-atom"></i>
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
              <i className="fa fa-regular fa-store"></i>
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
              <div className="dropdown-divider"></div>
              <Link href="/purchase/purchase">
                <a className="dropdown-item small">Purchase</a>
              </Link>
              <Link href="/purchase/purchasedetail">
                <a className="dropdown-item small">Purchase Detail</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Warehouse" className="nav-link" data-toggle="dropdown">
              <i className="fas fa-warehouse"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Warehouse</div>
              <div className="dropdown-divider"></div>
              <Link href="/warehouse/item">
                <a className="dropdown-item small">Item</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Sales" className="nav-link" data-toggle="dropdown">
              <i className="fas fa-calculator"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Sales</div>
              <div className="dropdown-divider"></div>
              <Link href="/sales/customer">
                <a className="dropdown-item small">Customer</a>
              </Link>
              <Link href="/sales/item">
                <a className="dropdown-item small">Item</a>
              </Link>
              <div className="dropdown-divider"></div>
              <Link href="/sales/sale">
                <a className="dropdown-item small">Sale</a>
              </Link>
              <Link href="/sales/saledetail">
                <a className="dropdown-item small">Sale Detail</a>
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a title="Sales" className="nav-link" data-toggle="dropdown">
              <i className="fas fa-calculator"></i>
            </a>
            <div className="dropdown-menu">
              <div className="text-bold pl-2">Finance</div>
              <div className="dropdown-divider"></div>
              <Link href="/finance/purchase">
                <a className="dropdown-item small">Purchase</a>
              </Link>
              <Link href="/finance/purchasepayment">
                <a className="dropdown-item small">Purchase Payment</a>
              </Link>
              <Link href="/finance/purchasepaymentdetail">
                <a className="dropdown-item small">Purchase Payment Detail</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
