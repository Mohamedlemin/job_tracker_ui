import React, { forwardRef } from 'react';

interface CustomIconProps {
    svg: any;
    className?: string;
}

const CustomIcon: React.ForwardRefRenderFunction<any, CustomIconProps> = ({ svg: IconComponent, className }, ref) => {
    return (
        <IconComponent ref={ref} className={className} />
    );
}

export default forwardRef<HTMLElement, CustomIconProps>(CustomIcon);
