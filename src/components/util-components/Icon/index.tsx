import React, { FunctionComponent } from 'react';

interface IconProps {
	type: string;
	className?: string;
}

const Icon: FunctionComponent<IconProps> = ({ type, className }) => {
	return (
		<>
			{React.createElement(type, { className: className })}
		</>
	);
};

export default Icon;
