import { defineNuxtModule } from '@nuxt/kit'
export default defineNuxtModule({
   meta: {
      name: 'extend-routes',
      configKey: 'extend-routes',
      compatibility: {
         // Semver version of supported nuxt versions
         nuxt: '^3.0.0'
      }
   },
   async setup (options: any, nuxt) {
      // const router = useRouter()
      // const config = useRuntimeConfig()
      //
      // console.log(config.public.appPreset)
      // const theme = 'designer-fashions-nuxt-theme';

      // router.getRoutes().forEach((route: any, i)=>{
      //    router.removeRoute(route.name)
      //    router.addRoute({
      //       path: route.path,
      //       component: () => import(`../../../${theme}/pages/${route.path.substring(1) || 'index'}.vue`)
      //    })
      // })
   }
})
