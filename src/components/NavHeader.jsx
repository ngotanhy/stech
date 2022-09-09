import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavHeader() {
    return (
        <nav className="flex">
            <NavLink to='' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
            <NavLink to='/bookingticket' className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Dat ve</NavLink>
        </nav>
    )
}
