import { fetchMe } from '@/lib/actions'
import { ProfileSettingsDialog } from './profile-settings-dialog'
import { Avatar } from './avatar'

export async function ChannelFooterProfile() {
  const me = await fetchMe()
  const name = me.display_name ? me.display_name : me.username
  return (
    <div className="flex gap-2 p-3 border-t border-border items-center dark:bg-teal-950/70 dark:border-none">
      <Avatar url={me.avatar_url} />
      <div className="grow max-w-36 overflow-hidden">
        <div>{name}</div>
        <div className="text-xs text-slate-600">Online</div>
      </div>
      <ProfileSettingsDialog me={me} />
    </div>
  )
}
