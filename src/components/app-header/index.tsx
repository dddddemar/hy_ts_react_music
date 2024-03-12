import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft } from './style'

interface Iprops {
  children?: ReactNode
}
const AppHeader: FC<Iprops> = () => {
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a className="logo sprite_01" href="/">
              网易云音乐
            </a>
          </HeaderLeft>
          <Link to="/discover">发现音乐</Link>
          <Link to="/mine">我的音乐</Link>
          <Link to="/focus">关注</Link>
          <Link to="/download">下载客户端</Link>
        </div>
      </HeaderWrapper>
    </div>
  )
}

export default memo(AppHeader)
