<template>
  <div class="sidebar">
      <ul>
          <li>
              <img src="../assets/icon_book.png" alt="">
              북마크바
          </li>
          <li>
              <img src="../assets/icon_book.png" alt="">
              기타 북마크
          </li>
          <li>
              <img src="../assets/icon_book.png" alt="">
              모바일 북마크
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
.sidebar{
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: rgb(0, 126, 199);
    text-align-last: left;
    padding: 100px 0 0 30px;
    ul{
        li{
            color: #fff;
            margin-bottom: 20px;
            font-size: 14px;
            cursor: pointer;
        }
    }
    
}
    
</style>