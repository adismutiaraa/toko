export default function Layout({ title, children }) {
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <img src="../img/logo.png" />
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg text-bold">{title}</p>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

