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

const rights = ref(['消息', '动态', '收藏', '历史', '创作中心'])
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
  @include sub(logo) {
    position: relative;
    bottom: 140px;
    left: 220px;
  }
  // 修改标签样式
  a {
    color: #fff;
    text-decoration: none;
  }
  //   修改列表样式
  li {
    margin-right: 20px;
    list-style-type: none;
    display: list-item;
  }
  .login {
    position: relative;
    right: -22px;
   
  }
  .back {
    position: relative;
    
    white-space: nowrap;
    right: -12px; 
  }
}
</style>
