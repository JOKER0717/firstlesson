<template>
  <div class="home">
    <div class="container">
       <div v-if='showloading'>
         <Loading></Loading>
       </div>
      <template v-else>
    <Banner :swiperSlides='sliders'></Banner>
   <div>
     <ul> 
       <li v-for="item in homeList" :key='item.id'>
         <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>{{item.info}}</p>
          <p> {{item.price}}</p>
       </li>
     </ul>
   </div>
   </template>
   </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 3用标签的形式使用 -->
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Msg from '@/components/Msg.vue'
import Banner from '../components/Banner.vue'
import Loading  from '../components/Loading.vue'
import {getHomeAll} from '../api' //解构赋值出来getbanner的方法
import Axios from 'axios';
// import {} from '../index.js'
//两种写法是一样的
export default {
  name:'home',
  components:{
    Banner, //2.进行组件注册
    Loading
  },
  data(){
    return{
      sliders:[],
      homeList:[],
      showloading:true
    }
  },
  // created(){
  //   getBanner().then(res=>{
  //     console.log(res)
  //    let {data}=res;
  //    this.sliders=data
  //   })   
  // }
    created(){
      // this.getslider()                                                      
      // this.getlist()
      this.getAll()
  },
  methods:{
    async getAll(){
      // let d=await getHomeAll()
      let [{data:sliders},{data:homeList}]=await getHomeAll()
      this.sliders=sliders;
      this.homeList=homeList;
     console.log(sliders,homeList)
    //  console.log(data)
        this.showloading=false
    }   
    //轮播
    // async getslider(){
    //    let {data:sliders}= await getBanner();
    //     this.sliders=sliders;
    // },
    // //列表
    // async getlist(){
    //     let {data:homeList}=await getHomeList()
    //     this.homeList=homeList
    //     console.log(homeList)
    // },
  }
}
</script>
