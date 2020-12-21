<template>
  <Layout>
      <div style="min-height: 600px">
        <el-card shadow="never" style="min-height: 400px" v-if="dynamic.id">
            <div slot="header">
                <span>{{dynamic.title}}</span>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{dynamic.created_at}}
                <br> 更新 {{dynamic.updated_at}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{dynamic.description}}</pre>
            </div>
            <img :src="GRIDSOME_API_URL + dynamic.img.url" style="width: 100%;border-radius:5px;">
        </el-card>
        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!dynamic.id">
            <font style="font-size: 30px;color:#dddddd ">
                <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
            </font>
        </el-card>
    </div>
  </Layout>
</template>
<page-query>
query {
  dynamics: allStrapiDynamic {
    edges {
      node{
        id
        title
        description
        created_at
        updated_at
        img{
          url
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
      dynamic() {
          return this.$page.dynamics.edges[0].node
      }
  },
  data() {
      return {
      }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}
</style>