import React from 'react';

const fopterLinks: string[] = ['About', 'Prive Policy', 'Licensing', 'Contact'];

export default function AppFooter() {
  return (
    <footer className="bg-dark text-white">
      <div className="d-sm-flex container text-center justify-content-center justify-content-md-around">
        <a
          href="#"
          className="d-flex container text-center align-items-center  p-2 text-light"
        >
          <i className="bi bi-film fs-4 m-auto">
            <span className="fw-light fs-5"> Movie Finder App</span>
          </i>
        </a>
        <div className="container px-4 py-2 pb-0">
          <section className="mb-2">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>
        </div>
      </div>

      <div className=" copy text-center p-3">
        © 2020 Copyright:{' '}
        <a className="text-white" href="https://mdbootstrap.com/">
          Movie Finder App
        </a>
      </div>
    </footer>
  );
}
