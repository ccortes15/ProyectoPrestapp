import 'antd/dist/antd.css';
import {FC} from 'react';
import LayoutAdmin from '../../../components/Layout/LayoutAdmin';
import ClientesContent from '../../../components/Content/Clientes';

const Clientes: FC = () => {
    return(
        <LayoutAdmin>
            <ClientesContent />
        </LayoutAdmin>
    )
}

export default Clientes;