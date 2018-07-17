<template>
  <div class="Pdf">
    <div>
      <h1><img src="@/assets/logo.png" class="logo">vue-pdf Test</h1>
      <select v-model="selected" class="pdf-selector">
        <option v-for="(option, index) in options" :value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
    </div>
    <pdf :src="selected"
         :page="currentPage"
         @num-pages="pageCount = $event"
         @page-loaded="currentPage = $event"
         class="pdf"></pdf>
    <hr>
    <div class="page">
      <a href="javascript:void(0)" class="previous-page"
         @click="currentPage > 1 ? currentPage--: currentPage = 1">前ページ</a>
      <span class="page">{{currentPage}} / {{pageCount}}</span>
      <a href="javascript:void(0)" class="next-page"
         @click="currentPage < pageCount ? currentPage++ : currentPage = pageCount">次ページ</a>
    </div>
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
      return {
        selected: './static/_watsonsummit2017_session_list.pdf',
        options: [
          {text: 'Session list', value: './static/_watsonsummit2017_session_list.pdf'},
          {text: '【A1-1】コグニティブ・バンキング', value: './static/A1-1_【Keynote】コグニティブ・バンキング - 次世代金融ビジネスモデル変革.pdf'}
        ],
        currentPage: 1,
        pageCount: 0
      };
    },
    mounted () {
    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .pdf-selector {
    float: right;
    font-size: 16px;
    margin-top: -40px;
    margin-bottom: 0;
    height: 35px;
    width: 600px;
  }

  .page {
    text-align: center;
    margin-top: 5px;
  }

  .previous-page {
    float: left;
    margin-left: 20px;
  }

  .next-page {
    float: right;
    margin-right: 20px;
  }

  h1, h2 {
    font-weight: normal;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 10px 0;
  }

  li {
    /* display: inline-block; */
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
