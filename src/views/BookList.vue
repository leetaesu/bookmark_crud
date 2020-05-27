<template>
  <div class="bookList">
    <h2>북마크 리스트</h2>
    <div class="input-group" style="margin-bottom:10px;">
      <input type="text" v-model="addTxt" class="form-control" placeholder="북마크 추가">
      <span class="input-group-btn">
        <a href="#" @click="addTodo(addTxt)">추가</a>
      </span>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo">
        <p>{{todo.name}}</p>
        <p>{{todo.title}}</p>
        <div>
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a href="#">더보기</a>
          </button>
          <ul class="dropdown-menu">
            <a href="#" @click="deleteTodo(index)">삭제</a>
          </ul>
        </div>
        <div></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    return {
      todos: [
        {
          name:'청소',
          title:'이태수'
        },
        {
          name:'블로그 쓰기'
        },
        {
          name:'밥먹기'
        },
        {
          name:'안녕'
        }
      ]
    }
  },
  methods:{
    addTodo(txt){
			this.todos.push({title:txt})
		},
		deleteTodo(i){
			this.todos.splice(i,1);
		}
	}
}
</script>
<style lang="scss">
.bookList{
  ul{
    li{
      margin-bottom: 30px;
    }
  }
}
  
</style>