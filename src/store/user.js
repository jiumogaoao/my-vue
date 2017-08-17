export default {
  state: {
    userName: 'cccc'
  },
  mutations: {
    showUserName: function (state) {
      alert(state.userName)
    }
  }
}
