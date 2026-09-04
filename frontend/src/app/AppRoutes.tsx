import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainLayout from "@/layouts/GuestLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import NotFoundLayout from "@/layouts/NotFoundLayout";


import HomePage from "@/pages/HomePage";
import ClientsPage from "@/pages/ClientsPage";
import PlansPage from "@/pages/PlansPage";
import ClientEditPage from "@/pages/ClientEditPage";

export const AppRoutes = () => {

  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route path="clients" element={<ClientsPage />} />
        <Route path="clients/:id/edit" element={<ClientEditPage />} />
        <Route path="plans" element={<PlansPage />} />
      </Route>

      <Route path="*" element={<NotFoundLayout children={<h2>{t("messages.notFound")}</h2>} />} />
    </Routes>
  );
};