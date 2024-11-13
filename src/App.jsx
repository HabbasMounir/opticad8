import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Page from './app/dashboard/page'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Page/> */}
<SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
  </main>
    </SidebarProvider>
    </>
  )
}

export default App
