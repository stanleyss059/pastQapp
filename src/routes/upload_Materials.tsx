import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/upload_Materials')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='upload_material'>Hello "/upload material"!</div>
  );
}
