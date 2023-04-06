
import { Table } from 'react-bootstrap'

const TableData = ({ data, columns, loading, error }) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns !== null ?
                            columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            )) : <th colSpan={5}>Data Not Found</th>}
                    </tr>
                </thead>
                <tbody>
                    {loading && <tr><td colSpan={5}>Carregando Dados</td></tr>}
                    {error && <tr><td colSpan={5}>{error}</td></tr>}
                    {columns !== null ?
                        data.map((info) => (
                            <tr key={info.id}>
                                <td>{info.Nome}</td>
                                <td>{info.Data_Nascimento}</td>
                                <td>{info.CPF}</td>
                                <td>{info.Endereco}</td>
                                <td>{info.Status}</td>
                            </tr>
                        )) : <tr><td>Não há dados</td></tr>
                    }
                </tbody>

            </Table>
        </div>
    )
}

export default TableData