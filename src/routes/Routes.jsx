import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Root from '../Layout/Root';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AboutUs from '../pages/AboutUS/AboutUs';
import BeaRider from '../pages/Be-a-Rider/BeaRider';
import Coverage from '../pages/Coverage/Coverage';
import SendParcel from '../pages/SendParcel/SendParcel';
import PrivateRoutes from './PrivateRoutes';
import DashBoard from '../Layout/DashBoard/DashBoard';
import MyPercel from '../pages/DasgBoard/MyPercel';
import Payment from '../pages/DasgBoard/Payment/Payment';
import PaymentSuccess from '../pages/DasgBoard/Payment/PaymentSuccess';
import PaymentCancel from '../pages/DasgBoard/Payment/PaymentCancel';
import Services from '../pages/ServicesZap/Services';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        element:<AboutUs></AboutUs>
      },
      {
        path: '/services',
        element:<Services></Services>
      },
      {
        path: '/berider',
        element:<PrivateRoutes>
          <BeaRider></BeaRider>
          </PrivateRoutes>
      },
      {
        path: '/coverage',
        element:<Coverage></Coverage>,
        loader: () => fetch('/serviceCenter.json')
      },
      
    ]
  },
  {
    path: '/auth',
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/auth/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/auth/signup',
        element:<SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes>
      <DashBoard></DashBoard>
    </PrivateRoutes>,
    children:[
      {
        path: 'my-percels',
        element: <MyPercel></MyPercel>
      },
      {
        path: 'payment/:parcelId',
        element: <Payment></Payment>
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payment-cancelled',
        element: <PaymentCancel></PaymentCancel>
      },
      {
        path: 'send-parcel',
        element:<SendParcel></SendParcel>,
        loader: () => fetch('/serviceCenter.json')
      },
    ]
  }
]);
