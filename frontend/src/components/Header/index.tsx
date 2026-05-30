import { Nav } from "../Nav";

export const Header = () => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className="bi bi-list"></i>
                </a>
                <div className="offcanvas offcanvas-start bg-dark text-white" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <i className="bi bi-mortarboard-fill text-warning fs-3"></i>
                        &nbsp;&nbsp;&nbsp;
                        <h5 className="offcanvas-title text-warning" id="offcanvasExampleLabel">DevTech-EDU</h5>
                    </div>
                    <hr />
                    <div className="offcanvas-body">
                        <Nav />
                    </div>
                </div>
            </div>
        </>
    );
}