import { fetchMe } from '@/lib/actions'
import { ProfileSettingsDialog } from './profile-settings-dialog'
import { Avatar } from './avatar'

export async function ChannelFooterProfile() {
  const me = await fetchMe()
  const name = me.data.display_name ? me.data.display_name : me.data.username
  return (
    <div className="flex gap-2 p-3 border-t border-border items-center">
      <Avatar url={me.data.avatar_url} />
      <div className="grow">
        <div>{name}</div>
        <div className="text-xs text-slate-600">Online</div>
      </div>
      <ProfileSettingsDialog me={me} />
    </div>
  )
}
