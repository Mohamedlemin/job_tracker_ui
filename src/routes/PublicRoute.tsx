import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AUTHENTICATED_ENTRY } from 'configs/AppConfig'
import { useAppSelector } from 'store/hooks'

const PublicRoute = () => {

	const { token } = useAppSelector(state => state.auth)

	return token ? <Navigate to={AUTHENTICATED_ENTRY} /> : <Outlet />
}

export default PublicRoute