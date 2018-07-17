<template>
  <div class="Pdf">
    <h1>vue-pdf Test</h1>
    <pdf src="./static/_watsonsummit2017_session_list.pdf"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf';

  export default {
    name: 'PdfViewer',
    components: {
      pdf
    },
    data () {
      return {};
    },
    mounted () {
    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /* display: inline-block; */
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
