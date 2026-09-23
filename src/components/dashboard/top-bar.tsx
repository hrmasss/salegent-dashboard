import { LogoMark, Wordmark } from "@/components/brand/logo"
import { BellIcon, GearIcon, SearchIcon } from "@/components/icons"
import { PersonAvatar } from "@/components/people/person-avatar"
import { navigation } from "@/config/site"
import { currentUser } from "@/data/dashboard"
import { cn } from "@/lib/utils"

/*
 * Brand, navigation and account icons. From xl up the nav pill sits inline
 * between brand and icons; below that it drops to its own row and scrolls
 * sideways inside itself when the screen is narrower than the pill.
 */
export function TopBar() {
  return (
    <header className="relative flex flex-wrap items-start justify-between gap-y-5">
      <a href="#" className="flex items-start gap-[10px] sm:gap-[12px] 2xl:mt-[9px] 2xl:ml-[2px]" aria-label="Salegent home">
        <LogoMark className="size-[36px] sm:size-[42px]" />
        <Wordmark className="mt-[2px] text-[26px] leading-[34px] sm:mt-[4px] sm:text-[30px]" />
      </a>

      <div className="flex h-[38px] items-center gap-5 sm:gap-[34px] 2xl:mt-[7px] 2xl:mr-[8px]">
        <SearchIcon className="text-ink" size={20} strokeWidth={1.9} />
        <BellIcon className="text-ink" width={20} height={22} strokeWidth={1.9} />
        <GearIcon className="text-ink sm:-ml-px" size={20} strokeWidth={1.8} />
        <PersonAvatar id={currentUser} ringed className="size-[38px] shadow-soft" />
      </div>

      <div className="-mx-4 -my-2 w-[calc(100%+2rem)] overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:m-0 md:flex md:w-full md:justify-center md:overflow-visible md:p-0 xl:absolute xl:w-auto xl:top-0 xl:left-1/2 xl:-translate-x-1/2 2xl:left-[342px] 2xl:translate-x-0">
        <nav className="theme-transition relative h-[50px] shrink-0 w-[666px] rounded-full border border-[var(--navBorder)] bg-[var(--nav)] shadow-nav">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ left: item.x }}
              aria-current={"active" in item && item.active ? "page" : undefined}
              className={cn(
                "absolute flex items-center text-[14px] whitespace-nowrap",
                "active" in item && item.active
                  ? "brand-gradient top-[7px] h-[36px] w-[104px] justify-center rounded-full font-medium text-white shadow-pill"
                  : "top-0 h-[50px] text-sub"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
