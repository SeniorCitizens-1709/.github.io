import React from 'react';
// 引入卡片组件
import { Card, Col, Row } from 'antd';
import data from  './data.json'
import './index.scss'
export default  ()=>{
	return (
		<div>
			<Row gutter={16}>
				{
					data.ReactBase.map((item,index)=>{
						return (
							<Col className='LJG-col' span={8} key={index}>
    		    				<Card className='LJG-card' title={item.title} bordered={true}>
									<h2>{item.xx}</h2>
									<p className='LJG-card-p'>{item.content}</p>
									<p className='LJG-card-p'>{item.content1}</p>
									<p className='LJG-card-p'>{item.content2}</p>
									<p className='LJG-card-p'>{item.content3}</p>
									<p className='LJG-card-p'>{item.content4}</p>
    		    				</Card>
    		  				</Col>
						)
					})
				}
    		</Row>
		</div>
	)
}