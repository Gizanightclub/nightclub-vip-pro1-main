'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  useEffect(() => {
    const scriptId = id || `jsonld-${Date.now()}`

    // Remove existing script if updating
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }

    // Create new script
    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data, null, 0) // Minified JSON

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(scriptId)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data, id])

  return null // This component doesn't render anything
}
