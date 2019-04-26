<template>
  <div class="home">
     <img :src="single.img" alt="">
     <p>{{single.name}}</p>
   <!-- {{deID}} -->
  </div>
</template>
<script>
import {getDetail} from '../api'
export default {
    name:'detail',
    data(){
        return{
            single:{}
        }
    },
    created(){
        this.Detail()
    },
    computed:{
        deID(){
            return this.$route.params.id
        }
    },
    methods:{
        //发送详情请求
       async Detail(){
            let {data}=await getDetail(this.deID)
            this.single=data;
            if(JSON.stringify(this.single)==="{}"){
               this.$router.push('/about') 
            }
            console.log(single)
        }
    }
}
</script>



