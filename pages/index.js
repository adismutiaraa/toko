import Layout from "../components/layout/login";

export default function MyPage() {
    return (
        <Layout title="Login">
            <form>
                <input
                    required
                    id="txt_username"
                    type="text"
                    className="form-control form-control-sm"
                />
                <button type="submit" className="btn btn-sm btn-dark mt-2 pl-3 pr-3">
                    Next
                </button>
            </form>
            <div className="text-center text-danger small mt-2 mb-2">_msg</div>
        </Layout>
    );
}