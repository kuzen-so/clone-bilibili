<template>
  <div class="login-container">
    <div class="login-form">
      <a-form :model="formState" @finish="onFinish">
        <!-- 用户名框 -->

        <a-form-item name="email" :rules="[{ required: true, message: '请输入邮箱' }]">
          <a-input placeholder="邮箱" v-model:value="formState.email">
            <!-- 添加一个icon插槽 -->
            <template #prefix>
              <UserOutlined></UserOutlined>
            </template>
          </a-input>
        </a-form-item>

        <!-- 密码框 -->

        <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
          <a-input-password placeholder="密码" v-model:value="formState.password">
            <!-- 添加一个icon插槽 -->
            <template #prefix>
              <LockOutlined></LockOutlined>
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 验证码框 -->
        <a-form-item name="captcha" :rules="[{ required: true, message: '请输入验证码' }]">
          <a-input placeholder="验证码" v-model:value="formState.captcha" style="width: 140px">
          </a-input>
          <img height="30" :src="captcha" alt="" @click="updateCaptcha" />
        </a-form-item>

        <!-- 登陆按钮 -->
        <a-form-item>
          <a-button :disabled="disabled" block type="primary" html-type="submit">登陆</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref, reactive, computed } from 'vue'
import { userLogin } from '@/apis/user'
import SparkMd5 from 'spark-md5'

interface FormState {
  email: string
  password: string
  captcha: string
}

// 表格初始值
const formState = reactive<FormState>({
  email: '316783812@qq.com',
  password: '316783812',
  captcha:""
})

// 不输入值不允许点击登录
const disabled = computed(() => {
  return !(formState.email && formState.password && formState.captcha)
})

//设定验证码
// 为什么写死了才有验证码
const captcha = ref('/api/captcha?')

// 点击图片验证码发生改变
function updateCaptcha() {
  captcha.value = `/api/captcha?${Math.random()}`
}

// 点击登录按钮事件
async function onFinish(val: FormState) {
  console.log('form value', val)
  //   密码进行加密
//   const obj: FormState = {
//     email: val.email,
//     captcha: val.captcha,
//     password: SparkMd5.hash(val.password)
//   }
//   const ret = await userLogin(obj)
//   console.log('login ret', ret)
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
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    z-index: 10;
  }
}
</style>
