import { auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = auth()

  if (!userId) {
    redirect('/')
  }

  const user = await currentUser()

  return (
    <div className='pt-32 px-5 pb-5 mx-auto text-center max-w-xl'>
      {user && <h1 className='text-4xl font-bold mb-5'>Hi, {user.firstName || `Stranger`}</h1>}
    </div>
  )
}
