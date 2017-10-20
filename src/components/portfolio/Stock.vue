<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                </h3>
                <small>( Price: {{ stock.price }} | {{ stock.quantity }} )</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" v-model="quantity" type="number" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
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