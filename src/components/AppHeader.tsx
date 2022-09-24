export default function AppHeader() {
  return (
    <nav className={`header navbar bg-dark`}>
      <div className="container-fluid">
        <a
          href="#"
          className="d-flex navbar-brand align-items-center text-light"
        >
          <i className="bi bi-film fs-1 me-4"></i>
          <h2 className=" fw-light fst-italic">Movie Finder App</h2>
        </a>
        <button type="button" className="btn btn-dark m-0">
          <i className="bi bi-person-circle fs-2"></i>
        </button>
      </div>
    </nav>
  );
}
