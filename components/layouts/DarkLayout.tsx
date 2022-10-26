import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderRadius: '10px',
      padding: '10px'
    }}>
      <h3>Dark Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}
