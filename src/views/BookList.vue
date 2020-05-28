<template>
  <div class="bookView">
    <div class="addBookMark">
      <p><span>북마크명 : </span><input type="text" v-model="BookName" placeholder="삼치쿤 사이트"></p>
      <p><span>주소 : </span><input type="text" v-model="BookSite" placeholder="http://www.naver.com"></p>
      <p><button v-on:click="addBookMark(BookName,BookSite)">북마크 추가</button></p>
    </div>
    <div class="addBookMark">
      <p><span>수정명 : </span><input type="text" v-model="reName" placeholder="삼치쿤 사이트"></p>
      <p><span>수정주소 : </span><input type="text" v-model="reSite" placeholder="http://www.naver.com"></p>
    </div>
    <ul>
      <li v-for="(BM,index) in BookMark" v-bind:key="BM">
        <p>
          [{{index+1}}]
          <strong v-if="!isShow">
            <span>{{BM.name}}</span>
            <button v-on:click="replaceBookMark(index,reName,reSite)">수정</button>
          </strong>
          <span v-else><input type="text" value="수정할내용"></span>
          : 
          <a v-bind:href="BM.adress" target="_blank">{{BM.adress}}</a> 
          <!-- <button v-on:click="replaceBookMark(index,reName,reSite)">수정</button> -->
          <button v-on:click="deleteBookMark(index)">삭제</button>
          </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    return {
      BookMark: [
        {
          name : "삼치쿤 공식 홈페이지",
          adress : "http://www.naver.com" 
        }
      ],
      isShow : false
    }
  },
  methods:{
    addBookMark(name,site){
      if(name === undefined || site === undefined){
        alert("데이터없음! 추가불가");
        return;
      }
      this.BookMark.push(
        {
          name : name,
          adress : site
        }
      );      
    },
    deleteBookMark(idx){
      this.BookMark.splice(idx,1);
    },
    replaceBookMark(idx,name,site){
      console.log(idx,name,site);
      if(name === undefined || site === undefined){
        alert("데이터없음! 수정불가");
        return;
      }
      this.BookMark[idx].name = name,
      this.BookMark[idx].adress=site
    }
	}
}
</script>
<style lang="scss">
  .bookView{
    margin: 0 0 0 20px;
    .addBookMark{
      display: inline-block;
      margin-right: 30px;
      position: relative;
      width: 500px;
      padding: 15px 10px 10px 20px;
      box-shadow: 0 2px 5px 5px rgb(216, 216, 216);
      border-radius: 10px;
      p{
        span{
          display: inline-block;
          font-size: 24px;
          color: rgb(0, 167, 245);
          margin:5px 10px 0 0;
          +input{
            font-size: 24px;
            display: inline-block;
            color: black;
            &::placeholder {
              color: rgb(173, 173, 173);
              font-size: 24px;
            }
          }
        }
        button{
          position: absolute;
          right: 20px;
          top: 15px;
          background: rgb(0, 7, 98);
          color: white;
          padding: 10px;
          min-width:100px;
          text-align: center;
          border-radius: 10px;
        }
      }
    }
    ul{
      margin: 50px 0 0 10px;
      li{
        margin-bottom: 20px;
        p{
          font-size: 24px;
          a{
            color: rgb(60, 0, 255);
            text-decoration: underline;
            &:hover{
              color: rgb(255, 0, 0);
              transition: all 0.5s 0s ease-in-out;
            }
          }
          button{
            background: white;
            color: #444444;
            box-shadow: 0 2px 5px 5px rgb(218, 218, 218);
            padding: 10px;
            min-width:50px;
            text-align: center;
            border-radius: 5px;
            margin-left: 20px;
            &:last-child{
              background: rgb(255, 0, 0);
              color: #fff;
              box-shadow: 0 2px 2px 2px rgb(189, 0, 0);
            }
          }
        }
      }
    }
  }
  
</style>