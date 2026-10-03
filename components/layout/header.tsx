import { Text } from "../ui/text"
import Logo from "./logo"

export default function Header() {
  return (
    <header className="fixed top-0 mx-auto h-20 max-w-lg">
      {/* Logo section */}
      <div className="flex items-center justify-between">
        <Logo className="lg:size-10" />
        <Text variant="p" size={"lg"} weight="semibold" className="font-logo">
          Kear Labs
        </Text>
      </div>
    </header>
  )
}
