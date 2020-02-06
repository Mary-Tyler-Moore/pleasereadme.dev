const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/pet-partners",
        component: () => import("pages/PetPartners.vue")
      },
      {
        path: "/venues-production",
        component: () => import("pages/VenuesProduction.vue")
      },
      {
        path: "/big-step",
        component: () => import("pages/BigStep.vue")
      },
      {
        path: "/omo-cafe",
        component: () => import("pages/OmoCafe.vue")
      },
      {
        path: "/lovejs",
        component: () => import("pages/LoveJs.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
