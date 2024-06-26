'use client'

import { useSidebar } from '@/store/use-sidebar'
import { User } from '@prisma/client'

import UserItem, { UserItemSkeleton } from './user-item'

interface RecommendedProps {
  data: User[]
}

// 推荐列表
const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state)
  const showLabel = !collapsed && data.length > 0
  return (
    <div>
      {showLabel && (
        <div className="mb-4 pl-6">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  )
}

// 推荐列表骨架屏
export const RecommendedSkeleton = () => {
  return (
    <ul>
      {[...Array(3)].map((_, index) => (
        <UserItemSkeleton key={index} />
      ))}
    </ul>
  )
}

export default Recommended
