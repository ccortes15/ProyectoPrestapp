import React, { ChangeEvent, FC, Fragment, useState } from 'react'
import { Row, Col } from 'antd'
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';

type Props = {

}

const Etiquetas: FC<Props> = () => {
    
    const [ tags, setTags ] = useState<Array<ChangeEvent<HTMLInputElement>>>([null])
    const [ inputVisible, setInpVisible ] = useState<boolean>(false)
    const [ inputValue, setInpValue ] = useState<ChangeEvent<HTMLInputElement>>()

    const forMap = (tag: ChangeEvent<HTMLInputElement>) => {
        const tagElem = (
          <Tag
            closable
            onClose={e => {
              e.preventDefault();
              handleClose(tag);
            }}
          >
            {tag}
          </Tag>
        );
        return (
          <span key={tag.toString()} style={{ display: 'inline-block' }}>
            {tagElem}
          </span>
        );
      }

    const tagChild = tags.map(forMap);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInpValue(e)
    }

    const showInput = () => {
        setInpVisible(true), () => focus()
    }
    
    const handleClose = (removedTag: ChangeEvent<HTMLInputElement>) => {
        
        const tagsN = tags.filter(tag => tag !== removedTag);
        setTags(tagsN)
      };

      const handleInputConfirm = () => {
    
        const inpValue = inputValue
        let tag = tags
    
        if (inpValue && tag.indexOf(inpValue) === -1) {
            tag = [...tag, inpValue];
          }
          setInpValue(null)
          setInpVisible(false)
    }

        return (
            <Fragment>
                <Row gutter={16} style={{margin:"20px 10px 20px 10px", backgroundColor:"#AFAFAF", }}>
                    <Col span={24}>
                        <div style={{ marginBottom: 16 }}>
                        
                            <TweenOneGroup
                                enter={{
                                scale: 0.8,
                                opacity: 0,
                                type: 'from',
                                duration: 100,
                                // onComplete: e => {
                                //     e.target.style = '';
                                // },
                                }}
                                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                appear={false}
                            >
                                {tagChild}
                            </TweenOneGroup>
                        </div>
                        
                        {inputVisible && (
                        <Input
                            //ref={saveInputRef}
                            type="text"
                            size="small"
                            style={{ width: 78 }}
                            value={inputValue.toString()}
                            onChange={handleInputChange}
                            onBlur={handleInputConfirm}
                            onPressEnter={handleInputConfirm}
                        />
                        )}
                        
                        {!inputVisible && (
                        <Tag onClick={showInput} className="site-tag-plus">
                            <PlusOutlined /> New Tag
                        </Tag>
                        )}
                    </Col>
                </Row>
            </Fragment>
        )
}

export default Etiquetas