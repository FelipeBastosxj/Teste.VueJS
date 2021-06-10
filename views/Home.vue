<template>
   <form @change="teste" action="" class="login">
    <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required class='margin'
            name='nome'
          ></v-text-field>
     <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="Senha"
            label="Senha"
            hint="Verificar senha?"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <button @click='local'>Logar</button>
  </form>
</template>

<script>
 

  export default {
    name: 'Home',
    data: () => ({
      show1: false,
      password: '',
       rules: {
          required: value => !!value || 'Preencha a senha',
          min: v => v.length >= 8 || 'Senha precisa de no minimo 8 digitos',
        },
      email: '',
      emailRules: [
        v => !!v || 'O E-mail e necessario',
        v => /.+@.+/.test(v) || 'E-mail incorreto',
      ],
    }),
    methods: {
      teste(event){
          localStorage.setItem(event.target.name,event.target.value);
      },
      
      local(e){
        e.preventDefault()
        if(this.password == '123456789' && this.email == 'felipesi0305@gmail.com'){
          window.location="http://localhost:8080/Dados"
        }
      }
    }
  }

</script>


<style scoped>
.login{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.theme--light.v-input{
  width: 60%;
}

.margin{
  margin-top: 100px;
}

button{
  border: 1px solid #888888;
  padding: 10px 40px;
  font-weight: bolder;
  margin-bottom: 90px;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
}

button:hover{
  background-color: #1976d2;
  color: white;
}

</style>