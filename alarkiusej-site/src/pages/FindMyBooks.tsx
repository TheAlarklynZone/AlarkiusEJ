import { useEffect } from 'react'

export default function FindMyBooks() {
  useEffect(() => {
    window.location.replace(
      'https://www.barnesandnoble.com/search?q=Alarkius%20Elvya%20Jay&contributorName=alarkius-elvya-jay'
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <p className="text-text-muted text-sm">Redirecting to Barnes & Noble...</p>
    </div>
  )
}
