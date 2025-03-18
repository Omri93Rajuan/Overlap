import React, { lazy, Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';

const HomePage = lazy(() => import('./pages/Home/index'));
const PermissionsPage = lazy(() => import('./pages/Permissions/index'));
const LoginPage = lazy(() => import('./pages/Login/index'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    return user ? <>{children}</> : <Navigate to="/" replace />;
};

// קומפוננטת האפליקציה
export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<PermissionsPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Suspense>
            </Router>
        </AuthProvider>
    );
}
