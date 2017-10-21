const state = {
  funds: 10000,
  stocks: []
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

const mutations = {
  'BUY_STOCKS' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCKS' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
}

const actions = {
  sellStocks ({commit}, order) {
    commit('SELL_STOCKS', order)
  }
}

export default { state, getters, mutations, actions }
