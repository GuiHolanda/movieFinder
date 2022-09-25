export default function MovieNotFound({ children }: { children: any }) {
  return (
    <div className="d-flex footerFont align-items-center mx-auto my-5">
      <div className="text-center alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle-fill"></i>
        {children}
      </div>
    </div>
  );
}
