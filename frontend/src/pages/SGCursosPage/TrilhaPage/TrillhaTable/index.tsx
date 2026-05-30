

export const TrilhaTable = () => {
    let trilhas = [
        { id: 1, nome: "Trilha 1", descricao: "Descrição da Trilha 1" },
        { id: 2, nome: "Trilha 2", descricao: "Descrição da Trilha 2" },
        { id: 3, nome: "Trilha 3", descricao: "Descrição da Trilha 3" },
    ]
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {trilhas.map((trilha) => (
                    <tr key={trilha.id}>
                        <td>{trilha.id}</td>
                        <td>{trilha.nome}</td>
                        <td>{trilha.descricao}</td>
                        <td>
                            <button className="btn btn-primary btn-sm">Editar</button>
                            <button className="btn btn-danger btn-sm">Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}