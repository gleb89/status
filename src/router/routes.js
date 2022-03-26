
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/notifications', component: () => import('pages/notifications.vue') },
      { path: '/search', component: () => import('pages/search.vue') },
      { path: '/messages', component: () => import('pages/messages.vue') },
      { path: '/messages_id/:id', component: () => import('pages/messages_id.vue') },

      { path: '/bookmarks', component: () => import('pages/bookmarks.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/recommendation', component: () => import('pages/recommendation.vue') },
      { path: '/settings', component: () => import('pages/settings.vue') },

      { path: '/comments/:status_id', component: () => import('pages/comments.vue') },
      { path: 'status/comment/:comment_id', component: () => import('pages/comment_id.vue') },
      { path: '/status/:status_id', component: () => import('pages/status.vue') },

      { path: '/readable', component: () => import('pages/readable.vue') },
      { path: '/readers', component: () => import('pages/readers.vue') },
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
