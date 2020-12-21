<template>
<Layout>
    <div>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
            <el-tabs v-model="activeTab" type="card">
                <el-tab-pane :label="'粉丝 '+followersTotal" name="followers" style="padding: 5px">
                    <div>
                        <div v-if="$page.fans.edges.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="({node: item},index) in $page.fans.edges" :key="'followers'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="goDetails(item.id)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.url" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="GRIDSOME_API_URL + item.img.url" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 没有一个粉丝</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</Layout>
</template>
<page-query>
query {
  fans: allStrapiFan {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        content
        img{
            url
        }
        url
        updated_at
        created_at
      }
    }
  }
}
</page-query>
<script>
    export default {
        data() {
            return {
                followersTotal: 2,
                activeTab: "followers",
                followers: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                }
            }
        },
        mounted() {
            this.onSelect()
        },
        methods: {
            onSelect() {
                switch (this.activeTab) {
                    case "followers":
                        this.listFollowers()
                        break
                    default:
                        break
                }
            },
            listFollowers() {
                this.followers.list = [  {
                    "name": "lililiwj",
                    "id": 38744589,
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/38744589?v=4",
                    "url": "https://api.github.com/users/lililiwj",
                    "htmlUrl": "https://github.com/lililiwj",
                },
                {
                    "name": "shuanghewuyanzu",
                    "id": 38081886,
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/38081886?v=4",
                    "url": "https://api.github.com/users/shuanghewuyanzu",
                    "htmlUrl": "https://github.com/shuanghewuyanzu",
                }]
            }, 
            goDetails(id) {
                this.$router.push("/fan/" + id);
            }
        }
    }
</script>