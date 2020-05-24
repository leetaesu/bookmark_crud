<template>
  <div class="header">
      <h1>북마크</h1>
      <div class="search">
          <span class="icon"><img src="../assets/search.png" alt=""></span>
          <input type="text" placeholder="북마크 검색">
      </div>
      <div class="h_menu">
          <p>메뉴</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header{
    position: relative;
    background: rgb(0, 126, 199);
    height: 70px;
    padding-top: 15px;
    z-index: 100;
    h1{
        position: absolute;
        left: 30px;
        top: 20px;
        font-size: 24px;
        font-weight: normal;
        color:white;
    }
    .search{
        position: relative;
        margin: 0 auto;
        width: 600px;
        height: 40px;
        background:rgb(0, 104, 165);
        text-align-last: left;
        .icon{
            position: absolute;
            left: 5px;
            top: 5px;
            img{
                width: 30px;
                height: 30px;
            }
        }
        input{
            width: 100%;
            font-size: 16px;
            padding: 8px 0 0 50px;
            background:none;
            border: none;
            color: white;
            &::placeholder{
                color: white;
            }
        }
    }
    .h_menu{
        position: absolute;
        right: 30px;
        top: 20px;
        cursor: pointer;
        p{
            position: relative;
            width: 30px;
            height: 3px;
            background: white;
            text-indent: -9999px;
            display: block;
            &:after{
                position: absolute;
                top: 10px;
                width: 30px;
                height: 3px;
                background: white;
                display: block;
                content:"";
            }
            &:before{
                position: absolute;
                top: 20px;
                width: 30px;
                height: 3px;
                background: white;
                display: block;
                content:"";
            }
        }
    }
}
</style>