const App = {
    data() {
      return {
        counter: 0,
        title: 'Счетчик',
        message: 'world'
      }

      
    },

    methods: {
        mounted() {
            setInterval(() => {
              this.counter++
            }, 1000)
          },
          minus() {
            setInterval(() => {
              this.counter--
            }, 1000)
          },
          reverse() {
              this.message = this.message.split('').reverse('').join('')
          }
    }
    
   

  }
  
  Vue.createApp(App).mount('#app')