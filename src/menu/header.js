// 菜单 顶栏
export default [
        { path: '/index', title: '首页', icon: 'globe' },
        { path: '/bookmarks', title: '书签', icon: 'star' },
        { path: '/page3', title: '常用网站', icon: 'globe' },
        {
            title: '网站导航',
            icon: 'send',
            children: [
                { path: '/libraryWebsite', title: '网站库', icon: 'life-saver' }
            ]
        },
        {
            title: '工具',
            icon: 'gear',
            children: [
                { path: '/page1', title: '右键菜单' , icon: 'key'},
                { path: `/editor-quill`, title: '富文本编辑器', icon: 'pencil-square-o (edit, edit)' },
                { path: `/editor-simpleMDE`, title: 'markdown编辑器', icon: 'font' }
            ]
        }
   /*{ path: '/home', title: '我的空间', icon: 'folder-o' },
  {
    title: '我的空间',
    icon: 'folder-o',
    children: [
      { path: '/bookmarks', title: '书签' },
      { path: '/page2', title: '历史记录' },
      { path: '/page3', title: '页面 3' },
        { path: '/page-demo', title: '新建示例' }
    ]
  },
  {
      title: '网站导航',
      icon: 'folder-o',
      children: [
          { path: '/page1', title: '右键菜单' },
          { path: '/page2', title: '页面 2' },
          { path: '/page3', title: '页面 3' }
      ]
  },
    {
        title: '设置',
        icon: 'folder-o',
        children: [
            { path: '/page1', title: '页面 1' },
            { path: '/page2', title: '页面 2' },
            { path: '/page3', title: '页面 3' }
        ]
    }*/
]
