<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{getMMNAME}}</p>
    <p>{{getMPNAMES}}</p>
    <p>{{getMSNAMES}}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:"about",
  data(){
    return{

    }
  },
  mounted() {
    
  },
  computed: {
    //vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
    // ...mapGetters{(['getMMNAME','getMPNAMES','getMSNAMES'])}
    ...mapGetters({getMMNAME: 'mm/getMMNAME',getMSNAMES: 'ms/getMSNAMES',getMPNAMES: 'mp/getMPNAMES'})
    
  },
}
</script>
<style lang="scss">
  
</style>
