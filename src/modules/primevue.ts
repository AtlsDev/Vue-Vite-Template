import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Ripple from 'primevue/ripple'

import type { App } from 'vue'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }: { app: App<Element> }) => {
  app.use(PrimeVue, { ripple: true })
  app.use(ConfirmationService)
  app.use(DialogService)
  app.use(ToastService)
  app.directive('tooltip', Tooltip)
  app.directive('ripple', Ripple)
}
