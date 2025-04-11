import { http, createConfig } from '@wagmi/vue'
import { anvil } from '@wagmi/vue/chains'
// import { injected, metaMask } from '@wagmi/vue/connectors'

export const config = createConfig({
  chains: [anvil],
  ssr: true,
  transports: {
    [anvil.id]: http()
  },
  // @dev do not need to specify connectors auto-detect if needed
  // connectors: [injected(), metaMask()],
})