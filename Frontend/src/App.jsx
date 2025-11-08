import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/SupportPages/NotFound';


{/* <Navbar/> */}
<Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/event" element={<EventPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/teams" element={<TeamsPage />} />
    <Route path="/teamadd" element={<TeamAddPage />} />
    <Route path="*" element={<NotFound />} />
</Routes>
{/* <Footer/> */}
