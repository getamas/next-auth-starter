import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs'

import { buttonVariants } from '@/components/ui/button'

export default function SiteHeader() {
  return (
    <header className='fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center border-b border-foreground/5 bg-white/95 shadow shadow-gray-300/20 backdrop-blur-md dark:bg-background/90 dark:shadow-xl dark:shadow-black/20 print:hidden'>
      <nav className='h-20px relative mx-auto flex w-full max-w-screen-lg items-center justify-between px-3 text-sm'>
        <Link href='/' className='flex items-center h-20 gap-2 sm:gap-4'>
          <Image src='/next.svg' alt='Next.js Logo' width={90} height={18} priority />
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in' className={buttonVariants({ variant: 'link' })}>
            Log in
          </Link>
        </SignedOut>
      </nav>
    </header>
  )
}
