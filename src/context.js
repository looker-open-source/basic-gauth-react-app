import React from 'react'

export const GoogleUserContext = React.createContext({
    googleUserId: 'DEFAULT_GOOGLE_USER_ID',
    setGoogleUserId: () => {}
})

export const GoogleUserConsumer = GoogleUserContext.Consumer
