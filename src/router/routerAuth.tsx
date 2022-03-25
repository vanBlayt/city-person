import React, { useContext } from "react";
import { Navigate } from "react-router";
import { StoreContext } from '@/store'

// TODO 定义children 类型
interface Props {
  children: any
}

export function RequireAuth({ children }: Props) {
  const { state } = useContext(StoreContext);
  const { login } = state;
  return login ? (
    children
  ) : (
    <>
      < Navigate to="/login" replace />
    </>
  )
}