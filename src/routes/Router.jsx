// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const LayoutOne = lazy(() => import('../layouts/LayoutOne'));
const Home      = lazy(() => import('../pages/Home'));
const Services  = lazy(() => import('../pages/Services'))
const Schedule  = lazy(() => import('../pages/Schedule'))
const ContactUs = lazy(() => import('../pages/Contact'))

const Router = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Main layout */}
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path='Services'  element={<Services />} />
          <Route path='Schedule'  element={<Schedule />} />
          <Route path='Contact' element={<ContactUs />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={route} />
      </Suspense>
    </>
  )
}

export default Router;
