import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-amber-500 min-h-96 flex items-center justify-center text-2xl'>
  Hello "/products/"!
</div>
}
