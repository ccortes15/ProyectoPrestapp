import React, { FC } from 'react'
import 'antd/dist/antd.css';
import Perfil from '../../../components/Content/Config/Perfil'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'

type Props = {

}

const ConfPerfil: FC<Props> = () => {

        return (
            <LayoutAdmin>
                <Perfil/>
            </LayoutAdmin>
        ) 

}

export default ConfPerfil