import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const TableFormulario = ({ titles, items }) => {
    return (
        <>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        {
                            titles && titles.map((title, i) => (
                                <th key={ i }>
                                    <div className="d-flex justify-content-center align-items-center">
                                        { title.descripcion }
                                    </div>
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        items && items.map((item, i) => (
                            <tr key={ i }>
                                <td>
                                    <div className="d-flex align-items-center">
                                        { item.inciso }
                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex align-items-center">
                                        { item.componente }
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}

TableFormulario.propTypes = {
    titles: PropTypes.array,
    items: PropTypes.array
}

export default TableFormulario;
