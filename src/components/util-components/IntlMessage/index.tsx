import React from 'react';
import { useTranslation } from 'react-i18next'

const IntlMessage = ({ id, fallback }: { id: string, fallback?: string }) => {

	const { t } = useTranslation()

	const translate = t(id, fallback)

	return <>{translate}</>
}

export default IntlMessage;
