import React, { Fragment } from 'react'
import ContainerStructure from './ContainerStructure'

type props = {
    transcType: string,
    ao: string
}

export const FormContainer: React.FC<props> = (props) => {
        return (
            <Fragment>
                <ContainerStructure 
                    transcType = {props.transcType}
                    ao = {props.ao}
                >
                {
                    props.children
                
                }
                </ContainerStructure>
            </Fragment>
        ) 
}

export default FormContainer