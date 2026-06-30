// src/modules/dashboard/pages/DashboardPage.jsx
import { useAuth } from '@/modules/auth/context/AuthContext';
import { roleCardsData } from '@/components/layout/menuOptions';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <>
      
    </>
  );
};