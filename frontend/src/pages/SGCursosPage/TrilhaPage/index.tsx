import { TrilhaForm } from "./TrilhaForm";

export const TrilhaPage = () => {
    return (
        <div className="row">
            <div className="col-4 mt-5">
                <TrilhaForm />
            </div>
            <div className="col-8">
                <p>Tabela</p>
            </div>
        </div>
    );
}