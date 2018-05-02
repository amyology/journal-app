import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Entries from '@/components/entries/Index'
import Entry from '@/components/entries/Show'
import NewEntry from '@/components/entries/New'
import UpdateEntry from '@/components/entries/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/entries',
      component: Entries
    },
    {
      path: '/entries/new',
      component: NewEntry
    },
    {
      name: 'entries',
      path: '/entries/:id',
      component: Entry
    },
    {
      name: 'updateEntries',
      path: '/entries/:id/update',
      component: UpdateEntry
    }
  ],
  mode: 'history'
})
