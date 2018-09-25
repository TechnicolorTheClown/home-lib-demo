<template>
    <d2-container  type="ghost" better-scroll >
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

<script type="javascript">
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
            handleClick (vm, event) {
                this.$message({
                    message: `你点击了${vm.$slots.default[0].text}`,
                    type: 'info'
                })
            },
            addClick(event){
                this.$message({
                    message: `你点击了新增`,
                    type: 'info'
                })
            }
        }
    }
    /*_blank	在新窗口中打开被链接文档。
    _self	默认。在相同的框架中打开被链接文档。
    _parent	在父框架集中打开被链接文档。
    _top	在整个窗口中打开被链接文档。
    framename	在指定的框架中打开被链接文档。*/

</script>

<style scoped>
    @import './style/pub.scss';

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