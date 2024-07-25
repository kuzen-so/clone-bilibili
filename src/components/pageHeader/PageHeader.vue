<template>
  <div class="bili-header">
    <!-- header bar -->
    <div class="bili-header__bar">
      <!-- bar左边布局 -->
      <ul class="left-entry">
        <!-- 首页按钮 -->
        <li>
          <a href="//www.bilibili.com" class="entry-title"
            ><svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="zhuzhan-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
                fill="currentColor"
              ></path>
            </svg>
            <span> 首页</span></a
          >
        </li>

        <li v-for="link in links" :key="link.name">
          <a href="link.url" class="entry-title">{{ link.name }}</a>
        </li>
        <!-- 下载客户端按钮 -->
        <li>
          <a
            href="//app.bilibili.com"
            target="_blank"
            class="download-entry download-client-trigger"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="download-client-trigger__icon"
            >
              <path
                d="M7.23181 8.65895V1.75796C7.23181 1.33935 7.57582 1 8.00018 1C8.42453 1 8.76854 1.33935 8.76854 1.75796V8.67097L9.98589 7.47009C10.286 7.17409 10.7725 7.17409 11.0725 7.47009C11.3726 7.7661 11.3726 8.24601 11.0725 8.54201L8.54958 11.0308C8.24952 11.3268 7.76302 11.3268 7.46295 11.0308L4.94002 8.54201C4.63995 8.24601 4.63995 7.7661 4.94002 7.47009C5.24008 7.17409 5.72658 7.17409 6.02665 7.47009L7.23181 8.65895Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.48023 4.29936C2.40686 4.29936 1.53672 5.15772 1.53672 6.21656V11.5669C1.53672 12.6257 2.40686 13.4841 3.48023 13.4841H12.5198C13.5931 13.4841 14.4633 12.6257 14.4633 11.5669V6.21656C14.4633 5.15772 13.5931 4.29936 12.5198 4.29936H11.6158C11.1915 4.29936 10.8475 3.96001 10.8475 3.5414C10.8475 3.12279 11.1915 2.78344 11.6158 2.78344H12.5198C14.4418 2.78344 16 4.3205 16 6.21656V11.5669C16 13.4629 14.4418 15 12.5198 15H3.48023C1.55815 15 0 13.4629 0 11.5669V6.21656C0 4.3205 1.55815 2.78344 3.48023 2.78344H4.38418C4.80853 2.78344 5.15254 3.12279 5.15254 3.5414C5.15254 3.96001 4.80853 4.29936 4.38418 4.29936H3.48023Z"
                fill="currentColor"
              ></path>
            </svg>
            <span> 下载客户端</span></a
          >
        </li>
      </ul>

      <!-- header右边布局 -->
      <ul class="right-entry">
        <div class="login">
          <li v-if="token">
            <span>kuzen</span>
          </li>
          <!-- 跳转登陆页面 -->
          <li v-else>
            <router-link to="/login">登陆</router-link>
          </li>
        </div>

        <div class="back">
          <li>
            <router-link to="/">大会员</router-link>
          </li>
        </div>
        <li>
          <a class="right-entry__outside" href="//message.bilibili.com" target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="right-entry-icon"
          >
            <path
              d="M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z"
              fill="currentColor"
            ></path>
            <path
              d="M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="right-entry-text">消息</span>
        </a>
        </li>
        <!-- 普通按钮 -->
        <li class="right-entry-item" v-for="r in rights" :key="r">
          <a href="">{{ r }}</a>
        </li>
        <!-- 投稿按钮 -->
        <li>
          <div class="upload-btn">
            <UploadOutlined />
            <span>投稿</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- banner图 -->
    <div class="bili-header__banner">
      <img class="banner" src="/banner.png" />
    </div>
    <!-- logo -->
    <div class="bili-header__logo">
      <a href="https://www.bilibili.com/">
        <img src="/logo.png" width="160" height="78" alt="" class="logo" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'

const { token } = useUserStore()
const links = ref([
  { name: '番剧', path: '/' },
  { name: '游戏中心', path: '/' },
  { name: '会员购', path: '/' },
  { name: '漫画', path: '/' },
  { name: '赛事', path: '/' }
])

const rights = ref(['动态', '收藏', '历史', '创作中心'])
</script>

<style lang="scss">
@import '@/styles/mixin.scss';
// scss对css的嵌套

@include b(header) {
  min-height: 64px;
  position: relative;
  width: 100%;
  background: #fff;
  white-space: nowrap;

  @include sub(bar) {
    position: absolute;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 64px;
    width: 100%;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
    .right-entry__outside {
      transform: translateX(10px);
    }

    .right-entry-icon {
      margin-bottom: 1px;
    }

    & .left-entry {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
      }

      .entry-title {
        display: flex;
        align-items: center;
        flex-direction: row; // 确保图标和文字水平排列

        svg {
          margin-right: 4px; /* 根据需要调整间距 */
          vertical-align: bottom;
        }

        span {
          vertical-align: bottom;
        }
      }
    }
    & .right-entry {
      display: flex;
      align-items: center;
      .right-entry-item {
        display: block;
        flex-shrink: 0;
        margin-right: 5px;
        text-align: center;
        cursor: pointer;
      }
    }
    // 投稿按钮
    & .upload-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      width: 90px;
      height: 34px;
      border-radius: 8px;
      background: #fb7299;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
  // banner图
  @include sub(banner) {
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    max-height: 250px;

    // 超出部分隐藏
    overflow: hidden;
    .banner {
      widows: 100vw;
    }
  }
  // logo图标
  @include sub(logo) {
    position: absolute;
    bottom: 60px;
    left: 80px;
  }
  // 修改标签样式
  a {
    color: #fff;
    text-decoration: none;
  }
  //  修改列表样式
  li {
    margin-right: 20px;
    list-style-type: none;
    display: list-item;
  }
  // 登录链接
  .login {
    position: relative;
    right: -28px;
  }
  // 大会员链接
  .back {
    position: relative;
    right: -18px;
  }
}
</style>
