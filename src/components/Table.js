
import { Table } from 'react-bootstrap'

const TableData = ({ data, columns, loading, error }) => {

    return (
        <div>
            {columns !== null ? (<Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {error && <tr><td colSpan={columns.length}>{error}</td></tr>}
                    {!error ?
                        data.map((info, index) => (
                            <tr key={info.id ? info.id : index}>
                                {columns.map((column, indexColumn) => (
                                    <td key={indexColumn}>{info[column]}</td>))}
                            </tr>
                        )) : <tr><td>Não há dados</td></tr>
                    }
                </tbody>

            </Table>) : <div>Não há dados para serem carregados!</div>}
        </div>
    )
}

export default TableData