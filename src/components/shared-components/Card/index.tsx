import React, { ReactElement } from 'react';
import { Card as AntdCard } from 'antd';


const Card = ({ style, children, ...rest }: { style?: React.CSSProperties, children: ReactElement | ReactElement[] | string }) => {
    return (
        <AntdCard style={{ marginBottom: 20 }} {...rest} >{children}</AntdCard>
    )
}

export default Card