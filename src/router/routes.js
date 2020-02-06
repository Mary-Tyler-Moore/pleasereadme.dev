const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      {
        path: "/pet-partners",
        component: () => import("pages/PetPartners.vmd")
      },
      {
        path: "/venues-production",
        component: () => import("pages/VenuesProduction.vmd")
      },
      {
        path: "/big-step",
        component: () => import("pages/BigStep.vmd")
      },
      {
        path: "/omo-cafe",
        component: () => import("pages/OmoCafe.vmd")
      },
      {
        path: "/lovejs",
        component: () => import("pages/LoveJs.vmd")
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
