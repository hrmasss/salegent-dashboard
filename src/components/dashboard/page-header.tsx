import { BoltIcon, GearIcon, ShareIcon } from "@/components/icons"
import { PersonAvatar } from "@/components/people/person-avatar"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import { site } from "@/config/site"
import { collaborators } from "@/data/dashboard"

/* Title and tagline, with the page toolbar beside them from lg up and below them before that. */
export function PageHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div className="2xl:mt-[5px] 2xl:ml-[2px]">
        <h1 className="text-[26px] leading-[32px] font-semibold tracking-[-0.015em] sm:text-[32px] sm:leading-[38px]">{site.title}</h1>
        <p className="mt-[7px] text-[15px] leading-[20px] text-sub sm:text-[16px]">{site.tagline}</p>
      </div>

      <div className="flex items-center 2xl:mr-[3px]">
        <ThemeToggle />
        <Button variant="tool" className="ml-[5px]" aria-label="Settings">
          <GearIcon />
        </Button>
        <Button variant="tool" className="ml-[4px]" aria-label="Automations">
          <BoltIcon />
        </Button>

        <div className="relative ml-[13px] h-[40px] w-[172px] shrink-0">
          <div className="theme-transition absolute inset-y-0 left-0 w-[170px] rounded-full bg-tool shadow-soft">
            {collaborators.map((id, i) => (
              <PersonAvatar key={id} id={id} ringed className="absolute top-[7px] size-[26px]" style={{ left: 10 + i * 22 }} />
            ))}
          </div>
          <Button variant="brand" size="default" className="absolute top-0 left-[84px] w-[88px] px-0">
            <ShareIcon size={15} strokeWidth={2.2} />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
