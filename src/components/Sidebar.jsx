
const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
    <div className="p-4">
      <h2 className="text-white text-lg font-semibold">Sidebar</h2>
    </div>
    <nav className="mt-6">
      <a href="#" className="block py-2.5 px-4 text-sm text-white hover:bg-gray-700">
        Home
      </a>
      <a href="#" className="block py-2.5 px-4 text-sm text-white hover:bg-gray-700">
        About
      </a>
      <a href="#" className="block py-2.5 px-4 text-sm text-white hover:bg-gray-700">
        Services
      </a>
      <a href="#" className="block py-2.5 px-4 text-sm text-white hover:bg-gray-700">
        Contact
      </a>
    </nav>
  </div>
  )
}

export default Sidebar