export function NavigationMenu() {
  return (
    <nav className="bg-[#8B1B2C] text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-8 text-sm">
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Wedding Blouses
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Designer Blouses
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Silk Blouses
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Embroidered Blouses
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Ready to Wear
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Custom Stitched
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

