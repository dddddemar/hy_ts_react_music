import React, { useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'
import { useAppSelector, useAppDispatch, appshallowEqual } from '@/store'
import { changeMessage } from '@/store/module/counter'
import hyRequest from '@/service'
interface Iprops {
  children?: ReactNode
}
// type GetStateFnType = typeof store.getState
// type FnReturnType = ReturnType <GetStateFnType>
const Demo: FC<Iprops> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    appshallowEqual //如何依赖的这些值没有变化就不会刷新
  )

  const dispatch = useAppDispatch()
  const handleMessage = () => {
    dispatch(changeMessage('大家好'))
  }

  const [banner, setBanner] = useState<any[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log(res)
        console.log(setBanner(res.banners))
      })
  }, [])

  return (
    <div>
      <div>
        {' '}
        Recommand-{count}-{message}
        <div>
          <button onClick={handleMessage}>修改message</button>
        </div>
        <div>
          {banner.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.imageUrl} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(Demo)
