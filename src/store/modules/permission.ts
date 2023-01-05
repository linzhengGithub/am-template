import { defineStore } from 'pinia'
import { Menu } from '@/router/routeTypes'
import { store } from '@/store/index'

interface PermissionState {
  // 后台路由
  backMenuList: Menu[]
  // 菜单更新时间
  lastBuildMenuTime: number
  // 动态添加路由
  isDynamicAddedRoute: boolean
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    backMenuList: [],
    lastBuildMenuTime: 0,
    isDynamicAddedRoute: false,
  }),
  getters: {
    getBackMenuList(): Menu[] {
      return this.backMenuList
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute
    },
  },
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list
      list?.length > 0 && this.setLastBuildMenuTime()
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime()
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added
    },
    buildRoutesAction() {
      const routes = []
      return routes
    },
  },
})

export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
