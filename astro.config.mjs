// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://git.lvjinlove.cn',

	integrations: [
		starlight({
			title: '成贤神秘小站点',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/qlsalj/blog' }
			],
			sidebar: [
				{
					label: '新生指南',
					items: [
						{ label: '新生必看', slug: 'guides/freshman' },
						{ label: '规则怪谈', slug: 'guides/bobo' },
					],
				},
				{
					label: '计协事务',
					items: [
						{ label: '计协招新', slug: 'pages/recruitment' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/qlsalj/blog/edit/main/',
			},
		}),
	],

	adapter: vercel(),
});