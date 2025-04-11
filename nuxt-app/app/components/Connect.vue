<script setup lang="ts">
import { useConnect, useChainId } from "@wagmi/vue";

const chainId = useChainId();
const { connectors, connect } = useConnect();
</script>

<template>
  <ClientOnly>
    <UButton
      v-for="connector in connectors"
      :key="connector.id"
      @click="connect({ connector, chainId })"
    >
      {{ connector.name }}
    </UButton>
  </ClientOnly>
</template>
