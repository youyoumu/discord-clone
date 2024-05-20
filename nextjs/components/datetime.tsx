'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function Datetime({ datetime }: { datetime: string }) {
  dayjs.extend(relativeTime)
  const d = dayjs(datetime)
  const now = dayjs()
  const diffDays = now.diff(d, 'days')
  let time
  if (diffDays < 1) {
    time = d.fromNow()
  } else {
    time = d.format('DD/MM/YYYY hh:mm A')
  }

  return (
    <time
      dateTime={datetime}
      className="text-xs text-slate-500 flex items-center"
    >
      {time}
    </time>
  )
}
