<template>
  <Bililayout>
    <div class="login-container">
      <!-- 表单选择器 -->
      <div class="login-form">
        <!-- 登陆表单 -->
        <a-form :model="formState" @finish="onFinish">
          <!-- 用户名框 -->
          <a-form-item name="email" :rules="[{ required: true, message: '用户名' }]">
            <a-input placeholder="邮箱" v-model:value="formState.email">
              <!-- 添加一个icon插槽 -->
              <template #prefix>
                <UserOutlined></UserOutlined>
              </template>
            </a-input>
          </a-form-item>

          <!-- 密码框 -->
          <a-form-item name="passwd" :rules="[{ required: true, message: '请输入密码' }]">
            <a-input-password placeholder="密码" v-model:value="formState.passwd">
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
  </Bililayout>
</template>

<script setup lang="ts">
import Bililayout from '@/layouts/default.vue'
import { ref, reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import SparkMd5 from 'spark-md5'
import { useRouter } from 'vue-router'
import { userLoginApi } from '@/apis/user'
import { useUserStore } from '@/stores/user'

const { setToken } = useUserStore()
const router = useRouter()

interface FormState {
  email: string
  passwd: string
  captcha: string
}

// 表格初始值
const formState = reactive<FormState>({
  email: '316783812@qq.com',
  passwd: '316783812',
  captcha: ''
})

// 不输入值不允许点击登录
const disabled = computed(() => {
  return !(formState.email && formState.passwd && formState.captcha)
})

//设定验证码
// 通过api结尾要添加?
const captcha = ref('/api/captcha?')

// 点击图片验证码发生改变
function updateCaptcha() {
  captcha.value = `/api/captcha?${Math.random()}`
}

// 点击登录按钮事件

async function onFinish(val: FormState) {
  console.log('form value', val)
  //   密码进行加密
  const obj: FormState = {
    email: val.email,
    captcha: val.captcha,
    passwd: SparkMd5.hash(val.passwd)
  }
  // 发送登录请求
  const ret = await userLoginApi(obj)
  console.log('login ret', ret)
  // 如果登录成功返回首页
  if (ret.token) {
    setToken(ret.token)
    router.push('/')
  }
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
  // 找一张图作为登陆背景
  background-image: url('/backimg.png');
  background-size: cover;
  background-position: center;
  .login-form {
    width: 400px;
    height: 300px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    z-index: 10;
    /* 向上移动 200 像素 */
    transform: translateY(-200px);
  }
}
</style>
