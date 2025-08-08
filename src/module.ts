import { defineNuxtModule, addImports, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'aa-escss-estest',
    configKey: 'ESTest',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addImports([
      { name: 'ESTest', from: resolver.resolve('./runtime/plugin')},
      { name: 'unSafeESTest', from: resolver.resolve('./runtime/plugin')},
      { name: 'createESTest', from: resolver.resolve('./runtime/plugin')},
    ])
  },
})
