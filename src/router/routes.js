
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/notifications', component: () => import('pages/notifications.vue') },
      { path: '/search', component: () => import('pages/search.vue') },
      { path: '/messages', component: () => import('pages/messages.vue') },
      { path: '/messages/:id', component: () => import('pages/messages_id.vue') },
      { path: '/bookmarks', component: () => import('pages/bookmarks.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/recommendation', component: () => import('pages/recommendation.vue') },
      { path: '/settings', component: () => import('pages/settings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
