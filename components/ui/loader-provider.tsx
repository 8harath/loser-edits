"use client"
import { useEffect, useState } from "react"
import { FullPageLoader } from "@/components/ui/skeleton"

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <FullPageLoader />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.4s' }}>
        {children}
      </div>
    </>
  )
} 