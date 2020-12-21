<template>
<Layout>
    <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{$page.dynamic.title}}</span>
                    </el-col>
                    <el-col :span="12">
                        <div style="text-align: right;">
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                            <el-button @click="edit" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token">编辑</el-button>
                            <el-button style=" padding: 3px 0" type="text" icon="el-icon-more-outline" >更多博客</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{$page.dynamic.created_at}}
                <br> 更新 {{$page.dynamic.updated_at}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{$page.dynamic.description}}</pre>
            </div>
            <img :src="GRIDSOME_API_URL + $page.dynamic.img.url" class="markdown-body" style="padding-top: 20px">
        </el-card>
    </div>
</Layout>
</template>
<page-query>
query ($id: ID!){
  dynamic: strapiDynamic (id: $id) {
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
</page-query>
<script>
    export default {
        data() {
            return {
                
                loading: false,
                token: 1
            }
        },
        mounted() {
        },
        methods: {
            edit() {
                if (!this.token) {
                    this.$message({
                        message: '请绑定有效的Token',
                        type: 'warning'
                    })
                    return
                }
            },
        }
    }
</script>