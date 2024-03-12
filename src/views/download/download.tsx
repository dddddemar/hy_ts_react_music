import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const Download: FC<Iprops> = () => {
  return <div>download</div>
}

export default memo(Download)
