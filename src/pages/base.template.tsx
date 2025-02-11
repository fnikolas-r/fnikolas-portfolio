import { ToastContainer } from "react-toastify"
import Footer from "./home/Footer"
import Navbar from "./home/Navbar"

function BaseTemplate({children}:{children:React.ReactNode}) {
  return (
    <main className="max-w-6xl mx-auto text-white">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
    </main>
  )
}

export default BaseTemplate