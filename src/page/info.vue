<template>
  <header class="header">
    <!-- img test -->
    <span class="img_test">
      <img src="static/image/lyf.jpg" alt="刘亦菲">
    </span>

    <span class="logo" style="display: inline-block; width: 500px; height: 300px; background-image: url('../static/image/lyf.jpg')"></span>

    <!-- jquery test -->
    <div class="love">
      <p>这里是初始文字</p>
      <button @click="testJQ">看看 jquery 有没有工作</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    testJQ () {
      $('.love p').html('jquery 工作正常！')
    }
  }
}
</script>