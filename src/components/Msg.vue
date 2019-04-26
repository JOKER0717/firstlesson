
<template>
  <div>
     <h1>{{msg}}</h1>
     <span>我来自传值{{abc}}</span>
   </div>
</template>
// msg.vue  是一个子组件
<script>
export default{
    
    props:{
        abc:{
            default:()=>([1,2,3])
        }
    },
    // props:['abc'],
    data (){
        return{
            msg:'This is an index page'
        }
    }
}
</script>
