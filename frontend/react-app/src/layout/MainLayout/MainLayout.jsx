import Sidebar from "../../components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />

                <main className="col-sm p-4 min-vh-100">
                    {children}
                </main>
            </div>
        </div>
    );
}