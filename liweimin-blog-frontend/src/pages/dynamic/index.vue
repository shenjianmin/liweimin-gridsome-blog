<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input
          placeholder="请输入关键字"
          v-model="searchKey"
          clearable
          style="width: 300px"
        ></el-input>
        <el-button
          @click="$share()"
          style="margin-left: 10px"
          icon="el-icon-share"
          type="warning"
          plain
          circle
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-edit"
          round
          plain
          style="float: right"
          @click="goAdd"
          >写博文</el-button
        >
      </el-card>

      <div v-if="dynamics && dynamics.length > 0">
        <el-card
          shadow="hover"
          v-for="({ node: item }, index) in dynamics"
          :key="'p' + index"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <a
                    style="text-decoration: none; cursor: pointer"
                    @click="goDetails(item.id)"
                  >
                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                    {{ item.title }}
                  </a>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right">
                  <el-button
                    @click="$share('/dynamic/' + item.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-share"
                  ></el-button>
                  <el-button
                    @click="editdynamic(index)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-edit"
                    v-if="token"
                  ></el-button>
                  <el-button
                    @click="deletedynamic(index)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-delete"
                    v-if="token"
                  ></el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
            最近更新 {{ item.updated_at }}
          </div>
          <div
            style="
              font-size: 1.1rem;
              line-height: 1.5;
              color: #303133;
              padding: 10px 0px 0px 0px;
            "
          >
            {{ item.description }}
          </div>
        </el-card>
        <div style="text-align: center">
        </div>
      </div>

      <el-card
        shadow="never"
        style="
          margin-bottom: 20px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        "
        v-if="!dynamics || dynamics.length == 0"
      >
        <font style="font-size: 30px; color: #dddddd">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
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
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1,
      },
      loading: false,
      searchKey: "",
      token: "123",
    };
  },
  mounted() {},
  computed: {
    dynamics() {
      const edges = this.$page.dynamics.edges;
      const dynamic = edges.filter(({ node }) => {
        return node.title.indexOf(this.searchKey) > -1;
      });
      return dynamic;
    },
  },
  methods: {
    editdynamic(index) {
      if (!this.token) {
        this.$message({
          message: "请绑定有效的Token",
          type: "warning",
        });
        return;
      }
      this.$router.push("/dynamic/edit/" + this.dynamics[index].id);
    },
    deletedynamic(index) {
      this.$confirm("是否永久删除该博客?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let dynamic = this.dynamics[index];
        GistApi.delete(dynamic.id).then((result) => {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.dynamics.splice(index, 1);
        });
      });
    },
    goAdd() {
      if (!this.token) {
        this.$message({
          message: "请绑定有效的Token",
          type: "warning",
        });
        return;
      }
      this.$router.push("/dynamic/add");
    },
    goDetails(id) {
      this.$router.push("/dynamic/" + id);
    },
  },
};
</script>