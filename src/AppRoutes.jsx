import React from 'react'
import { AddItem, Contact, Dashboard, GetItems, GetProductDetails, GetProducts, Home, HowItWorks, Login, Profile, Register, WhoWeAre } from './pages'
import UserLayout from './layouts/UserLayout'
import { Route, Routes } from 'react-router-dom'
import ProfileLayout from './layouts/ProfileLayout'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<Home />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact-us" element={<Contact />} />

                <Route path="/products" element={<GetProducts />} />
                <Route path="/product/:slug" element={<GetProductDetails />} />
            </Route>
            <Route element={<ProfileLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/items" element={<GetItems />} />
                <Route path="/item/add" element={<AddItem />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes