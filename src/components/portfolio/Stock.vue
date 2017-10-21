<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                </h3>
                <small>( Price: {{ stock.price | currency }} | {{ stock.quantity }} )</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control"
                           :class="{danger: insufficientQuantity}"
                           v-model="quantity"
                           type="number"
                           placeholder="Quantity"
                    >
                </div>
                <div class="pull-right">
                    <button class="btn btn-info"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <=0"
                    >
                        {{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid crimson;
    }
</style>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      },
      insufficientQuantity () {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions([
        'sellStocks'
      ]),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.sellStocks(order)
        this.quantity = 0
      }
    }
  }
</script>