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
    // ...mapGetters{(['getMMNAME','getMPNAMES','getMSNAMES'])}
    ...mapGetters({getMMNAME: 'mm/getMMNAME',getMSNAMES: 'ms/getMSNAMES',getMPNAMES: 'mp/getMPNAMES'})
    
  },
}
</script>
<style lang="scss">
  
</style>
