import React from 'react'
import ContainerStructure from './ContainerStructure'

type props = {
    transcType: string,
    ao: string
}

export const FormContainer: React.FC<props> = (props) => {
        return (
            <>
                <ContainerStructure 
                    transcType = {props.transcType}
                    ao = {props.ao}
                >
                {
                    props.children
                
                }
                </ContainerStructure>
            </>
        ) 
}

export default FormContainer