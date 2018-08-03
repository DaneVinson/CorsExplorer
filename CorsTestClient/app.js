var vm = new Vue({
    el: '#app',
    data: {
      isError: false,
      result: '',
      uri: ''
    },
    methods: {
      reset : function () {
        this.isError = false;
        this.result = '';
        this.uri = '';
      },
      sendGet : function () {
        this.result = '';        
        this.$http.get(this.uri).then(response => {
          this.isError = false;
          this.result = 'Success';
        }, response => {
          this.isError = true;
          let resultText = '';
          if (response.status) {
            resultText = response.status + ' ';
          }
          if (response.statusText) {
            resultText += response.statusText + ' ';
          }
          if (response.bodyText) {
            resultText += response.bodyText;
          }
          if (resultText) {
            this.result = resultText;
          }
          else {
            this.result = 'Error. See console for details.';
            console.log(response);
          }
        });
      }
    }
  });
