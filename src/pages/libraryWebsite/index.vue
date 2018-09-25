<template>
    <d2-container  type="ghost">

        <el-col :span="12">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#A632E7"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu index="1" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span >导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" >选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>导航二</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航三</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航四</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航五</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航六</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="6-1">选项1</el-menu-item>
                        <el-menu-item index="6-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7" class="el-menu-submenu">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>导航七</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="7-1">选项1</el-menu-item>
                        <el-menu-item index="7-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="8">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航八</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <v-contextmenu ref="contextmenu">
            <v-contextmenu-item @click="handleClick" style="color: blue">编辑</v-contextmenu-item>
            <v-contextmenu-item @click="handleClick" style="color: red">删除</v-contextmenu-item>
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

            <!--新增-->
            <el-col closable type="t_blank" span="6" style="margin-top:40px;width:12%;text-align:center;" v-contextmenu:contextmenuAdd >
                <el-button type="primary" shadow="hover" class="elButton"  icon="el-icon-circle-plus" @click="addClick" >
                </el-button>
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
                    { name: '斗鱼', imgsrc: 'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/200001.png',target:"framename",href:"https://www.douyu.com/" }
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