"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "cn"

/* shadcn/ui Avatar, trimmed: a round clip for the inline SVG portraits. */
function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative block shrink-0 overflow-hidden rounded-full select-none", className)}
      {...props}
    />
  )
}

export { Avatar }
