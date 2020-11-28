import 'antd/dist/antd.css';
import {FC} from 'react';
import LayoutAdmin from '../../../components/Layout/LayoutAdmin';
import PagosContent from '../../../components/Content/Pagos';

const Pagos: FC = () => {
    return(
        <LayoutAdmin>
            <PagosContent />
        </LayoutAdmin>
    )
}

export default Pagos;