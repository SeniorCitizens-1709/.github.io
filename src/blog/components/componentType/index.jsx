import React from 'react';
// 引入描述列表组件
import { Descriptions, Badge } from 'antd';

export default ()=>{
	return (
		<Descriptions title="组件分类">
  			<Descriptions.Item label="无状态组件" span={3}>
				无状态组件
			</Descriptions.Item>
  			<Descriptions.Item label="class组件" span={3}>
				class组件
			</Descriptions.Item>
  			<Descriptions.Item label="高阶组件" span={3}>
				高阶组件
			</Descriptions.Item>

  			<Descriptions.Item label="Status" span={3}>
      			<Badge status="processing" text="Running" />
    		</Descriptions.Item>
  		</Descriptions>
	)
}