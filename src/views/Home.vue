<template>
  <div class="home">
    <Header />
    <div class="content">
      <Sidebar />
      <Content />
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Content from "../components/Content.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar,
    Content
  }
};
</script>
<style lang="scss">
.content{
  margin-left: 200px;
}
  
</style>
