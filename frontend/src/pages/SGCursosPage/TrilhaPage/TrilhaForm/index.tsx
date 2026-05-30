import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

export const TrilhaForm = () => {
    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                Formulário de Trilha
            </div>
            <div className="card-body">
                <Input
                    label="Nome da Trilha"
                    type="text"
                    id="nomeTrilha"
                    placeholder="Entre com o nome da trilha"
                />
                <Input
                    label="Descrição da Trilha"
                    type="text"
                    id="descricaoTrilha"
                    placeholder="Entre com a descrição da trilha"
                />
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-6">
                        <Button value="Salvar" />
                    </div>
                    <div className="col-6">
                        <Button variant="secondary" value="Cancelar" />
                    </div>
                </div>
            </div>
        </div>
    );
}