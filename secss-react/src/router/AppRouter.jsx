// src/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/modules/auth/context/AuthContext';

// Importaciones Absolutas gracias a Vite
import { ProtectedRoute } from '@/router/ProtectedRoute';
import { LayoutPrincipal } from '@/components/layout/LayoutPrincipal';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import { DashboardPage } from '@/modules/dashboard/pages/DashboardPage';

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
          // Futuras rutas irían aquí:
          // { path: "usuarios", element: <UsuariosPage /> }
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