export default function MovieNotFound() {
  return (
    <div className="d-flex align-items-center mx-auto my-5">
      <div className="text-center alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle-fill"></i> Movie not found, try
        another title.
      </div>
    </div>
  );
}
