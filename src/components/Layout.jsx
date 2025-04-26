import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main className="flex-fill d-flex flex-column align-items-center justify-content-center mb-5">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
