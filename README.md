# Vuexer

Add a new properity `$vuexer` in your components.

It is useful when your vue component uses vuex and you are going to distribute them as npm package and then use them in different projects.

Only for Vue 1.0, because "Vue 2.0 + Vuex 2.0" has solved this problem.

## Quick Start.

Use vuexer firstly.

```javascript
import Vue from 'vue'
import Vuexer from 'vuexer'

import store from './vuex/store'
import actions from './vuex/actions'
import getters from './vuex/getters'

// Initialization.
Vue.use(Vuexer, {
  store,
  actions,
  getters
})
```

When vuexer is initialized, a new properity called `$vuexer` will be added to your components.

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

## License
MIT.
