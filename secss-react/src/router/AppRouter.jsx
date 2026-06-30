// src/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/modules/auth/context/AuthContext';

// Importaciones Absolutas gracias a Vite
import { ProtectedRoute } from '@/router/ProtectedRoute';
import { LayoutPrincipal } from '@/components/layout/LayoutPrincipal';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import { DashboardPage } from '@/modules/dashboard/pages/DashboardPage';
import { LogbookPage } from '@/modules/input_output/pages/LogbookPage.jsx'; // 🌟 Importación corregida a .jsx
import { RegisterLogbookPage } from '@/modules/input_output/pages/RegisterLogbookPage.jsx';
import { NewsPage } from '@/modules/core/pages/NewsPage.jsx';
import { PickPlatePage } from '@/modules/core/pages/PickPlatePage.jsx';
import { ApprenConsullPage } from '@/modules/user/pages/ApprenConsullPage.jsx';

/**
 * Matriz de Enrutamiento basada en Objetos (API v6)
 * Estructura jerárquica para proteger las vistas requeridas.
 */
const router = createBrowserRouter([
  { 
    path: "/login", 
    element: <LoginPage /> 
  },
  {
    // Nodo Raíz Protegido: Todo lo que esté dentro de "children" requiere autenticación
    element: <ProtectedRoute />, 
    children: [
      {
        path: "/",
        element: <LayoutPrincipal />, // Define la interfaz (Sidebar + Outlet)
        children: [
          { index: true, element: <DashboardPage /> },
          // 🌟 NUEVA RUTA REGISTRADA AQUÍ
          // Cuando la URL sea /control-accesos, renderizará LogbookPage dentro del Layout
          { path: "NewsPage", element: <NewsPage /> },
          { path: "PickPlatePage", element: <PickPlatePage /> },
          { path: "ApprenConsullPage", element: <ApprenConsullPage /> },
          { path: "LogbookPage", element: <LogbookPage /> },
          { path: "RegisterLogbookPage", element: <RegisterLogbookPage /> }
        ]
      }
    ]
  }
]);

export const AppRouter = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);