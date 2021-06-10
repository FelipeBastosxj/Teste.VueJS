<template>
<div>
    <button @click="sair" class="sair">SAIR</button>
 <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Idade
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Felipe1',
            calories: 159,
          },
          {
            name: 'Felipe2',
            calories: 237,
          },
          {
            name: 'Felipe3',
            calories: 262,
          },
          {
            name: 'Felipe4',
            calories: 305,
          },
          {
            name: 'Felipe5',
            calories: 356,
          },
          {
            name: 'Felipe6',
            calories: 375,
          },
          {
            name: 'Felipe7',
            calories: 392,
          },
          {
            name: 'Felipe8',
            calories: 408,
          },
          {
            name: 'Felipe9',
            calories: 452,
          },
          {
            name: 'Felipe10',
            calories: 518,
          },
          {
            name: 'Felipe11',
            calories: 438,
          },
          {
            name: 'Felipe12',
            calories: 265,
          },
        ],
      }
    },
    methods: {
        iniciar(){
            if(localStorage.getItem('Senha') == '123456789' && localStorage.getItem('nome') == 'felipesi0305@gmail.com'){
                
            }else{
                localStorage.clear()
                window.location="http://localhost:8080/"
            }
        },
        sair(){
            localStorage.clear()
            window.location="http://localhost:8080/"
        }
    },
    created(){
      this.iniciar()
    }
  }
</script>

<style scoped>
.sair{
    display: flex;
    width: 100%;
    justify-content: center;
}

button{
  border: 1px solid #888888;
  padding: 10px 40px;
  font-weight: bolder;
  transition: 0.5s ease-in-out;
}

button:hover{
  background-color: #1976d2;
  color: white;
}
</style>