import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom' //重定向

// import Focus from '@/views/focus'
// import Mine from '@/views/mine'
// import Discover from '@/views/discover'
// import Download from '@/views/download/download'
const Focus = lazy(() => import('@/views/mine'))

const Mine = lazy(() => import('@/views/mine'))

const Discover = lazy(() => import('@/views/discover'))

const Recommand = lazy(() => import('@/views/discover/c-views/recommand'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const DjRadip = lazy(() => import('@/views/discover/c-views/djRadio'))

const Download = lazy(() => import('@/views/download/download'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommand"></Navigate>
      },
      {
        path: '/discover/recommand',
        element: <Recommand />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djRadio',
        element: <DjRadip />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
