import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-2 text-4xl">
      <h3>About</h3>
      <Button variant="destructive">Click</Button>
    </div>
  )
}
