<template>
  <div class="login-container">
    <div class="login-form">
        <a-form
        :model="formState"
        >
            <a-form-item>
                <a-input></a-input>
            </a-form-item>
        </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,computed } from 'vue'
interface FormState {
    email: string;
}


</script>

<style lang="scss">
.login-container {
  position: relative;
  height: 100vh;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  .login-form {
    padding: 20px;
    background-color:rgba(255,255,255,0.8) ;
    border-radius:20px;
    z-index: 10;
  }
}
</style>
