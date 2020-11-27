import 'antd/dist/antd.css';
import {FC} from 'react';
import LayoutAdmin from '../../../components/Layout/LayoutAdmin';
import DeudaContent from '../../../components/Content/Deudas';

const Deudas: FC = () => {
    return(
        <LayoutAdmin>
            <DeudaContent />
        </LayoutAdmin>
    )
}

export default Deudas;