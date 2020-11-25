import React, { useState } from 'react'
import { Drawer, Button } from 'antd';


type props = {
    transcType: string,
    ao: string
}

const DrawerContainer: React.FC<props> = (props) => {

    const [visibility, setVisibility] = useState<boolean>(false)

        return (
            <>
                <Button type = "link" onClick = { () => setVisibility(true)} >
                    Nuev{props.ao} {props.transcType}
                </Button>
                <Drawer
                title= {`Agregar un${props.ao} nuev${props.ao} ${props.transcType}`}
                width={720}
                onClose={ () => {
                    setVisibility(false)
                } }
                visible={visibility}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                    style={{
                        textAlign: 'right',
                    }}
                    >
                    <Button 
                        onClick={() => {
                            setVisibility(false)
                        }} 
                        style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button 
                        onClick={ () => {
                            setVisibility(false)
                        } } 
                        type="primary">
                        Submit
                    </Button>
                    </div>
                }
                >
                    {
                        props.children
                    }

                </Drawer>
            </>
        ) 
}

export default DrawerContainer