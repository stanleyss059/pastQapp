import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my_Uploads')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='my_Uploads'>Hello "/my_Uploads"!</div>
  );
}
