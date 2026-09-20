import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer"
import MainLayout from "./components/MainLayout"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import { Suspense } from "react"

const fetchMainlayout = async () => {
	const res = await fetch('/data.json')
	const data = await res.json()
	return data
}
const mainlayoutPromise = fetchMainlayout()

function App() {
 

  return (
    <>
      
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <Nav />

      <Banner />

      <main>
        <div>
          <section className="container mx-auto my-8">    
              <Suspense fallback={<div>Loading...</div>}> 
                <MainLayout mainlayoutPromise={mainlayoutPromise}/>
              </Suspense>
          </section>
        </div>
      </main>

      <Footer />
      
    </>
  )
}

export default App
