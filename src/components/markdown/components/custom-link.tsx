import React, { HTMLAttributes } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type Props = LinkProps & HTMLAttributes<HTMLAnchorElement>

export const CustomLink = ({ children, ...props }: Props) => {
  const localHref = props.href?.replace(/https?:\/\//i, '') ?? ''
  const host = window.location.host

  const isLinkLocal = Boolean(localHref.startsWith(host) || localHref.startsWith('/'))

  return isLinkLocal ? (
    <Link to={localHref.replace(host, '')} {...props}>
      {children}
    </Link>
  ) : (
    <a {...props}>{children}</a>
  )
}
