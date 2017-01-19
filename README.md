# Vuexer

Transport data between vuex and components in whole project.

It is useful when your components are used in different projects.

## Quick Start.

Setup.

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

Usage.

```html
<template>
  <!-- "getCurrency" is the getter that you defined in your vuex getters. -->
  <p>currency: {{$vuexer.getCurrency}}</p>
  <div>
    <button @click="setCurrency(10)">Set my money to 10</button>
  </div>
</template>

<script>
  export default {
    methods: {
      setCurrency (num) {
        this.$vuexer.setCurrency(num)  // "setCurrency" is the method that you defined in your vuex actions.
      }
    }
  }
</script>
```

## License
MIT.
