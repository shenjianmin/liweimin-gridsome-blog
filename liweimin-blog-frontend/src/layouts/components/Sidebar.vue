<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect">
                <el-menu-item
                    v-for="item in constantRouterMap"
                    :key="item.path"
                    :index="item.path">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                constantRouterMap: [
                    {
                        path: '/',
                        icon: 'el-icon-star-off',
                        title: '最新动态'
                    },
                    {
                        path: '/fan',
                        icon: 'el-icon-mobile-phone',
                        title: '社交圈'
                    },
                    {
                        path: '/dynamic',
                        icon: 'el-icon-edit-outline',
                        title: '博客列表'
                    },
                    {
                        path: '/project',
                        icon: 'el-icon-service',
                        title: '开源项目'
                    },
                ],
                active: "",
                parentUrl: "",
                menuList: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>