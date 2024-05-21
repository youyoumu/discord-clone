import { fetchMe } from '@/lib/actions'
import Image from 'next/image'
import { ProfileSettingsDialog } from './profile-settings-dialog'

export async function ChannelFooterProfile() {
  const me = await fetchMe()
  return (
    <div className="flex gap-2 p-3 border-t border-border items-center">
      <Image src="/user.png" alt="" width={40} height={40}></Image>
      <div className="grow">
        <div>{me.user.username}</div>
        <div className="text-xs text-slate-600">Online</div>
      </div>
      <ProfileSettingsDialog />
    </div>
  )
}
