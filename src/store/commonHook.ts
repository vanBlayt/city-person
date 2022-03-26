import React, { useContext, useCallback } from 'react'
import { StoreContext } from './index'
export const useLoginStatusChange = () => {
  const { dispatch } = useContext(StoreContext)

  const loginStatusChange = useCallback(async (loginStatus: boolean) => {
    if (dispatch === undefined) {
      throw new Error('dispatch undefined')
    }

    dispatch({ type: 'loginStatusChange', payload: { login: loginStatus } })

  }, [dispatch])
  return [loginStatusChange]
}