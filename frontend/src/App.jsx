import React from "react";
import { Routes, Route } from "react-router-dom";

// Auth
import AuthScreen from "./screens/AuthScreen";

// Layouts
import AdminLayout from "./layout/AdminLayout";
import TechnicalSupportLayout from "./layout/TechnicalSupportLayout";
import OperationTeamLayout from "./layout/OperationTeamLayout";
import UserLayout from "./layout/UserLayout";

// Admin Screens & Components
import AdminDashboard from "./screens/AdminScreen/AdminDashbord";
import AdminSettings from "./components/AdminSettings";
import UserLogHistory from "./components/UserLogHistory";
import DatabaseTable from "./components/AdminDataBase";

// Technical Support
import TechnicalSupportDashboard from "./screens/AdminScreen/TechnicalSupport";
import Performance from "./components/Performance";
import AllUserTicket from "./components/AllUserTicket";

// Operation Team
import OperationTeamDashboard from "./screens/OperationTeam/OperationTeamDashbord";

// User Screens
import UserDashboard from "./screens/UserScreen/UserDashbord";
import NewTicket from "./screens/UserScreen/NewTicket";

// Shared
import Profile from "./components/Profile";
import UserDashbord from "./screens/UserScreen/UserDashbord";

const App = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<AuthScreen />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route index element={<AdminDashboard />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="logs" element={<UserLogHistory />} />
        <Route path="database" element={<DatabaseTable />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Technical Support Routes */}
      <Route path="/technicalsupport" element={<TechnicalSupportLayout />}>
        <Route index element={<UserDashboard />} />

        <Route path="dashboard" element={<TechnicalSupportDashboard />} />
        <Route path="ticket" element={<AllUserTicket />} />
        <Route path="performance" element={<Performance />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Operation Team Routes */}
      <Route path="/operation" element={<OperationTeamLayout />}>
        <Route index element={<OperationTeamDashboard />} />

        <Route path="dashboard" element={<OperationTeamDashboard />} />
        <Route path="ticket" element={<AllUserTicket />} />
        <Route path="performance" element={<Performance />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserDashbord />} />

        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="ticket" element={<AllUserTicket />} />
        <Route path="new-ticket" element={<NewTicket />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
