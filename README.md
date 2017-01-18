# Vuexer

> Transport data between vuex and components in whole project.

## Quick Start.

Setup.

```javascript
import Vue from 'vue'
import Vuexer from 'vuexer'

import store from './vuex/store'
import actions from './vuex/store'
import getters from './vuex/store'

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
