import React, { Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'
import { Outlet, Link } from 'react-router-dom'
interface Iprops {
  children?: ReactNode
}
const Discover: FC<Iprops> = () => {
  return (
    <div>
      <div> discover </div>
      <div>
        <Link to="/discover/recommand">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djRadio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="loading...">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
