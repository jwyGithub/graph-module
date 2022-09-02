import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'graph-lib',
    base: './',
    themeConfig: {
        nav: [
            {
                text: '相关链接',
                items: [
                    { text: 'mxgraph', link: 'https://github.com/jgraph/mxgraph' },
                    { text: 'maxgraph', link: 'https://github.com/maxGraph/maxGraph' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'introduction', link: '/' },
                    { text: 'Getting Started', link: '/guide/getting-started' }
                ]
            },
            {
                text: 'Config',
                items: [{ text: 'Global Config', link: '/config/global-config' }]
            },
            {
                text: 'Draw',
                items: [
                    { text: 'Draw', link: '/draw/draw' },
                    { text: 'Draw Anchor', link: '/draw/draw-anchor' }
                ]
            },
            {
                text: 'Style',
                items: [
                    { text: 'Global Style', link: '/style/register-global-style' },
                    { text: 'Default Style', link: '/style/default-style' }
                ]
            },
            {
                text: 'Shape',
                items: [{ text: 'Global Shape', link: '/shape/global-shape' }]
            },
            {
                text: 'Cell',
                items: [
                    { text: '初始化', link: '/cell/init.md' },
                    { text: '获取所有Vertices', link: '/cell/getVertices' },
                    { text: '获取所有Edges', link: '/cell/getEdges' },
                    { text: '设置cell样式', link: '/cell/setCellStyle' }
                ]
            }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jwyGithub/graph-libs' }]
    }
});
