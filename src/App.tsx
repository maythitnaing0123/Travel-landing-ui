// set up ClientQuery
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';





import './App.css'
import Header from './components/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main'
import Navigation from './components/Navigation/Navigation'
import ExploreMore from './components/ExploreMore/ExploreMore'
import New from './components/News/New'
import Services from './components/Services/Services'
import Step from './components/Step/Step'
import Page from "./Page"
import FrequentTraveler from './components/FrequentTraveler'
import Testimonials from './components/Testimonrials/Testimonials'
import Footer from './components/Footer'
import MobileMenu from './components/Navigation/MobileMenu';
import MenuContextProvider from './content/MobileMenuContent';
import { initGoogleAnalytics , logView } from './components/analytics';
import { useEffect } from 'react';

// maythitnaing33@gmail.com
// supabase

const queryClient = new QueryClient();


function App() {

  useEffect(() => {

    initGoogleAnalytics();
    logView();

  },[])


  return (
    <QueryClientProvider client={queryClient}>
     
     <MenuContextProvider>
     
      <Page>
        <Header>
          <Navigation />
          <Hero/>

          {/* mobile menu. */}
          <MobileMenu/>

        </Header>
        <Main>
          <Step/>
          <Services/>
          <New/>
          <ExploreMore/>
          <FrequentTraveler/>
          <Testimonials/>
          <Footer/>

          
          </Main>
      </Page>
      </MenuContextProvider>
    </QueryClientProvider >
  )
}

export default App
