import 'antd/dist/antd.css';
import {FC} from 'react';
import LayoutAdmin from '../../../components/Layout/LayoutAdmin';
import Proyeccion from '../../../components/Content/Proyecciones';

const Proyecciones: FC = () => {
    return(
        <LayoutAdmin>
            <Proyeccion />
        </LayoutAdmin>
    )
}

export default Proyecciones;