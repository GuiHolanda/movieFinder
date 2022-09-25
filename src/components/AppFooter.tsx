export default function AppFooter() {
  return (
    <footer className="bg-dark text-white">
      <div className="d-flex flex-column align-items-center flex-sm-row mx-sm-3 justify-content-sm-between p-1">
        <a
          href="#"
          className="d-flex navbar-brand align-items-center text-light"
        >
          <i className="bi bi-film footerFont me-2"></i>
          <h3 className="m-0 footerFont fst-italic">Movie Finder</h3>
        </a>
        <div>
          <a
            className="btn btn-dark btn-floating me-1"
            href="https://www.instagram.com/guilhermee_holanda/"
            target={'_blank'}
            role="button"
          >
            <i className="bi bi-instagram footerFont"></i>
          </a>
          <a
            className="btn btn-dark me-1"
            href="https://www.linkedin.com/in/guilherme-holanda-18550a13b/"
            target={'_blank'}
            role="button"
          >
            <i className="bi bi-linkedin  footerFont"></i>
          </a>
          <a
            className="btn btn-dark btn-floating me-1"
            href="https://github.com/GuiHolanda"
            target={'_blank'}
            role="button"
          >
            <i className="bi bi-github  footerFont"></i>
          </a>
        </div>
      </div>

      <div className=" copy text-center p-3">
        © 2020 Copyright:{' '}
        <a className="text-white" href="/">
          Movie Finder
        </a>
      </div>
    </footer>
  );
}
