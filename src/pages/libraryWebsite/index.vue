<template>
    <d2-container  type="ghost">

        <el-col :span="12">
            <el-menu
                     default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"

                     style="background:#000000;opacity:0.5; text-color:#B8860B;"   >

                <div   v-for="nav in navigation"   >
                    <el-submenu :index="nav.navInt" class="el-menu-submenu">
                        <template slot="title">
                            <i :class="nav.navIcon"></i>
                            <span >{{nav.navName}}</span>
                        </template>
                        <el-menu-item-group style="background:#000000;opacity:0.8;text-color:#B8860B;" >
                            <el-menu-item :index="nav.navInt+'-1'" ><span color="red">选项1</span></el-menu-item>
                            <el-menu-item :index="nav.navInt+'-2'" ><span color="red">选项3</span></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </el-menu>
        </el-col>
        <v-contextmenu ref="contextmenu">
            <v-contextmenu-item @click="handleClick" style="color: blue">保存书签</v-contextmenu-item>
        </v-contextmenu>

        <v-contextmenu ref="contextmenuAdd">
            <v-contextmenu-item disabled @click="handleClick">禁用</v-contextmenu-item>
        </v-contextmenu>
        <el-row :gutter="12" style="width:70%;margin: 0 auto">

            <el-col  v-for="tag in tags" :key="tag.name"  closable :type="tag.type" :span="6"   style="margin-top:40px;width:11%;text-align:center;" >
                <a :href="tag.href"  :target="tag.target" >
                    <el-tooltip class="item" effect="dark" :content="tag.name" placement="top-end" >

                        <el-button type="primary" shadow="hover" class="elButton" v-contextmenu:contextmenu >
                            <img :src="tag.imgsrc" style=" width:40px; height:40px; border-radius:40px; font-size: 60px;  padding:0px;" >
                        </el-button>

                    </el-tooltip>

                </a><br/>
                <div style="height: 10px;"></div>
                <span style="align-content: center">{{tag.name}}</span>
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
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_blank",href:"http://fanyi.youdao.com/"},
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_self",href:"http://fanyi.youdao.com/" },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1',target:"_parent",href:"https://www.baidu.com/link?url=hOjteCSu5fZWlQeMDEsArEHxHOESQ75rUpDec5dtdxq&wd=&eqid=ad8f89d60008c100000000045ba777eb" },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png',target:"_top",href:"https://www.baidu.com/link?url=wddEsVY5pxTSqv2ufgh9GHapTkikUmGahtRmKQsQPvy&wd=&eqid=b2ee31a90007c4b8000000045ba77805" },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" },
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_self",href:"http://fanyi.youdao.com/" },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1',target:"_parent",href:"https://www.baidu.com/link?url=hOjteCSu5fZWlQeMDEsArEHxHOESQ75rUpDec5dtdxq&wd=&eqid=ad8f89d60008c100000000045ba777eb" },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png',target:"_top",href:"https://www.baidu.com/link?url=wddEsVY5pxTSqv2ufgh9GHapTkikUmGahtRmKQsQPvy&wd=&eqid=b2ee31a90007c4b8000000045ba77805" },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" },
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_self",href:"http://fanyi.youdao.com/" },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1',target:"_parent",href:"https://www.baidu.com/link?url=hOjteCSu5fZWlQeMDEsArEHxHOESQ75rUpDec5dtdxq&wd=&eqid=ad8f89d60008c100000000045ba777eb" },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png',target:"_top",href:"https://www.baidu.com/link?url=wddEsVY5pxTSqv2ufgh9GHapTkikUmGahtRmKQsQPvy&wd=&eqid=b2ee31a90007c4b8000000045ba77805" },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" },
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_self",href:"http://fanyi.youdao.com/" },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1',target:"_parent",href:"https://www.baidu.com/link?url=hOjteCSu5fZWlQeMDEsArEHxHOESQ75rUpDec5dtdxq&wd=&eqid=ad8f89d60008c100000000045ba777eb" },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png',target:"_top",href:"https://www.baidu.com/link?url=wddEsVY5pxTSqv2ufgh9GHapTkikUmGahtRmKQsQPvy&wd=&eqid=b2ee31a90007c4b8000000045ba77805" },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" },
                    { name: '百度糯米', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/9483.png?1',target:"_parent",href:"https://www.baidu.com/link?url=hOjteCSu5fZWlQeMDEsArEHxHOESQ75rUpDec5dtdxq&wd=&eqid=ad8f89d60008c100000000045ba777eb" },
                    { name: '百度网盘', imgsrc: 'https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/7656.png',target:"_top",href:"https://www.baidu.com/link?url=wddEsVY5pxTSqv2ufgh9GHapTkikUmGahtRmKQsQPvy&wd=&eqid=b2ee31a90007c4b8000000045ba77805" },
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" },
                    { name: '有道翻译', imgsrc: 'https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/icon/10603.png',target:"_self",href:"http://fanyi.youdao.com/" }
                ],
                navigation: [
                   /* { navName: '娱乐',navInt: '1', subnavName: '视频',subnavInt:"1-1",navigationId:"100"},*/
                    { navName: '导航一',navInt: '1',navigationId:"101",navIcon:'el-icon-location'},
                    { navName: '导航二',navInt: '2',navigationId:"102",navIcon:'el-icon-location'},
                    { navName: '导航三',navInt: '3',navigationId:"103",navIcon:'el-icon-setting'},
                    { navName: '导航四',navInt: '4',navigationId:"104",navIcon:'el-icon-location'},
                    { navName: '导航五',navInt: '5',navigationId:"105",navIcon:'el-icon-setting'},
                    { navName: '导航六',navInt: '6',navigationId:"106",navIcon:'el-icon-location'},
                    { navName: '导航七',navInt: '7',navigationId:"107",navIcon:'el-icon-setting'}
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo{
        width: 12%;
        position:absolute;
    }
    .el-menu-submenu{
    }
    span{
        color: #CFCFCF;
        margin-left: 5px;
        font-size: 15px;
    }
    .elButton{
        width:70px;
        height:70px;
        border-radius:40px;
        font-size: 60px;
        padding:0px;
        -moz-box-shadow:6px 6px 5px #333333;
        -webkit-box-shadow:6px 6px 5px #333333;
        box-shadow:6px 6px 5px #333333;
    }
</style>