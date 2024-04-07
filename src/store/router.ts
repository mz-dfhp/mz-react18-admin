import { create } from 'zustand'
import type { IRoute } from '@/router'
import { menuList as routerMenuList } from '@/router'

export type TRoute = Pick<IMenu, 'key' | 'label'>

export interface IMenu {
  key: string
  label: string
  icon?: JSX.Element
  children?: IMenu[]
}

interface State {
  menuList: IMenu[]
  routerList: TRoute[]
}

interface Action {
  setMenuList: () => void
}

let allRoutes: TRoute[] = []

function formatMenu(menuList: IRoute[]): IMenu[] {
  const list: IMenu[] = []
  menuList.forEach((item) => {
    list.push({
      key: item.path,
      label: item.meta.title,
      icon: item.meta.icon,
      children: item.children?.length ? formatMenu(item.children) : undefined,
    })
    allRoutes.push({
      key: item.path,
      label: item.meta.title,
    })
  })
  return list
}

const routerStore = create<State & Action>(set => ({
  routerList: [],
  menuList: [],
  setMenuList: () => {
    allRoutes = []
    set(() => ({ menuList: formatMenu(routerMenuList) }))
    set(() => ({ routerList: allRoutes }))
  },
}))

export { routerStore }
