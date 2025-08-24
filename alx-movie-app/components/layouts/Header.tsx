import Link from "next/link"
import Button from "../commons/Button"

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">Cine<span className="text-[#E2D609]">Seek</span></h2>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Contact</Link>
        </nav>
        <div className="flex md:hidden">
          <Button title="Sign in" />
        </div>
        <div className="hidden md:flex">
          <Button title="Sign in" />
        </div>
      </div>
    </header>

  )
}

export default Header
