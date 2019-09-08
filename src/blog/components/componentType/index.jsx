import React from 'react';
// 引入json数据
import Data from './data.json'
// 引入描述折叠面板、卡片组件
import { Collapse, Card } from 'antd';
const { Panel } = Collapse;

export default () => {
	return (
		<Collapse accordion>
			{/* 循环第一层：知识笔记概览 */}
			{Data.data.map((item, index) => {
				return <Panel header={item.title} key={index}>
					{/* 三元表达式 判断数据中有没有isMap属性 ? 直接循环arrData数组 ：在Collapse插件里再循环第二层数据结构 */}
					{item.isMap ?
						item.arrData.map((item, index) => {
							return < p key={index}> {item}</p>
						}) :
						// 在执行折叠面板
						<Collapse>
							{/* 循环第二层arrData */}
							{item.arrData.map((item, index) => {
								return <Panel header={item.title} key={index}>
									{/* 循环第三层itemData */}
									{item.itemData.map((item, index) => {
										if (typeof item === 'object') {// 如果itemData数据里的是对象
											return (
												// 使用卡片组件，循环Card数据里的每一项
												<Card size="small" title={item.text} key={index}>
													{item.cards.map((item, index) => {
														return <p key={index}>{item}</p>
													})}
												</Card>
											)
										} else {
											return (
												<p key={index}>{item}</p>
											)
										}
									})}
								</Panel>
							})}
						</Collapse>
					}
				</Panel>
			})}
		</Collapse>
	)
}