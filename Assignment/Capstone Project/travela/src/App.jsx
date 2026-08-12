import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Packages from "./Pages/Packages"
import Blog from "./Pages/Blog"
import Destination from "./Pages/Destination"
import TourCategory from "./Pages/TourCategory"
import TravelBooking from "./Pages/TravelBooking"
import OurGallery from "./Pages/OurGallery"
import TravelGuides from "./Pages/TravelGuides"
import Testimonial from "./Pages/Testimonial"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import AdminDash from "./Admin/AdminPages/AdminDash"
import AdminBlog from "./Admin/AdminPages/AdminBlog"
import AdminDestination from "./Admin/AdminPages/AdminDestination"
import AdminGallery from "./Admin/AdminPages/AdminGallery"
import AdminGuide from "./Admin/AdminPages/AdminGuide"
import AdminTour from "./Admin/AdminPages/AdminTour"
import AdminContact from "./Admin/AdminPages/AdminContact"
import AdminBooking from "./Admin/AdminPages/AdminBooking"
import AdminTestimonial from "./Admin/AdminPages/AdminTestimonial"
import AdminAbout from "./Admin/AdminPages/AdminAbout"
import AdminPackages from "./Admin/AdminPages/AdminPackages"
import AdminBlogAdd from "./Admin/AdminPages/AdminBlogAdd"
import AdminTourAdd from "./Admin/AdminPages/AdminTourAdd"
import { Slide, ToastContainer, toast } from 'react-toastify';
import AdminServicesAdd from "./Admin/AdminPages/AdminServicesAdd"
import AdminPackagesAdd from "./Admin/AdminPages/AdminPackagesAdd"
import AdminLogin from "./Admin/AdminPages/AdminLogin"
import AdminServices from "./Admin/AdminPages/AdminServices"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import EditRegister from "./Pages/EditRegister"
import AdminDestinationAdd from "./Admin/AdminPages/AdminDestinationAdd"
import AdminGalleryAdd from "./Admin/AdminPages/AdminGalleryAdd"
import AdminGuideAdd from "./Admin/AdminPages/AdminGuideAdd"

function App() {

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tour" element={<TourCategory />} />
        <Route path="/booking" element={<TravelBooking />} />
        <Route path="/gallery" element={<OurGallery />} />
        <Route path="/guides" element={<TravelGuides />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editregister" element={<EditRegister />} />
        <Route path="*" element={<NotFound />} />

        {/* Private Route */}
        <Route path="/dash" element={<AdminDash />} />
        <Route path="/adminabout" element={<AdminAbout />} />
        <Route path="/adminservice" element={<AdminServices />} />
        <Route path="/adminserviceadd" element={<AdminServicesAdd />} />
        <Route path="/adminpackages" element={<AdminPackages />} />
        <Route path="/adminpackagesadd" element={<AdminPackagesAdd />} />
        <Route path="/adminblog" element={<AdminBlog />} />
        <Route path="/adminblogadd" element={<AdminBlogAdd />} />
        <Route path="/admindestination" element={<AdminDestination />} />
        <Route path="/admindestinationadd" element={<AdminDestinationAdd />} />
        <Route path="/admintour" element={<AdminTour />} />
        <Route path="/admintouradd" element={<AdminTourAdd />} />
        <Route path="/adminbooking" element={<AdminBooking />} />
        <Route path="/admingallery" element={<AdminGallery />} />
        <Route path="/admingalleryadd" element={<AdminGalleryAdd />}  />
        <Route path="/adminguide" element={<AdminGuide />} />
        <Route path="/adminguideadd" element={<AdminGuideAdd />} />
        <Route path="/admintestimonial" element={<AdminTestimonial />} />
        <Route path="/admincontact" element={<AdminContact />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
