<template>
  <div class="about">
   <div class="container" @scroll='sLoad' ref='eleSrc'>
     <ul  class="con-items">
       <router-link :to="{name:'detail',params:{id:item.id}}"  tag='li' v-for='item in pagelist' :key='item.id'>
       <!-- <li v-for='item in pagelist' :key='item.id'> -->
         <img :src="item.img" alt="" >
         <p>{{item.name}}</p>
         <p>{{item.info}}</p>
         <p>{{item.price}}$</p>  
       </router-link>
     </ul>
     <div class="btnbox">
     <button class="btn" @click="loadMore">{{hasMore?"加载更多":'没有更多了'}}</button>
     </div>
   </div>
  </div>
</template>
<script>
import {getPage} from '../api'
export default {
  name:'about',
  data(){
    return{
      page:0,
      pagelist:[],
      hasMore:true
    }
  } ,
  created(){
    this.getList()
  },
  methods:{
    async getList(page){
       let {data:{hasMore,pagedata}}= await getPage(this.page);
       //要把原来的数据和重新请求的数据放在一起
        this.pagelist=this.pagelist.concat(pagedata);
        //  this.pagelist=[...this.pagelist,...pagedata] //合并数组
        // console.log(hasMore,pagedata)
          console.log(this.pagelist)
        //this.pagelist=pagedata;
         this.hasMore=hasMore
    },
    loadMore(){
      this.page++;
      //如果hasMore为false表示没有更多了，就不再执行请求
      if(!this.hasMore)return
      this.getList()
    },
   sLoad(){
      console.dir(this.$refs.eleSrc)
      // 函数节流/函数防抖
      // 我规定在一段时间内只触发一次
       clearTimeout(this.timer);
       this.timer=setTimeout(()=>{
        let {clientHeight,scrollTop,scrollHeight}=this.$refs.eleSrc
         if(scrollTop<clientHeight+scrollHeight+20){
        //加载更多
        this.loadMore()
         }
    },13)
    
    }
  }
}
</script>
<style lang="less" scoped>
.con-items{
  padding:0 20px;
  box-sizing: border-box;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.btnbox{
  text-align: center;
}
.btn{
  display: inline-block;
  outline: none;
 width: 200px;
 height: 60px;
 line-height: 60px;
 appearance: none;
}
</style>

