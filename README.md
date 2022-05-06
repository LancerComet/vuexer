# Vuexer

[![Vuexer](https://github.com/LancerComet/vuexer/workflows/Test/badge.svg)](https://github.com/LancerComet/vuexer/actions)
[![npm version](https://badge.fury.io/js/vuexer.svg)](https://badge.fury.io/js/vuexer)

## What's wrong with the "Vue 1 + Vuex 1"?

If you want to distribute some vue 1 components to npm or somewhere else, and these components use Vuex 1 as its state manager, Vue 1 + Vuex 1 just can't do this.

So this package is designed to solve this problem. It adds a new properity `$vuexer` in all vue components, so that you can use `$vuexer` as a bridge to communicate with each other.

Only for Vue 1.0, because "Vue 2.0 + Vuex 2.0" has solved this problem.

## Quick Start

```javascript
import Vue from 'vue'
import Vuexer from 'vuexer'

import store from './vuex/store'
import actions from './vuex/actions'
import getters from './vuex/getters'

Vue.use(Vuexer, {
  store,
  actions,
  getters
})
```

After vuexer has been initialized, a new property called `$vuexer` will be added to your components.

Let's see:

```html
<script>
  export default {
    methods: {
      setCurrency (num) {
        this.$vuexer.setCurrency(num)  // "setCurrency" is the method that you defined in your vuex actions.
      }
    }
  }
</script>

<template>
  <!-- "getCurrency" is the getter that you have defined in your vuex getters. -->
  <p>currency: {{$vuexer.getCurrency}}</p>
  <div>
    <button @click="setCurrency(10)">I need $10!</button>
    <!-- Or you can also: -->
    <button @click="$vuexer.setCurrency(100)">$100 is required!</button>
  </div>
</template>
```

Now you want to have this code in your component, and you are going to distribute it to somewhere.

Once a project uses this component, just make sure Vuexer is installed in this project and everything will be fine.

## License

Apache-2.0
