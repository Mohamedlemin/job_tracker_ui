import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import {
	AUTH_PREFIX_PATH,
	UNAUTHENTICATED_ENTRY,
	REDIRECT_URL_KEY
} from 'configs/AppConfig'
import { useAppSelector } from 'store/hooks';

const ProtectedRoute = () => {

	const { token } = useAppSelector(state => state.auth)
	const location = useLocation()

	if (!token) {
		return <Navigate to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}?${REDIRECT_URL_KEY}=${location.pathname}`} replace />;
	}

	return <Outlet />
}

export default ProtectedRoute