<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './stock.vue'
    export default {
      data () {
        return {
          stocks: [
            { id: 1, name: 'BMW', price: 150 },
            { id: 1, name: 'Google', price: 250 },
            { id: 1, name: 'Apple', price: 230 },
            { id: 1, name: 'Twitter', price: 90 }
          ]
        }
      },
      components: {
        appStock: Stock
      }
    }
</script>