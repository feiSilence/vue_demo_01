<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
    this.getData()
    console.log(this.$route)
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
        console.log(r.data)
      })
    }
  }
}
</script>