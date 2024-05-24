'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export function ServerDiscoverLink() {
  const pathname = usePathname()
  const link = `/app/servers/discover`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            className="flex justify-center items-center"
            // className={
            //   //   clsx('border border-border rounded-md p-2 transition-colors', {
            //   //   'bg-primary text-primary-foreground hover:bg-primary/90':
            //   //     pathname === link,
            //   //   'hover:bg-primary/5': pathname !== link
            //   // })
            // }
            href={link}
          >
            <Image src="/compass.svg" alt="" width={60} height={60}></Image>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Discover Server</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
