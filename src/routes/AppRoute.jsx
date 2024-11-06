import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routeConstants from '../constants/routeContants'
import { LayoutContainer } from '../layout/LayoutContainer'
import { HomeScreen } from '../screens/Home/HomeScreen'
import { PageNotFound } from '../screens/PageNotFound/PageNotFound'

export const AppRoute = () => {
  return (
    <Routes>
        <Route path={routeConstants.ROOT} element={<LayoutContainer/>}>
            <Route path={routeConstants.HOME} element={<HomeScreen/>}/>
        </Route>
        <Route path={routeConstants.PAGE_NOT_FOUND} element={<PageNotFound/>}/>
    </Routes>
  )
}
