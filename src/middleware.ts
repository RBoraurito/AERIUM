import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let locales = ['en', 'es']
let defaultLocale = 'en'
 
// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries())
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  console.log(pathname)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
 
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|static|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}