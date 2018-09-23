<template>
    <d2-container>
        <el-row :gutter="12">
            <el-col  v-for="tag in tags" :key="tag.name"  closable :type="tag.type" :span="6" style="margin-top: 10px;">
                <el-card shadow="hover">
                    <el-button style="float: right; padding: 3px 0" type="text">删除</el-button> <el-button style="float: right; padding: 3px 0" type="text">编辑&nbsp;</el-button>
                    <img :src="tag.imgsrc">
                    {{tag.name}}
                </el-card>
            </el-col>
        </el-row>

    </d2-container>

</template>

<script>

    export default {
        name: "index",
        data() {
            return {
                tags: [
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png' },
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png' },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1' },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png' },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png' }
                ]
            };
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 300px;
        height: 150px;
    }
</style>