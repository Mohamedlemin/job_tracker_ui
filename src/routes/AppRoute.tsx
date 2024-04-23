import React, { FC, LazyExoticComponent, useEffect } from 'react';
import { onBlankLayout } from 'store/slices/themeSlice';
import { useDispatch } from 'react-redux';

interface props{
	 routeKey: string; 
	 component: LazyExoticComponent<any>; 
	 blankLayout?:boolean;
	
}
const AppRoute:FC<props> = ({ component: Component, routeKey, blankLayout, ...props }) => {

	const dispatch = useDispatch()

	useEffect(() => {
		const isBlank = blankLayout ? true : false
		dispatch(onBlankLayout(isBlank))

	}, [blankLayout, dispatch])

	return (
		<Component {...props} />
	)
}

export default AppRoute